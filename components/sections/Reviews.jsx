import Reveal from "@/components/Reveal";

const reviews = [
  {
    quote: "They actually showed up when they said they would, every week. After dealing with crews that ghost you, that alone was worth it — and the lawn's never looked better.",
    name: "Customer Name",
    location: "Framingham, MA · placeholder",
  },
  {
    quote: "Did our spring cleanup and now handles the mowing. Fair price, careful work, and they treat the yard like it's their own. Highly recommend L&J.",
    name: "Customer Name",
    location: "Natick, MA · placeholder",
  },
  {
    quote: "Luis walked the property, listened to what we wanted, and the patio came out beautiful. You can tell this is a family business that cares.",
    name: "Customer Name",
    location: "Wayland, MA · placeholder",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: "#e7e1d3" }} className="pad">
      <div className="wrap center">
        <p className="kicker">What neighbors say</p>
        <h2 className="h2">Reliability you can hear about.</h2>
        <p className="lead">
          Nearly three decades of work means a lot of happy neighbors. Real Google reviews will live here once the
          Business Profile is live &mdash; these show the layout.
        </p>

        <div className="rev-grid">
          {reviews.map((r, i) => (
            <Reveal key={i}>
              <div
                style={{
                  background: "#f7f4ec", borderRadius: "20px", padding: "32px 28px",
                  border: "1px solid rgba(31,61,43,0.07)",
                  borderTop: "3px solid #c9a24b",
                  display: "flex", flexDirection: "column", gap: "16px",
                  height: "100%", position: "relative", textAlign: "left",
                }}
              >
                {/* Decorative quote mark */}
                <div style={{
                  position: "absolute", top: "18px", right: "22px",
                  fontFamily: "var(--font-display)", fontSize: "80px",
                  color: "rgba(201,162,75,0.13)", lineHeight: 1, userSelect: "none",
                }}>
                  &ldquo;
                </div>

                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", color: "#c9a24b", fontSize: "18px" }}>
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>

                <p style={{ fontSize: "15.5px", color: "rgba(28,27,23,0.82)", fontStyle: "italic", lineHeight: 1.7, position: "relative", zIndex: 1 }}>
                  &ldquo;{r.quote}&rdquo;
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto", paddingTop: "4px" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #2c5440 0%, #1f3d2b 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: "9px", letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "rgba(247,244,236,0.6)",
                  }}>
                    Photo
                  </div>
                  <div>
                    <b style={{ color: "#1f3d2b", fontSize: "15px", display: "block" }}>{r.name}</b>
                    <span style={{ fontSize: "12.5px", color: "rgba(28,27,23,0.5)" }}>{r.location}</span>
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
