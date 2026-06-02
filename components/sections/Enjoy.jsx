import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

const promises = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="23" height="23"><path d="M20 6L9 17l-5-5" /></svg>,
    title: "We show up",
    desc: "Reliable, on-schedule visits — the thing most crews get wrong.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="23" height="23"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
    title: "Real, hands-on work",
    desc: "No staged photos — just the actual before & after on your property.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="23" height="23"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
    title: "Fair pricing",
    desc: "Premium service, priced in the middle — not a race-to-the-bottom $40 cut.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="23" height="23"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg>,
    title: "Family-run",
    desc: "Two generations, one standard. The owner&apos;s on the job, not just the invoice.",
  },
];

export default function Enjoy() {
  return (
    <section style={{ background: "#1f3d2b", color: "#f7f4ec", overflow: "hidden" }} className="pad">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.9fr", gap: "56px", alignItems: "center" }} className="enjoy-grid">
          <Reveal>
            <p className="kicker" style={{ color: "#c9a24b" }}>Less hassle, better yard</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
              Stop worrying about your yard.<br />
              <em style={{ fontStyle: "italic", color: "#c9a24b" }}>Start enjoying it.</em>
            </h2>
            <p style={{ marginTop: "20px", fontSize: "17px", opacity: 0.9, maxWidth: "520px" }}>
              Weekends are short. Spend them on the lawn you have, not the work it takes to keep it. We handle the
              mowing, the cleanups, the timing &mdash; and you just come home to a property that looks cared for.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px", marginTop: "36px" }}>
              {promises.map((p) => (
                <div key={p.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "11px", background: "#c9a24b", color: "#1f3d2b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "18px", color: "#f7f4ec" }}>{p.title}</h4>
                    <p style={{ fontSize: "14px", marginTop: "4px", opacity: 0.8 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="ph-wrap">
            <Placeholder
              label="Photo — crew at work / Luis &amp; Jose"
              ratio="ratio-43"
              className="enjoy-ph"
            />
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .enjoy-grid { grid-template-columns: 1fr !important; gap: 36px; } .ph-wrap { order: -1; } }
        .enjoy-ph { background: rgba(247,244,236,0.06); border-color: rgba(247,244,236,0.12); color: rgba(247,244,236,0.4); border-radius: 22px; }
      `}</style>
    </section>
  );
}
