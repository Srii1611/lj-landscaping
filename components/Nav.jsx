"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* UTILITY BAR */}
      <div className="util">
        <div className="wrap">
          <div className="left">
            <span>Serving Framingham, Natick &amp; Metro West</span>
            <span className="badge">Family-owned &middot; 27 years strong</span>
          </div>
          <div className="right">
            <a href="tel:0000000000">&#128222; (placeholder) phone</a>
            <a href="#quote">Free estimate</a>
          </div>
        </div>
      </div>

      {/* STICKY NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "background .35s ease, box-shadow .35s ease, color .35s ease",
          background: scrolled ? "#f7f4ec" : "transparent",
          color: scrolled ? "#1f3d2b" : "#f7f4ec",
          boxShadow: scrolled ? "0 4px 24px rgba(28,27,23,0.08)" : "none",
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "76px" }}>
          {/* Brand */}
          <a href="#" style={{ display: "flex", flexDirection: "column", lineHeight: 0.92, textDecoration: "none", color: "inherit" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, letterSpacing: "-0.01em" }}>L&amp;J</span>
            <span style={{ fontSize: "10px", letterSpacing: "0.34em", textTransform: "uppercase", opacity: 0.8, marginTop: "3px" }}>Landscaping</span>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop-links" style={{ display: "flex", gap: "30px", fontWeight: 500, fontSize: "15px", alignItems: "center" }}>
            <a href="#services" className="nav-link">Services</a>
            <a href="#work" className="nav-link">Our Work</a>
            <a href="#story" className="nav-link">Our Story</a>
            <a href="#area" className="nav-link">Service Area</a>
            <a href="#reviews" className="nav-link">Reviews</a>
          </div>

          <a href="#quote" className="btn">Request a Quote</a>

          {/* Hamburger */}
          <button
            className="menu-toggle"
            aria-label="Menu"
            onClick={() => setMobileOpen((o) => !o)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "inherit", padding: "4px" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: "#1f3d2b",
              color: "#f7f4ec",
              padding: "18px 24px 26px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              fontSize: "17px",
            }}
          >
            {[
              ["#services", "Services"],
              ["#work", "Our Work"],
              ["#story", "Our Story"],
              ["#area", "Service Area"],
              ["#reviews", "Reviews"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={closeMobile}
                style={{ padding: "6px 0", borderBottom: "1px solid rgba(247,244,236,0.12)" }}
              >
                {label}
              </a>
            ))}
            <a href="#quote" className="btn" onClick={closeMobile} style={{ marginTop: "8px", justifyContent: "center" }}>
              Request a Quote
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
