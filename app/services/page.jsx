import Link from "next/link";
import BreadcrumbSchema from "@/components/Breadcrumb";

export const metadata = {
  title: "Lawn Care & Landscaping Services in Metro West",
  description:
    "Lawn maintenance, spring and fall cleanups, mulching, aeration, fencing, and light masonry for homes across Framingham, Natick, and Metro West MA.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Lawn Care & Landscaping Services in Metro West",
    description:
      "Lawn maintenance, spring and fall cleanups, mulching, aeration, fencing, and light masonry for homes across Framingham, Natick, and Metro West MA.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "L&J Landscaping crew at work" }],
  },
};

const services = [
  { title: "Lawn Maintenance", desc: "Weekly or biweekly mowing, clean lines, crisp edging, fertilization five times a year, and weed control. The same schedule, the same crew, every visit.", tag: "Recurring · weekly / biweekly" },
  { title: "Spring Cleanup", desc: "Clear the winter debris, cut back tired growth, re-edge beds, lay fresh mulch. One thorough visit and the whole property looks alive again.", tag: "Seasonal" },
  { title: "Fall Cleanup", desc: "Full leaf removal, final cuts, deep bed and border cleanup. Close the season right so the lawn bounces back lush in spring.", tag: "Seasonal" },
  { title: "Light Masonry & Patios", desc: "Hand-built walkways, steps, and patios — careful stonework, no heavy machinery. Built to last and finished to look like it belongs." },
  { title: "Fencing", desc: "Clean, sturdy fence installation that defines your space. Straight lines, solid posts, a finish that holds up to New England seasons." },
  { title: "Irrigation", desc: "Smart watering systems installed through our trusted irrigation partner — your lawn gets exactly what it needs, nothing wasted." },
  { title: "Tree Work & Pruning", desc: "Pruning, shaping, and selective tree care. We cut with a plan, not just a saw — keeping your property healthy, safe, and in proportion." },
  { title: "Mulching & Edging", desc: "Fresh mulch and crisp, hand-cut edges — the small details that separate a maintained yard from a truly finished one." },
  { title: "Aeration", desc: "Core aeration to relieve compacted soil and let water, air, and nutrients reach the roots. One of the best investments for a healthy lawn.", tag: "Ideal: early September" },
];

export default function ServicesPage() {
  return (
    <main className="pad">
      <BreadcrumbSchema page="Services" path="/services" />
      <div className="wrap center">
        <p className="kicker">What we do</p>
        <h1 className="h2">Our Services</h1>
        <p className="lead" style={{ marginBottom: "56px" }}>
          From a tidy weekly mow to a full seasonal cleanup, we keep it simple: core services done all season, plus the special projects when you want more.
        </p>

        <h2 className="sr-only">Our Landscaping Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", textAlign: "left" }}>
          {services.map((s) => (
            <div key={s.title} style={{ padding: "32px", background: "#f7f4ec", borderRadius: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1f3d2b", marginBottom: "12px" }}>{s.title}</h3>
              <p style={{ fontSize: "15px", color: "rgba(28,27,23,0.7)", lineHeight: 1.65 }}>{s.desc}</p>
              {s.tag && <span style={{ display: "block", marginTop: "12px", fontSize: "12px", color: "#5a7d52", fontWeight: 600 }}>{s.tag}</span>}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "64px" }}>
          <Link href="/#quote" className="btn">Request a Quote &rarr;</Link>
        </div>
      </div>
    </main>
  );
}
