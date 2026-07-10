'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { galleryItems, categories } from '@/data/gallery';

export default function OurWorkGallery() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all' ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <main>
      {/* Page Hero */}
      <section className="pad-sm" style={{ background: '#f7f4ec' }}>
        <div className="wrap center">
          <p className="kicker">Our Portfolio</p>
          <h1 className="h2">Landscaping projects that speak for themselves.</h1>
          <p className="lead">
            Every lawn, every cleanup, every patio — photographed on the job.
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <div style={{ background: '#f7f4ec', borderBottom: '1px solid #e7e1d3', padding: '20px 0' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              style={{
                padding: '10px 24px',
                borderRadius: '999px',
                fontSize: '14px',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: active === cat.key ? '#1f3d2b' : '#e7e1d3',
                color: active === cat.key ? '#f7f4ec' : '#1c1b17',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <section className="pad" style={{ background: '#f7f4ec' }}>
        <div className="wrap">
          <h2 className="sr-only">Recent Projects</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }} className="portfolio-grid">
            {filtered.map((item) => (
              <div key={item.id} style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(231,225,211,0.8)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                background: '#fff',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 560px) 100vw, (max-width: 880px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '14px 18px', borderTop: '1px solid #e7e1d3' }}>
                  <p style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(28,27,23,0.55)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}>
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{
        background: '#1f3d2b',
        padding: '72px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: '#f7f4ec', fontSize: '28px' }}>
          Like what you see?
        </h2>
        <p style={{ color: 'rgba(247,244,236,0.7)', marginTop: '8px', fontSize: '16px' }}>
          Let&apos;s talk about your property.
        </p>
        <Link href="/#quote" className="btn" style={{ marginTop: '24px' }}>
          Request a Free Quote
        </Link>
      </section>

      <style>{`
        @media (max-width: 880px) { .portfolio-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .portfolio-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
