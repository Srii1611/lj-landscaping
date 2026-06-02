import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

export default function Story() {
  return (
    <section id="story" style={{ background: "#2c5440", color: "#f7f4ec" }} className="pad">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1fr", gap: "54px", alignItems: "center" }} className="story-grid">
          <Reveal className="ph-wrap">
            <Placeholder label="Photo — Luis &amp; Jose / the crew" ratio="ratio-43" className="story-ph" />
          </Reveal>
          <Reveal>
            <p className="kicker" style={{ color: "#c9a24b" }}>Our story</p>
            <h2 style={{ fontSize: "clamp(30px,4vw,46px)" }}>
              27 years of work.<br />
              <em style={{ fontStyle: "italic", color: "#c9a24b" }}>One family name.</em>
            </h2>
            <p style={{ marginTop: "18px", fontSize: "16.5px", opacity: 0.9 }}>
              It began with Jose. After coming to the United States from the Dominican Republic, he spent nearly three
              decades building a landscaping business the hard way &mdash; one lawn at a time, one handshake at a time,
              on nothing but word of mouth and work he could stand behind. No website, no advertising. Just a reputation
              that traveled house to house.
            </p>
            <p style={{ marginTop: "18px", fontSize: "16.5px", opacity: 0.9 }}>
              Today that same business carries on as L&amp;J, with his son Luis stepping in to lead it into its next
              chapter. The name is new and the future is bigger, but nothing about the standard has changed. Jose is
              still on the crew. The same careful hands still do the work. And every property still gets treated like
              the family&apos;s reputation rides on it &mdash; because, after 27 years, it does.
            </p>
            <p style={{ marginTop: "18px", fontSize: "14.5px", opacity: 0.78 }}>
              Same family. Same standards. A fresh name you can finally look up, call, and count on.
            </p>
            <a href="#quote" className="btn" style={{ marginTop: "26px" }}>Work with us &rarr;</a>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .story-grid { grid-template-columns: 1fr !important; gap: 32px; } .story-grid .ph-wrap { order: -1; } }
        .story-ph { background: rgba(247,244,236,0.06); border-color: rgba(247,244,236,0.12); color: rgba(247,244,236,0.4); border-radius: 22px; }
      `}</style>
    </section>
  );
}
