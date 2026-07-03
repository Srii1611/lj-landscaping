/**
 * One-shot media optimizer for the public/ site assets.
 *
 * - JPEGs: recompressed in place (same filename), longest edge capped at 2048px,
 *   mozjpeg quality 80. EXIF auto-orient applied before metadata is stripped.
 * - Photo PNGs: converted to WebP (new .webp file, original .png removed). The two
 *   code references are updated separately.
 * - Every original is copied to a backup dir first (BACKUP_DIR env var).
 *
 * Only touches files actually referenced by the site (parsed from data/gallery.js
 * plus a small explicit list), so unused assets are left alone.
 *
 * Usage: BACKUP_DIR=/path node scripts/optimize-media.mjs
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');
const BACKUP = process.env.BACKUP_DIR;
if (!BACKUP) {
  console.error('Set BACKUP_DIR');
  process.exit(1);
}
fs.mkdirSync(BACKUP, { recursive: true });

const MAX_EDGE = 2048;
const JPEG_Q = 80;
const WEBP_Q = 82;

// --- Build the target list from what the site references ---------------------
const galleryJs = fs.readFileSync(path.join(ROOT, 'data', 'gallery.js'), 'utf8');
const gallerySrcs = [...galleryJs.matchAll(/src:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);

const explicit = ['/hero-poster.jpg', '/Luis image.png', '/lj_crew_004.jpg'];

const targets = [...new Set([...gallerySrcs, ...explicit])]
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .map((f) => f.replace(/^\//, ''));

const fmt = (b) => (b / 1048576).toFixed(2).padStart(7) + ' MB';
const rows = [];
let beforeTotal = 0;
let afterTotal = 0;

for (const rel of targets) {
  const abs = path.join(PUBLIC, rel);
  if (!fs.existsSync(abs)) {
    rows.push({ file: rel, note: 'MISSING — skipped' });
    continue;
  }

  const before = fs.statSync(abs).size;
  beforeTotal += before;

  // Back up original (flatten spaces/slashes into a safe name)
  const backupName = rel.replace(/[\\/]/g, '__');
  fs.copyFileSync(abs, path.join(BACKUP, backupName));

  const isPng = /\.png$/i.test(rel);
  // Read into a buffer so sharp/libvips never keeps the source file open —
  // on Windows an mmap'd handle blocks the in-place overwrite below.
  const input = fs.readFileSync(abs);
  const pipeline = sharp(input)
    .rotate() // auto-orient from EXIF, then metadata is dropped
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true });

  if (isPng) {
    // Convert photo PNG -> WebP
    const outRel = rel.replace(/\.png$/i, '.webp');
    const outAbs = path.join(PUBLIC, outRel);
    const buf = await pipeline.webp({ quality: WEBP_Q }).toBuffer();
    fs.writeFileSync(outAbs, buf);
    fs.rmSync(abs); // remove original PNG
    const after = buf.length;
    afterTotal += after;
    rows.push({ file: `${rel} -> ${outRel}`, before, after });
  } else {
    // Recompress JPEG in place
    const buf = await pipeline.jpeg({ quality: JPEG_Q, mozjpeg: true }).toBuffer();
    fs.writeFileSync(abs, buf);
    const after = buf.length;
    afterTotal += after;
    rows.push({ file: rel, before, after });
  }
}

// --- Report ------------------------------------------------------------------
console.log('\nfile                                        before      after     saved');
console.log('-'.repeat(78));
for (const r of rows) {
  if (r.note) {
    console.log(`${r.file.padEnd(44)}${r.note}`);
    continue;
  }
  const saved = ((1 - r.after / r.before) * 100).toFixed(0) + '%';
  console.log(`${r.file.padEnd(44)}${fmt(r.before)} ${fmt(r.after)} ${saved.padStart(6)}`);
}
console.log('-'.repeat(78));
console.log(
  `${'TOTAL'.padEnd(44)}${fmt(beforeTotal)} ${fmt(afterTotal)} ` +
    `${((1 - afterTotal / beforeTotal) * 100).toFixed(0)}%`.padStart(7),
);
console.log(`\nImages processed: ${rows.filter((r) => !r.note).length}`);
console.log(`Backups in: ${BACKUP}`);
