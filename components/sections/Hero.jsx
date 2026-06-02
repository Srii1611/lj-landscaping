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
        {/* Placeholder with dark-green gradient pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #21412e 0%, #15291d 60%, #102016 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(247,244,236,0.30)",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "repeating-linear-gradient(45deg, rgba(247,244,236,0.025) 0 16px, transparent 16px 32px)",
            }}
          />
          <span style={{ position: "relative", zIndex: 1 }}>Hero photo &mdash; real lawn / crew at work</span>
        </div>
        {/* Dark overlay for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background: "linear-gradient(90deg, rgba(16,32,22,0.86) 0%, rgba(16,32,22,0.55) 45%, rgba(16,32,22,0.25) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="wrap" style={{ position: "relative", zIndex: 3, width: "100%" }}>
        <div style={{ color: "#f7f4ec", padding: "60px 0 80px", maxWidth: "720px" }}>
          <span className="eyebrow">Framingham &middot; Natick &middot; Metro West</span>

          <h1 style={{ fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 600, letterSpacing: "-0.015em" }}>
            The <em style={{ fontStyle: "italic", color: "#c9a24b" }}>most reliable</em>
            <br />crew you&apos;ve seen.
          </h1>

          <p style={{ fontSize: "clamp(17px, 2vw, 20px)", marginTop: "22px", maxWidth: "560px", opacity: 0.92 }}>
            For nearly three decades, the same family has been keeping Metro West lawns sharp, healthy, and cared for.
            Two generations, one standard &mdash; we show up when we say we will, do the work right the first time,
            and treat every property like it&apos;s our own. That&apos;s not a slogan. After 27 years, it&apos;s just how we work.
          </p>

          {/* Quote box */}
          <div
            style={{
              marginTop: "36px",
              background: "rgba(247,244,236,0.97)",
              borderRadius: "16px",
              padding: "22px",
              maxWidth: "540px",
              boxShadow: "0 24px 60px rgba(16,32,22,0.4)",
            }}
          >
            <label
              htmlFor="heroTown"
              style={{ display: "block", color: "#1f3d2b", fontWeight: 700, fontSize: "14px", marginBottom: "10px", letterSpacing: "0.01em" }}
            >
              Get a free estimate &mdash; start with your town
            </label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#fff",
                  border: "1.5px solid #e7e1d3",
                  borderRadius: "11px",
                  padding: "12px 14px",
                  minWidth: "180px",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#5a7d52" strokeWidth="2" width="20" height="20" style={{ flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <input
                  id="heroTown"
                  type="text"
                  placeholder="Your town or ZIP (e.g. Framingham)"
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                  onKeyDown={handleKey}
                  style={{
                    border: "none",
                    outline: "none",
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    width: "100%",
                    color: "#1c1b17",
                    background: "transparent",
                  }}
                />
              </div>
              <button className="btn" onClick={goQuote} style={{ padding: "14px 24px", whiteSpace: "nowrap" }}>
                Get My Quote
              </button>
            </div>
            <p style={{ color: "#1f3d2b", opacity: 0.6, fontSize: "12.5px", marginTop: "12px" }}>
              No fixed-date booking &mdash; tell us a day &amp; time window that works, and Luis confirms around your schedule.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
