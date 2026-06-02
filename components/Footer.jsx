export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1f3d2b", color: "#f7f4ec" }}>
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: "40px",
            padding: "70px 0 50px",
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.92 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 700 }}>L&amp;J</span>
              <span style={{ fontSize: "10px", letterSpacing: "0.34em", textTransform: "uppercase", opacity: 0.8, marginTop: "3px" }}>Landscaping</span>
            </div>
            <p style={{ marginTop: "16px", fontSize: "14px", opacity: 0.8, maxWidth: "280px" }}>
              Family-owned landscaping and lawn care, serving Framingham, Natick, and Greater Boston&apos;s Metro West for nearly three decades. Two generations, one standard &mdash; the most reliable crew you&apos;ve seen.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a24b", marginBottom: "16px", fontFamily: "var(--font-body)", fontWeight: 700 }}>Services</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", fontSize: "14.5px", opacity: 0.88 }}>
              {["Lawn Maintenance", "Spring Cleanup", "Fall Cleanup", "Special Services"].map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h5 style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a24b", marginBottom: "16px", fontFamily: "var(--font-body)", fontWeight: 700 }}>Explore</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", fontSize: "14.5px", opacity: 0.88 }}>
              {[["#work", "Our Work"], ["#story", "Our Story"], ["#area", "Service Area"], ["#reviews", "Reviews"]].map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a24b", marginBottom: "16px", fontFamily: "var(--font-body)", fontWeight: 700 }}>Get in touch</h5>
            <p style={{ fontSize: "14.5px", opacity: 0.88, marginBottom: "9px" }}>Phone: (placeholder)</p>
            <p style={{ fontSize: "14.5px", opacity: 0.88, marginBottom: "9px" }}>Email: (placeholder)</p>
            <p style={{ fontSize: "14.5px", opacity: 0.88, marginBottom: "9px" }}>Framingham, MA &middot; Metro West</p>
            <a href="#quote" style={{ display: "inline-block", marginTop: "8px", color: "#c9a24b", fontWeight: 600, fontSize: "14px" }}>
              Request a free estimate &rarr;
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(247,244,236,0.14)", padding: "22px 0", textAlign: "center", fontSize: "12.5px", opacity: 0.55 }}>
          &copy; {year} L&amp;J Landscaping. All rights reserved. &middot; Family-owned &middot; 27 years in the trade.
        </div>
      </div>

      <style>{`
        .footer-top { grid-template-columns: 1.4fr 1fr 1fr 1.2fr; }
        @media (max-width: 880px) { .footer-top { grid-template-columns: 1fr 1fr !important; gap: 36px; } }
        @media (max-width: 520px) { .footer-top { grid-template-columns: 1fr !important; } }
        footer ul a:hover { color: #c9a24b; }
      `}</style>
    </footer>
  );
}
