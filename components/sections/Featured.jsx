import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

export default function Featured() {
  return (
    <section id="featured" style={{ background: "#f7f4ec" }} className="pad">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "center" }} className="featured-grid">
          <Reveal>
            <Placeholder label="Featured project — main photo" ratio="ratio-43" style={{ borderRadius: "22px" }} />
          </Reveal>
          <Reveal>
            <span style={{ display: "inline-block", background: "#c9a24b", color: "#1f3d2b", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 12px", borderRadius: "6px", marginBottom: "18px" }}>
              Featured Project
            </span>
            <h2 style={{ fontSize: "clamp(28px,3.4vw,40px)", color: "#1f3d2b" }}>
              The Jamaica Plain model house.
            </h2>
            <p style={{ marginTop: "16px", fontSize: "16px", color: "rgba(28,27,23,0.78)" }}>
              Our flagship transformation &mdash; a full property brought back to life, from tired turf and overgrown beds
              to a clean, finished landscape. It&apos;s the project we point to when someone asks what L&amp;J can really do.
            </p>
            <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.65 }}>
              (Placeholder copy &amp; photos &mdash; final case study details to be added with Luis&apos;s footage and stills.)
            </p>
            <a href="#work" className="btn btn-ghost" style={{ marginTop: "24px", color: "#1f3d2b" }}>
              See more of our work &rarr;
            </a>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .featured-grid { grid-template-columns: 1fr !important; gap: 32px; } }
      `}</style>
    </section>
  );
}
