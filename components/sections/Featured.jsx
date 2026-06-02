import Reveal from "@/components/Reveal";

function ProjectSlot({ label, large = false, index }) {
  return (
    <Reveal>
      <div
        style={{
          position: "relative",
          aspectRatio: large ? "16/7" : "4/3",
          background: "#e7e1d3",
          borderRadius: "16px",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        {/* Crosshatch pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, rgba(31,61,43,0.03) 0 14px, transparent 14px 28px)",
        }} />
        {/* Placeholder label */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "rgba(31,61,43,0.38)", textAlign: "center", padding: "0 16px",
        }}>
          {label}
        </div>
        {/* Project number tag */}
        <div style={{
          position: "relative", zIndex: 2, margin: "16px",
          background: "rgba(31,61,43,0.7)", color: "#f7f4ec",
          backdropFilter: "blur(6px)",
          fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", padding: "6px 12px", borderRadius: "6px",
        }}>
          {large ? "Latest Project" : `Project 0${index}`}
        </div>
      </div>
    </Reveal>
  );
}

export default function Featured() {
  return (
    <section id="featured" style={{ background: "#f7f4ec" }} className="pad">
      <div className="wrap">
        <div className="center" style={{ marginBottom: "40px" }}>
          <p className="kicker">Featured work</p>
          <h2 className="h2">Projects that speak for themselves.</h2>
          <p className="lead">
            Real properties, real results. We add new projects as they&apos;re completed &mdash; check back to see the
            latest transformations across Metro West.
          </p>
        </div>

        {/* Large hero project */}
        <ProjectSlot label="Photo or video — latest project" large index={1} />

        {/* 3-up project grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px", marginTop: "18px" }}
          className="proj-grid"
        >
          <ProjectSlot label="Project photo / before-after" index={1} />
          <ProjectSlot label="Project photo / before-after" index={2} />
          <ProjectSlot label="Project photo / before-after" index={3} />
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "14px", color: "rgba(28,27,23,0.5)", marginBottom: "18px" }}>
            Photo &amp; video slots &mdash; swap any placeholder with a real image or embed as projects are completed.
          </p>
          <a href="#quote" className="btn">Work with us on your project &rarr;</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
