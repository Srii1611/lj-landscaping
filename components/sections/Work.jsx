import BeforeAfter from "./BeforeAfter";

export default function Work() {
  return (
    <section id="work" style={{ background: "#e7e1d3" }} className="pad">
      <div className="wrap center">
        <p className="kicker">Our work</p>
        <h2 className="h2">The difference is in the lawn.</h2>
        <p className="lead">
          Drag the slider to reveal each transformation &mdash; then use the arrows to browse more of our projects.
        </p>
        <BeforeAfter />
      </div>
    </section>
  );
}
