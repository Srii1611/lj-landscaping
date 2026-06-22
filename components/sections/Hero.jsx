"use client";
import { useState } from "react";

export default function Hero() {
  const [town, setTown] = useState("");

  const goQuote = () => {
    if (town.trim()) {
      window.dispatchEvent(new CustomEvent("quote-prefill", { detail: town.trim() }));
    }
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKey = (e) => {
    if (e.key === "Enter") goQuote();
  };

  return (
    <header
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        marginTop: "-114px",
        paddingTop: "114px",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, background: "#1f3d2b" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Left-side legibility gradient */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(90deg, rgba(16,32,22,0.88) 0%, rgba(16,32,22,0.55) 50%, rgba(16,32,22,0.18) 100%)" }} />
      </div>

      {/* 27-Year badge — desktop only */}
      <div
        className="hero-badge"
        style={{
          position: "absolute", right: "6%", bottom: "14%", zIndex: 4,
          width: "136px", height: "136px", borderRadius: "50%",
          border: "1.5px solid rgba(201,162,75,0.45)",
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", textAlign: "center",
          background: "rgba(31,61,43,0.65)", backdropFilter: "blur(10px)",
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontSize: "48px", fontWeight: 700, color: "#c9a24b", lineHeight: 1 }}>27</span>
        <div style={{ width: "38px", height: "1px", background: "rgba(201,162,75,0.35)", margin: "5px 0" }} />
        <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,244,236,0.85)" }}>Years Strong</span>
      </div>

      {/* Content */}
      <div className="wrap" style={{ position: "relative", zIndex: 3, width: "100%" }}>
        <div style={{ color: "#f7f4ec", padding: "60px 0 80px", maxWidth: "720px" }}>
          <span className="eyebrow">Framingham &middot; Natick &middot; Metro West</span>

          <h1 style={{ fontSize: "clamp(44px, 6.5vw, 82px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.04 }}>
            The <em style={{ fontStyle: "italic", color: "#c9a24b" }}>most reliable</em>
            <br />crew you&apos;ve seen.
          </h1>

          <p style={{ fontSize: "clamp(17px, 2vw, 20px)", marginTop: "24px", maxWidth: "560px", opacity: 0.9, lineHeight: 1.65 }}>
            For nearly three decades, the same family has been keeping Metro West lawns sharp, healthy, and cared for.
            Two generations, one standard &mdash; we show up when we say we will and treat every property like it&apos;s our own.
          </p>

          {/* Quote box */}
          <div
            style={{
              marginTop: "38px", background: "rgba(247,244,236,0.97)", borderRadius: "18px",
              padding: "24px", maxWidth: "540px", boxShadow: "0 28px 70px rgba(16,32,22,0.45)",
            }}
          >
            <label htmlFor="heroTown" style={{ display: "block", color: "#1f3d2b", fontWeight: 700, fontSize: "14px", marginBottom: "12px", letterSpacing: "0.01em" }}>
              Get a free estimate &mdash; start with your town
            </label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "10px", background: "#fff", border: "1.5px solid #e7e1d3", borderRadius: "11px", padding: "12px 14px", minWidth: "180px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#5a7d52" strokeWidth="2" width="20" height="20" style={{ flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <input
                  id="heroTown"
                  type="text"
                  placeholder="Your town or ZIP (e.g. Framingham)"
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                  onKeyDown={handleKey}
                  style={{ border: "none", outline: "none", fontFamily: "var(--font-body)", fontSize: "15px", width: "100%", color: "#1c1b17", background: "transparent" }}
                />
              </div>
              <button className="btn" onClick={goQuote} style={{ padding: "14px 26px", whiteSpace: "nowrap" }}>
                Get My Quote
              </button>
            </div>
            <p style={{ color: "#1f3d2b", opacity: 0.58, fontSize: "12.5px", marginTop: "12px" }}>
              No fixed-date booking &mdash; you pick the day &amp; time window, Luis confirms around your schedule.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) { .hero-badge { display: none; } }
      `}</style>
    </header>
  );
}
