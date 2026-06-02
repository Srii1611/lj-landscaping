import Reveal from "@/components/Reveal";

const stats = [
  { num: "27", label: "Years in business", sub: "Built by hand, season after season" },
  { num: "2", label: "Generations", sub: "Father built it, son runs it now" },
  { num: "100s", label: "Properties cared for", sub: "Homes & businesses across Metro West" },
  { num: "100%", label: "Local & family-owned", sub: "Based right here in Framingham" },
];

export default function Stats() {
  return (
    <section style={{ background: "#f7f4ec" }} className="pad-sm">
      <div className="wrap">
        <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", textAlign: "center" }}>
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div style={{ lineHeight: 1, fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 60px)", color: "#c9a24b", fontWeight: 600 }}>
                {s.num}
              </div>
              <div style={{ marginTop: "12px", fontSize: "14px", color: "#1f3d2b", fontWeight: 600, letterSpacing: "0.02em" }}>
                {s.label}
              </div>
              <div style={{ fontSize: "12.5px", color: "rgba(28,27,23,0.55)", marginTop: "4px" }}>
                {s.sub}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
