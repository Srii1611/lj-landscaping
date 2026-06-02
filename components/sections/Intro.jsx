import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

export default function Intro() {
  return (
    <section style={{ background: "#f7f4ec" }} className="pad">
      <div className="wrap">
        <div
          style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "56px", alignItems: "center" }}
          className="intro-grid"
        >
          <Reveal>
            <p className="kicker">Why homeowners call us back</p>
            <h2 className="h2">We treat your property like it&apos;s our own.</h2>
            <p className="lead left">
              There&apos;s no shortage of crews that&apos;ll cut a lawn. What&apos;s rare is one that actually shows up when they
              say they will, does the careful work, and leaves the place better than they found it &mdash; every single
              visit, season after season. That&apos;s the whole point of L&amp;J. We&apos;re not chasing the most jobs;
              we&apos;re keeping the ones we have looking the best on the block. Quality over quantity, an honest price,
              and the same trusted hands behind it for nearly thirty years.
            </p>
            <p className="lead left" style={{ marginTop: "14px" }}>
              When you hire us, you&apos;re not getting a rotating door of strangers. You&apos;re getting a family that&apos;s
              been doing this work for decades and stakes its name on every yard it touches.
            </p>
            <a href="#services" className="btn btn-ghost" style={{ marginTop: "26px", color: "#1f3d2b" }}>
              See what we do &rarr;
            </a>
          </Reveal>

          <Reveal>
            <Placeholder label="Photo — finished lawn / property" ratio="ratio-43" style={{ borderRadius: "22px" }} />
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .intro-grid { grid-template-columns: 1fr !important; gap: 36px; } }
      `}</style>
    </section>
  );
}
