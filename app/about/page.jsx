import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/Breadcrumb';

export const metadata = {
  title: 'About Us | L&J Landscaping — Family-Owned Since 2022, Framingham MA',
  description:
    'Two generations of landscaping expertise. Luis and Jose bring 27+ years of hands-on experience to every lawn in Framingham, Natick, and Metro West Boston.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main>
      <BreadcrumbSchema page="About" path="/about" />
      {/* Hero */}
      <section style={{ background: '#1f3d2b', textAlign: 'center', padding: '80px 24px' }}>
        <div className="wrap">
          <p style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a24b', fontWeight: 600, marginBottom: '14px' }}>
            Our Story
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', color: '#f7f4ec', lineHeight: 1.08 }}>
            Two generations.
          </h1>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', color: '#c9a24b', fontStyle: 'italic', lineHeight: 1.08, marginTop: '4px' }}>
            One standard.
          </p>
          <p style={{ marginTop: '24px', maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto', color: 'rgba(247,244,236,0.8)', fontSize: '17px', lineHeight: 1.7 }}>
            For nearly three decades, this family has been keeping Metro West properties
            clean, green, and cared for. Same hands. New name.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pad" style={{ background: '#f7f4ec' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-story-grid">
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(31,61,43,0.18)' }}>
              <Image
                src="/Luis image.webp"
                alt="Luis — co-owner of L&J Landscaping"
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="kicker">The Family</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 36px)', color: '#1f3d2b', lineHeight: 1.15, marginBottom: '20px' }}>
                Built by hand, season after season.
              </h2>
              <div style={{ color: 'rgba(28,27,23,0.78)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '16px' }}>
                <p>
                  Jose has been in the landscaping trade for over 27 years, building a
                  reputation across Metro West one property at a time — entirely by word of
                  mouth. No website, no ads. Just quality work and clients who kept calling back.
                </p>
                <p>
                  Luis joined the crew in 2020, learning the trade from the ground up alongside
                  his father. In 2022 they launched L&amp;J Landscaping together — a fresh name
                  carrying forward everything Jose built: the reliability, the attention to detail,
                  and the belief that every property deserves to be treated like their own.
                </p>
                <p>
                  Jose still works on the crew today. When you hire L&amp;J, you get two
                  generations of experience showing up at your property every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pad" style={{ background: '#e7e1d3' }}>
        <div className="wrap center">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: '#1f3d2b', marginBottom: '48px' }}>
            What we stand for.
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', textAlign: 'center' }} className="values-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                ),
                title: 'We show up',
                desc: 'On time, every visit. No last-minute cancellations.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                ),
                title: 'We treat it like ours',
                desc: "Your property gets the same care we'd give our own.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'Personally accountable',
                desc: 'When you call, you reach the owner. Not a call center.',
              },
            ].map((v) => (
              <div key={v.title} style={{ padding: '32px 24px', background: '#f7f4ec', borderRadius: '16px' }}>
                <div style={{ color: '#c9a24b', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{v.icon}</div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: '#1f3d2b', marginBottom: '8px' }}>{v.title}</p>
                <p style={{ fontSize: '14px', color: 'rgba(28,27,23,0.65)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crew photo */}
      <section className="pad" style={{ background: '#f7f4ec' }}>
        <div className="wrap center">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: '#1f3d2b', marginBottom: '32px' }}>
            The crew behind the work.
          </h3>
          <div style={{ position: 'relative', width: '100%', maxWidth: '820px', margin: '0 auto', aspectRatio: '4 / 3', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(31,61,43,0.18)' }}>
            <Image
              src="/lj_crew_004.jpg"
              alt="The L&J Landscaping crew"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 880px) 100vw, 820px"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1f3d2b', padding: '72px 24px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', color: '#f7f4ec', fontSize: '28px' }}>
          Ready to work with us?
        </h3>
        <p style={{ color: 'rgba(247,244,236,0.7)', marginTop: '8px', fontSize: '16px' }}>
          Tell us about your property and we&apos;ll be in touch.
        </p>
        <Link href="/#quote" className="btn" style={{ marginTop: '24px' }}>
          Request a Free Quote
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
