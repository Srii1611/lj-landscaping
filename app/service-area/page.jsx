import Link from "next/link";

const areas = [
  { town: "Framingham", label: "Framingham Landscaping" },
  { town: "Natick", label: "Natick Lawn Care" },
  { town: "Wayland", label: "Wayland Landscaping" },
  { town: "Sudbury", label: "Sudbury Lawn Care" },
  { town: "Ashland", label: "Ashland Landscaping" },
  { town: "Jamaica Plain", label: "Jamaica Plain Landscaping" },
  { town: "Roxbury", label: "Roxbury Lawn Care" },
  { town: "Wellesley", label: "Wellesley Landscaping" },
  { town: "Newton", label: "Newton Lawn Care" },
  { town: "Weston", label: "Weston Landscaping" },
  { town: "Holliston", label: "Holliston Landscaping" },
  { town: "Hopkinton", label: "Hopkinton Lawn Care" },
  { town: "Milford", label: "Milford Landscaping" },
  { town: "Northborough", label: "Northborough Lawn Care" },
  { town: "Westborough", label: "Westborough Landscaping" },
  { town: "Sherborn", label: "Sherborn Lawn Care" },
  { town: "Medfield", label: "Medfield Landscaping" },
  { town: "Dover", label: "Dover Landscaping" },
];

export default function ServiceAreaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pad" style={{ background: '#f7f4ec' }}>
        <div className="wrap center">
          <p className="kicker">Service Area</p>
          <h1 className="h2">Proudly serving Metro West Boston.</h1>
          <p className="lead">
            Family-owned and local — we know these neighborhoods because we live here too. From Framingham to Newton, Natick to Dover, we keep Metro West looking its best.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="pad-sm" style={{ background: '#fff' }}>
        <div className="wrap">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }} className="area-grid">
            {areas.map((area) => (
              <div key={area.town} style={{
                padding: '28px 24px',
                background: '#f7f4ec',
                borderRadius: '14px',
                border: '1px solid #e7e1d3',
                transition: 'box-shadow 0.2s ease',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  color: '#1f3d2b',
                  marginBottom: '6px',
                }}>
                  {area.town}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(28,27,23,0.55)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.03em',
                }}>
                  {area.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#1f3d2b',
        padding: '72px 24px',
        textAlign: 'center',
      }}>
        <h3 style={{ fontFamily: 'var(--font-display)', color: '#f7f4ec', fontSize: '28px' }}>
          Don&apos;t see your town?
        </h3>
        <p style={{ color: 'rgba(247,244,236,0.7)', marginTop: '8px', fontSize: '16px' }}>
          We may still cover your area — just ask.
        </p>
        <Link href="/#quote" className="btn" style={{ marginTop: '24px' }}>
          Get in Touch &rarr;
        </Link>
      </section>

      <style>{`
        @media (max-width: 880px) { .area-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px) { .area-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
