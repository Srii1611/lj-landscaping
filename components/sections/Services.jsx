"use client";
import Image from "next/image";

function PinIcon() {
  return (
    <svg viewBox="0 0 56 70" fill="none" width="60" height="74">
      <path d="M28 0C12.5 0 0 12.5 0 28C0 46 28 70 28 70C28 70 56 46 56 28C56 12.5 43.5 0 28 0Z" fill="#1f3d2b" />
      <path d="M28 15C21.4 15 16 20.4 16 27C16 35.8 28 48 28 48C28 48 40 35.8 40 27C40 20.4 34.6 15 28 15Z" fill="white" opacity="0.85" />
      <circle cx="28" cy="27" r="5" fill="#1f3d2b" opacity="0.6" />
    </svg>
  );
}

function PhotoSlot({ src, alt }) {
  return (
    <div style={{
      aspectRatio: "4/3",
      background: "#e7e1d3",
      borderRadius: "14px 14px 0 0",
      position: "relative", overflow: "hidden",
    }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 560px) 100vw, (max-width: 880px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

function ServiceTile({ src, title, desc, tag }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ position: "relative", paddingBottom: "38px" }}>
        <PhotoSlot src={src} alt={title} />
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
          <PinIcon />
        </div>
      </div>
      <h3 style={{
        fontSize: "14px", fontWeight: 700, letterSpacing: "0.13em",
        textTransform: "uppercase", color: "#1c1b17", marginTop: "14px",
        fontFamily: "var(--font-body)",
      }}>
        {title}
      </h3>
      <p style={{ fontSize: "15px", color: "rgba(28,27,23,0.70)", marginTop: "12px", maxWidth: "300px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
        {desc}
      </p>
      {tag && (
        <span style={{ display: "block", marginTop: "10px", fontSize: "12px", color: "#5a7d52", fontWeight: 600, letterSpacing: "0.04em" }}>
          {tag}
        </span>
      )}
    </div>
  );
}

const services = [
  {
    src: "/svc-lawn.webp",
    title: "Lawn Maintenance",
    desc: "Weekly or biweekly mowing, clean lines, crisp edging, fertilization five times a year, and weed control. The same schedule, the same crew, every visit.",
    tag: "Recurring · weekly / biweekly",
  },
  {
    src: "/svc-spring.webp",
    title: "Spring Cleanup",
    desc: "Clear the winter debris, cut back tired growth, re-edge beds, lay fresh mulch. One thorough visit and the whole property looks alive again.",
    tag: "Seasonal",
  },
  {
    src: "/svc-fall.webp",
    title: "Fall Cleanup",
    desc: "Full leaf removal, final cuts, deep bed and border cleanup. Close the season right so the lawn bounces back lush in spring.",
    tag: "Seasonal",
  },
  {
    src: "/svc-masonry.webp",
    title: "Light Masonry & Patios",
    desc: "Hand-built walkways, steps, and patios — careful stonework, no heavy machinery. Built to last and finished to look like it belongs.",
  },
  {
    src: "/svc-fence.webp",
    title: "Fencing",
    desc: "Clean, sturdy fence installation that defines your space. Straight lines, solid posts, a finish that holds up to New England seasons.",
  },
  {
    src: "/svc-irrigation.webp",
    title: "Irrigation",
    desc: "Smart watering systems installed through our trusted irrigation partner — your lawn gets exactly what it needs, nothing wasted.",
  },
  {
    src: "/svc-tree.webp",
    title: "Tree Work & Pruning",
    desc: "Pruning, shaping, and selective tree care. We cut with a plan, not just a saw — keeping your property healthy, safe, and in proportion.",
  },
  {
    src: "/svc-mulch.webp",
    title: "Mulching & Edging",
    desc: "Fresh mulch and crisp, hand-cut edges — the small details that separate a maintained yard from a truly finished one.",
  },
  {
    src: "/svc-aeration.webp",
    title: "Aeration",
    desc: "Core aeration to relieve compacted soil and let water, air, and nutrients reach the roots. One of the best investments for a healthy lawn.",
    tag: "Ideal: early September",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#ffffff" }} className="pad">
      <div className="wrap center">
        <p className="kicker">What we do</p>
        <h2 className="h2">Everything your yard needs &mdash; handled.</h2>
        <p className="lead" style={{ marginBottom: "56px" }}>
          From a tidy weekly mow to a full seasonal cleanup, we keep it simple: core services done all season, plus the special projects when you want more.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px 32px" }} className="svc-photo-grid">
          {services.map((s) => (
            <ServiceTile key={s.title} {...s} />
          ))}
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop: "64px", background: "#1f3d2b", borderRadius: "20px",
          padding: "36px 40px", display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: "20px",
          textAlign: "left",
        }}>
          <div>
            <h3 style={{ color: "#f7f4ec", fontSize: "22px" }}>Need something else?</h3>
            <p style={{ color: "rgba(247,244,236,0.75)", fontSize: "15px", marginTop: "6px" }}>
              If it makes your property better and it&apos;s in our wheelhouse, just ask. Residential &amp; commercial.
            </p>
          </div>
          <a href="#quote" className="btn" style={{ flexShrink: 0 }}>Tell us about it &rarr;</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .svc-photo-grid { grid-template-columns: 1fr 1fr !important; gap: 40px 24px; } }
        @media (max-width: 560px) { .svc-photo-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
