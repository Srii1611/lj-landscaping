import Reveal from "@/components/Reveal";

const stats = [
  { num: "27", label: "Years in business", sub: "Built by hand, season after season" },
  { num: "2", label: "Generations", sub: "Father built it, son runs it now" },
  { num: "100s", label: "Properties cared for", sub: "Homes & businesses across Metro West" },
  { num: "100%", label: "Local & family-owned", sub: "Based right here in Framingham" },
];

export default function Stats() {
  return (
    <section style={{ background: "#2c5440", color: "#f7f4ec" }} className="pad-sm">
      <div className="wrap">
        <div
          className="stats-row"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", textAlign: "center" }}
        >
          {stats.map((s, i) => (
            <Reveal key={s.label}>
              {i > 0 && (
                <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: "1px", height: "60px", background: "rgba(247,244,236,0.15)" }} />
              )}
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 5vw, 64px)", color: "#c9a24b", fontWeight: 600, lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ marginTop: "12px", fontSize: "14px", color: "#f7f4ec", fontWeight: 600, letterSpacing: "0.04em" }}>
                  {s.label}
                </div>
                <div style={{ fontSize: "12.5px", color: "rgba(247,244,236,0.55)", marginTop: "5px" }}>
                  {s.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
