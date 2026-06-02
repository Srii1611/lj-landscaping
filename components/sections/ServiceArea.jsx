const towns = [
  { name: "Framingham", primary: true },
  { name: "Natick", primary: true },
  { name: "Wayland", primary: false },
  { name: "Sudbury", primary: false },
  { name: "Ashland", primary: false },
  { name: "Jamaica Plain", primary: false },
  { name: "Roxbury", primary: false },
];

export default function ServiceArea() {
  return (
    <section id="area" style={{ background: "#f7f4ec" }} className="pad-sm">
      <div className="wrap center">
        <p className="kicker">Where we work</p>
        <h2 className="h2">Proudly serving Metro West.</h2>
        <p className="lead">
          Based in Framingham, covering the towns around it across Middlesex County and into Greater Boston.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginTop: "30px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
          {towns.map((t) => (
            <span
              key={t.name}
              style={{
                background: t.primary ? "#1f3d2b" : "#e7e1d3",
                color: t.primary ? "#f7f4ec" : "#1f3d2b",
                padding: "10px 20px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
