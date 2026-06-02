import Reveal from "@/components/Reveal";

const steps = [
  {
    num: "01",
    title: "Tell us about your property",
    desc: "Send us your address and what you&apos;re after — a weekly mow, a full cleanup, a new patio. Takes two minutes, and there&apos;s zero obligation.",
    dark: false,
  },
  {
    num: "02",
    title: "We come out &amp; quote it right",
    desc: "We look at the actual property — not a guess over the phone — so the price is honest and there are no surprises later. You pick the day and time window; we work around your schedule.",
    dark: false,
  },
  {
    num: "03",
    title: "We show up and get it done",
    desc: "On time, every time. We do the careful work, clean up after ourselves, and leave your property looking like the best one on the street. Then we keep it that way.",
    dark: true,
  },
];

export default function HowItWorks() {
  return (
    <section style={{ background: "#f7f4ec" }} className="pad">
      <div className="wrap center">
        <p className="kicker">How it works</p>
        <h2 className="h2">Getting started is the easy part.</h2>
        <p className="lead">No pushy sales call, no waiting around all day. Three simple steps and your yard is on the schedule.</p>

        <div
          className="how-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", marginTop: "48px", textAlign: "left" }}
        >
          {steps.map((s) => (
            <Reveal key={s.num}>
              <div
                style={{
                  background: s.dark ? "#1f3d2b" : "#e7e1d3",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  color: s.dark ? "#f7f4ec" : "inherit",
                  height: "100%",
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: "46px", fontWeight: 700, color: "#c9a24b", lineHeight: 1 }}>
                  {s.num}
                </div>
                <h3
                  style={{ fontSize: "21px", color: s.dark ? "#f7f4ec" : "#1f3d2b", marginTop: "14px" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ fontSize: "15px", color: s.dark ? "rgba(247,244,236,0.82)" : "rgba(28,27,23,0.74)", marginTop: "10px" }}
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <a href="#quote" className="btn" style={{ marginTop: "40px" }}>Start with a free quote &rarr;</a>
      </div>
    </section>
  );
}
