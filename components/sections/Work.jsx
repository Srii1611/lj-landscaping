import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import BeforeAfter from "./BeforeAfter";

export default function Work() {
  return (
    <section id="work" style={{ background: "#e7e1d3" }} className="pad">
      <div className="wrap center">
        <p className="kicker">Our work</p>
        <h2 className="h2">The difference is in the lawn.</h2>
        <p className="lead">
          Drag the slider to see it. (This is a demo placeholder &mdash; real before/after photos from our projects go right here.)
        </p>

        <BeforeAfter />

        <div className="work-strip">
          <Reveal><Placeholder label="Before / after — bed cleanup" ratio="ratio-43" /></Reveal>
          <Reveal><Placeholder label="Before / after — patio build" ratio="ratio-43" /></Reveal>
          <Reveal><Placeholder label="Before / after — full property" ratio="ratio-43" /></Reveal>
        </div>
      </div>
    </section>
  );
}
