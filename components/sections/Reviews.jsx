import Reveal from "@/components/Reveal";

const reviews = [
  {
    quote: "They actually showed up when they said they would, every week. After dealing with crews that ghost you, that alone was worth it — and the lawn&apos;s never looked better.",
    name: "Customer Name",
    location: "Framingham, MA · placeholder",
  },
  {
    quote: "Did our spring cleanup and now handles the mowing. Fair price, careful work, and they treat the yard like it&apos;s their own. Highly recommend L&amp;J.",
    name: "Customer Name",
    location: "Natick, MA · placeholder",
  },
  {
    quote: "Luis walked the property, listened to what we wanted, and the patio came out beautiful. You can tell this is a family business that cares.",
    name: "Customer Name",
    location: "Wayland, MA · placeholder",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px", color: "#c9a24b", fontSize: "18px" }}>
      {"★★★★★"}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: "#e7e1d3" }} className="pad">
      <div className="wrap center">
        <p className="kicker">What neighbors say</p>
        <h2 className="h2">Reliability you can hear about.</h2>
        <p className="lead">
          Nearly three decades of work means a lot of happy neighbors. Their reviews will live right here &mdash; these
          are placeholders showing the layout, and we&apos;ll swap in genuine Google reviews the moment the Business
          Profile is live.
        </p>

        <div className="rev-grid">
          {reviews.map((r, i) => (
            <Reveal key={i}>
              <div
                style={{
                  background: "#f7f4ec",
                  borderRadius: "18px",
                  padding: "28px",
                  border: "1px solid rgba(31,61,43,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  height: "100%",
                }}
              >
                <Stars />
                <p style={{ fontSize: "15px", color: "rgba(28,27,23,0.8)", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: `"${r.quote}"` }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#e7e1d3", border: "1px solid rgba(31,61,43,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(31,61,43,0.4)" }}>
                    Photo
                  </div>
                  <div>
                    <b style={{ color: "#1f3d2b", fontSize: "15px", display: "block" }}>{r.name}</b>
                    <span style={{ fontSize: "12.5px", color: "rgba(28,27,23,0.55)" }}>{r.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "28px", fontSize: "13px", color: "rgba(28,27,23,0.5)" }}>
          &#9733; Setting up the Google Business Profile is the single biggest local-visibility lever &mdash; these slots fill with real 5-star reviews from there.
        </p>
      </div>
    </section>
  );
}
