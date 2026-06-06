import Link from "next/link";

const seoLocations = [
  "Framingham Landscaping",
  "Natick Lawn Care",
  "Wayland Landscaping",
  "Sudbury Lawn Care",
  "Ashland Landscaping",
  "Jamaica Plain Landscaping",
  "Roxbury Lawn Care",
  "Wellesley Landscaping",
  "Newton Lawn Care",
  "Weston Landscaping",
  "Holliston Landscaping",
  "Hopkinton Lawn Care",
  "Milford Landscaping",
  "Northborough Lawn Care",
  "Westborough Landscaping",
  "Sherborn Lawn Care",
  "Medfield Landscaping",
  "Dover Landscaping",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1f3d2b", color: "#f7f4ec" }}>
      <div className="wrap">

        {/* Main columns */}
        <div className="footer-top" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: "40px", padding: "70px 0 50px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.92 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 700 }}>L&amp;J</span>
              <span style={{ fontSize: "10px", letterSpacing: "0.34em", textTransform: "uppercase", opacity: 0.8, marginTop: "3px" }}>Landscaping</span>
            </div>
            <p style={{ marginTop: "16px", fontSize: "14px", opacity: 0.78, maxWidth: "280px", lineHeight: 1.65 }}>
              Family-owned landscaping and lawn care, serving Framingham, Natick, and Greater Boston&apos;s Metro West
              for nearly three decades. Two generations, one standard.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a24b", marginBottom: "16px", fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Services
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", fontSize: "14.5px", opacity: 0.85 }}>
              {["Lawn Maintenance", "Spring Cleanup", "Fall Cleanup", "Light Masonry & Patios", "Fencing", "Aeration"].map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h5 style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a24b", marginBottom: "16px", fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Explore
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", fontSize: "14.5px", opacity: 0.85 }}>
              {[["/our-work", "Our Work"], ["/about", "Our Story"], ["/reviews", "Reviews"], ["/contact", "Contact"]].map(([href, label]) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a24b", marginBottom: "16px", fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Get in touch
            </h5>
            <p style={{ fontSize: "14.5px", opacity: 0.85, marginBottom: "9px" }}>Phone: (placeholder)</p>
            <p style={{ fontSize: "14.5px", opacity: 0.85, marginBottom: "9px" }}>Email: (placeholder)</p>
            <p style={{ fontSize: "14.5px", opacity: 0.85, marginBottom: "9px" }}>Framingham, MA &middot; Metro West</p>
            <Link href="/contact" style={{ display: "inline-block", marginTop: "10px", color: "#c9a24b", fontWeight: 600, fontSize: "14px" }}>
              Request a free estimate &rarr;
            </Link>
          </div>
        </div>

        {/* SEO Locations strip */}
        <div style={{ borderTop: "1px solid rgba(247,244,236,0.1)", padding: "28px 0 32px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(247,244,236,0.4)", marginBottom: "14px", fontWeight: 600 }}>
            Areas we serve
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 0" }}>
            {seoLocations.map((loc, i) => (
              <span key={loc}>
                <a href="#area" className="loc-link">{loc}</a>
                {i < seoLocations.length - 1 && (
                  <span style={{ color: "rgba(247,244,236,0.2)", margin: "0 10px" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(247,244,236,0.1)", padding: "22px 0", textAlign: "center", fontSize: "12.5px", opacity: 0.45 }}>
          &copy; {year} L&amp;J Landscaping. All rights reserved. &middot; Family-owned &middot; 27 years in the trade.
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .footer-top { grid-template-columns: 1fr 1fr !important; gap: 36px; } }
        @media (max-width: 520px) { .footer-top { grid-template-columns: 1fr !important; } }
        footer ul a:hover { color: #c9a24b; }
        .loc-link { font-size: 13px; color: rgba(247,244,236,0.55); transition: color .2s; }
        .loc-link:hover { color: #c9a24b; }
      `}</style>
    </footer>
  );
}
