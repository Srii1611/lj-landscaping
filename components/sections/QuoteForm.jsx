"use client";
import { useState, useEffect } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const times = ["Morning (8–12)", "Midday (12–3)", "Afternoon (3–6)"];

export default function QuoteForm() {
  const [fields, setFields] = useState({ name: "", phone: "", email: "", address: "", needs: "", day: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));

  // Pre-fill address when hero sends the quote-prefill event
  useEffect(() => {
    const handler = (e) => setFields((f) => ({ ...f, address: e.detail }));
    window.addEventListener("quote-prefill", handler);
    return () => window.removeEventListener("quote-prefill", handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to a Next.js route handler that emails Luis with a clickable
    // Google Maps link for the submitted address once the company Gmail is set up.
    setSubmitted(true);
    setTimeout(() => document.getElementById("formSuccess")?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  };

  const inputStyle = {
    width: "100%", fontFamily: "var(--font-body)", fontSize: "15px", color: "#1c1b17",
    background: "#fff", border: "1.5px solid #e7e1d3", borderRadius: "11px",
    padding: "12px 14px", outline: "none",
  };
  const labelStyle = { display: "block", fontSize: "13px", fontWeight: 700, color: "#1f3d2b", marginBottom: "7px", letterSpacing: "0.01em" };

  return (
    <section id="quote" style={{ background: "#1f3d2b", color: "#f7f4ec" }} className="pad">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "56px", alignItems: "start" }} className="quote-grid">
          {/* Left side */}
          <div>
            <p className="kicker" style={{ color: "#c9a24b" }}>Get started</p>
            <h2 style={{ fontSize: "clamp(30px,4vw,46px)" }}>
              Get an accurate quote in a{" "}
              <em style={{ fontStyle: "italic", color: "#c9a24b" }}>few quick clicks.</em>
            </h2>
            <p style={{ marginTop: "18px", fontSize: "16px", opacity: 0.88 }}>
              Tell us about your property and what you need. We&apos;ll get back to you fast &mdash; no pressure, no spam.
            </p>
            {[
              "Free, no-obligation estimate",
              "You pick the day & time window",
              "Luis confirms around your schedule",
              "Residential & commercial",
            ].map((pt) => (
              <div key={pt} style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "18px", fontSize: "15px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#c9a24b" strokeWidth="2" width="22" height="22" style={{ flexShrink: 0 }}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* Form card */}
          <div style={{ background: "#f7f4ec", borderRadius: "22px", padding: "32px", color: "#1c1b17" }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div className="fgroup">
                    <label style={labelStyle} htmlFor="fName">Full name</label>
                    <input id="fName" type="text" placeholder="Your full name" value={fields.name} onChange={set("name")} style={inputStyle} />
                  </div>
                  <div className="fgroup">
                    <label style={labelStyle} htmlFor="fPhone">Phone</label>
                    <input id="fPhone" type="tel" placeholder="(555) 555-5555" value={fields.phone} onChange={set("phone")} style={inputStyle} />
                  </div>
                </div>

                <div className="fgroup" style={{ marginTop: "16px" }}>
                  <label style={labelStyle} htmlFor="fEmail">Email</label>
                  <input id="fEmail" type="email" placeholder="you@email.com" value={fields.email} onChange={set("email")} style={inputStyle} />
                </div>

                <div className="fgroup" style={{ marginTop: "16px" }}>
                  <label style={labelStyle} htmlFor="fAddr">Property address</label>
                  <input id="fAddr" type="text" placeholder="Street, town, MA" value={fields.address} onChange={set("address")} style={inputStyle} />
                </div>

                <div className="fgroup" style={{ marginTop: "16px" }}>
                  <label style={labelStyle} htmlFor="fNeeds">What do you need?</label>
                  <textarea
                    id="fNeeds"
                    placeholder="e.g. weekly mowing + a spring cleanup; or a new patio — tell us a bit about the property."
                    value={fields.needs}
                    onChange={set("needs")}
                    style={{ ...inputStyle, minHeight: "92px", resize: "vertical" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }} className="form-row">
                  <div className="fgroup">
                    <label style={labelStyle} htmlFor="fDay">Preferred day</label>
                    <select id="fDay" value={fields.day} onChange={set("day")} style={inputStyle}>
                      <option value="">Any day</option>
                      {days.map((d) => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="fgroup">
                    <label style={labelStyle} htmlFor="fTime">Time window</label>
                    <select id="fTime" value={fields.time} onChange={set("time")} style={inputStyle}>
                      <option value="">Any time</option>
                      {times.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center", marginTop: "22px", padding: "15px", fontSize: "15px" }}>
                  Request My Free Quote
                </button>
                <p style={{ fontSize: "12px", color: "rgba(28,27,23,0.5)", textAlign: "center", marginTop: "14px" }}>
                  We&apos;ll never share your information. Expect a reply within one business day.
                </p>
              </form>
            ) : (
              <div id="formSuccess" style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#5a7d52", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="34" height="34">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "24px", color: "#1f3d2b" }}>Thanks &mdash; we&apos;ve got it!</h3>
                <p style={{ marginTop: "10px", color: "rgba(28,27,23,0.7)", fontSize: "15px" }}>
                  Luis will get your request by email right away and reach out to confirm a day and time that works for you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .quote-grid { grid-template-columns: 1fr !important; gap: 36px; } .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
