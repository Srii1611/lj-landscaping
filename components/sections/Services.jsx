"use client";
import { useState } from "react";

const coreServices = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M3 18s3-1 9-1 9 1 9 1" /><path d="M3 18v-2c0-2 1-4 4-4M21 18v-2c0-2-1-4-4-4" />
        <path d="M8 12V7M12 12V5M16 12V7" />
      </svg>
    ),
    title: "Lawn Maintenance",
    desc: "Your lawn, handled all season — weekly or biweekly mowing with clean lines, crisp edging, fertilization roughly five times a year, and weed control to keep it thick and green. We learn your property, keep to a schedule you can set your watch by, and make sure it always looks like someone who cares was just there. Because someone was.",
    tag: "Recurring · weekly / biweekly",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M12 22c4-3 7-7 7-12a7 7 0 00-14 0c0 5 3 9 7 12z" /><path d="M12 22V8M9 12l3 2 3-2" />
      </svg>
    ),
    title: "Spring Cleanup",
    desc: "The reset your yard needs after a long winter. We clear out the dead leaves and debris, cut back tired growth, re-edge the beds, lay down fresh mulch, and get your turf and plantings ready to wake up strong. One thorough visit and the whole property looks alive again — the difference is night and day.",
    tag: "Seasonal · one-time",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M12 3c-1 4-4 6-4 10a4 4 0 008 0c0-4-3-6-4-10z" /><path d="M5 20h14" />
      </svg>
    ),
    title: "Fall Cleanup",
    desc: "We close out the season the right way so winter doesn't undo a year of work. Full leaf removal, final cuts, a deep bed and border cleanup, and prepping the lawn so it bounces back lush in spring. Done right in the fall, your yard spends the cold months protected instead of buried.",
    tag: "Seasonal · one-time",
  },
];

const specialServices = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M8 4v6M16 14v6" /></svg>,
    title: "Light Masonry & Patios",
    desc: "Hand-built walkways, steps, and patios — careful, small-scale stonework laid by hand, no heavy machinery tearing up your yard. Built to last and finished to look like it belongs.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><path d="M4 20V8M10 20V8M16 20V8M22 20V8M2 8h22M4 4v4M10 4v4M16 4v4M22 4v4" /></svg>,
    title: "Fencing",
    desc: "Clean, sturdy fence installation that defines your space and adds privacy. Straight lines, solid posts, and a finish that holds up to New England seasons.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><path d="M12 2v6M12 22v-4M4 12H2M22 12h-2M6 6L4 4M18 6l2-2" /><circle cx="12" cy="14" r="4" /></svg>,
    title: "Irrigation",
    desc: "Smart, efficient watering systems installed and serviced through our trusted irrigation partner — so your lawn gets exactly what it needs without wasting a drop.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><path d="M12 22V12M12 12C12 7 8 4 4 4c0 5 4 8 8 8zM12 12c0-4 3-7 7-7 0 4-3 7-7 7z" /></svg>,
    title: "Tree Work & Pruning",
    desc: "Pruning, shaping, and selective tree care to keep your property healthy, safe, and in proportion. We cut with a plan, not just a saw.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><path d="M3 18c4 0 4-3 9-3s5 3 9 3" /><path d="M3 14c4 0 4-3 9-3s5 3 9 3" /><path d="M3 10c4 0 4-3 9-3s5 3 9 3" /></svg>,
    title: "Mulching & Edging",
    desc: "Fresh mulch and crisp, hand-cut edges — the small details that separate a maintained yard from a finished one. It&apos;s what makes the whole property pop.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><path d="M12 2C8 6 8 10 12 12c4-2 4-6 0-10z" /><path d="M5 13c0 5 3 9 7 9s7-4 7-9" /></svg>,
    title: "Fine Gardening",
    desc: "Detailed bed care, seasonal plantings, and container arrangements for the homeowner who wants more than tidy. Thoughtful work that elevates the entire property.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><circle cx="6" cy="8" r="2" /><circle cx="12" cy="8" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="9" cy="16" r="2" /><circle cx="15" cy="16" r="2" /></svg>,
    title: "Aeration",
    desc: "Core aeration to relieve compacted soil and let water, air, and nutrients reach the roots. Timed for early September, it&apos;s one of the best things you can do for a lawn.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><path d="M3 20h18M6 20V8l6-4 6 4v12M10 20v-5h4v5" /></svg>,
    title: "Shrub Pruning",
    desc: "Regular shaping and maintenance that keeps shrubs and hedges clean, structured, and healthy year-round — never overgrown, never neglected.",
  },
];

function SvcCard({ icon, title, desc, tag }) {
  return (
    <div
      className="svc-card"
      style={{
        background: "#f7f4ec",
        borderRadius: "18px",
        padding: "28px 26px",
        border: "1px solid rgba(31,61,43,0.07)",
        transition: "transform .2s ease, box-shadow .2s ease",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(31,61,43,0.10)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
    >
      <div style={{ width: "52px", height: "52px", borderRadius: "13px", background: "#1f3d2b", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a24b", marginBottom: "4px" }}>
        {icon}
      </div>
      <h3 style={{ fontSize: "21px", color: "#1f3d2b" }}>{title}</h3>
      <p style={{ fontSize: "14.5px", color: "rgba(28,27,23,0.72)" }} dangerouslySetInnerHTML={{ __html: desc }} />
      {tag && <span style={{ fontSize: "13px", fontWeight: 700, color: "#5a7d52", letterSpacing: "0.02em", marginTop: "auto", paddingTop: "8px" }}>{tag}</span>}
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState("core");

  return (
    <section id="services" style={{ background: "#e7e1d3" }} className="pad">
      <div className="wrap center">
        <p className="kicker">What we do</p>
        <h2 className="h2">Everything your yard needs &mdash; handled.</h2>
        <p className="lead">
          From a tidy weekly mow to a full seasonal cleanup, we keep it simple: a few core services we do all season,
          plus special projects when you want more.
        </p>

        {/* Tab switcher */}
        <div style={{ display: "inline-flex", background: "#f7f4ec", borderRadius: "999px", padding: "6px", margin: "26px auto 50px", gap: "4px" }}>
          {[["core", "Core Services"], ["special", "Special Services"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              style={{
                border: "none",
                background: active === id ? "#1f3d2b" : "transparent",
                color: active === id ? "#f7f4ec" : "#1f3d2b",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "15px",
                padding: "11px 26px",
                borderRadius: "999px",
                transition: "background .2s ease, color .2s ease",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Core tab */}
        <div className={`tabpanel${active === "core" ? " active" : ""}`}>
          <div className="svc-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {coreServices.map((s) => (
              <SvcCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Special tab */}
        <div className={`tabpanel${active === "special" ? " active" : ""}`}>
          <div className="svc-grid">
            {specialServices.map((s) => (
              <SvcCard key={s.title} {...s} />
            ))}
            {/* CTA card */}
            <div style={{ background: "#1f3d2b", color: "#f7f4ec", borderRadius: "18px", padding: "28px 26px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", justifyContent: "center" }}>
              <h3 style={{ color: "#f7f4ec", fontSize: "21px" }}>Need something else?</h3>
              <p style={{ color: "rgba(247,244,236,0.8)", fontSize: "14.5px" }}>If it makes your property better and it&apos;s in our wheelhouse, just ask.</p>
              <a href="#quote" style={{ fontSize: "13px", fontWeight: 700, color: "#c9a24b", letterSpacing: "0.02em", marginTop: "auto", paddingTop: "8px" }}>Tell us about it &rarr;</a>
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "34px", fontSize: "14px", color: "rgba(28,27,23,0.6)" }}>
          Residential &amp; commercial &middot; honest scope, no overselling.
        </p>
      </div>
    </section>
  );
}
