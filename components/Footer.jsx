/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'linear-gradient(180deg, #1a3425 0%, #142a1e 100%)', color: '#f7f4ec' }}>

      {/* Main footer content */}
      <div className="wrap">
        <div className="footer-top" style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
          gap: '48px',
          padding: '72px 0 56px',
        }}>

          {/* Brand + Logo */}
          <div>
            <img
              src="/logo.png"
              alt="L&J Landscaping"
              style={{ height: '170px', width: 'auto', display: 'block', marginBottom: '20px', marginLeft: '-8px' }}
            />
            <p style={{ fontSize: '14px', color: '#f0e6ce', opacity: 0.7, maxWidth: '280px', lineHeight: 1.7 }}>
              Family-owned landscaping and lawn care, serving Framingham, Natick, and Greater Boston&apos;s Metro West
              for nearly three decades. Two generations, one standard.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '20px' }}>
              <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240,230,206,0.5)', transition: 'color 0.2s' }} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240,230,206,0.5)', transition: 'color 0.2s' }} aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 style={{
              fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c9a24b', marginBottom: '20px', fontFamily: 'var(--font-display)', fontWeight: 700,
            }}>
              Services
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Lawn Maintenance', 'Spring Cleanup', 'Fall Cleanup', 'Light Masonry & Patios', 'Fencing', 'Aeration'].map((s) => (
                <li key={s}>
                  <Link href="/services" style={{ fontSize: '14.5px', color: '#f0e6ce', opacity: 0.7, transition: 'all 0.2s' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h5 style={{
              fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c9a24b', marginBottom: '20px', fontFamily: 'var(--font-display)', fontWeight: 700,
            }}>
              Explore
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[['/our-work', 'Our Work'], ['/about', 'Our Story'], ['/reviews', 'Reviews'], ['/service-area', 'Service Area']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} style={{ fontSize: '14.5px', color: '#f0e6ce', opacity: 0.7, transition: 'all 0.2s' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{
              fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c9a24b', marginBottom: '20px', fontFamily: 'var(--font-display)', fontWeight: 700,
            }}>
              Get in Touch
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: '#f0e6ce', opacity: 0.7 }}>
              <a href="tel:+15086650285" style={{ color: 'inherit', transition: 'color 0.2s' }}>Phone: (508) 665-0285</a>
              <a href="mailto:landjlandscapingma@gmail.com" style={{ color: 'inherit', transition: 'color 0.2s', wordBreak: 'break-word' }}>Email: landjlandscapingma@gmail.com</a>
              <p>12 Torrey St, Framingham, MA</p>
            </div>
            <Link href="/#quote" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              marginTop: '18px', color: '#c9a24b', fontWeight: 700, fontSize: '14px',
              letterSpacing: '0.02em', transition: 'all 0.2s',
            }}>
              Request a free estimate &rarr;
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,162,75,0.25), transparent)' }} />

        {/* Bottom bar */}
        <div style={{
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12.5px',
          color: 'rgba(240,230,206,0.4)',
        }}>
          <span>&copy; {year} L&amp;J Landscaping. All rights reserved.</span>
          <span>Family-owned &middot; 27 years in the trade.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .footer-top { grid-template-columns: 1fr 1fr !important; gap: 40px; } }
        @media (max-width: 520px) { .footer-top { grid-template-columns: 1fr !important; } }
        footer ul a:hover { color: #c9a24b !important; opacity: 1 !important; }
      `}</style>
    </footer>
  );
}
