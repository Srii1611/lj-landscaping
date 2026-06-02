import Link from "next/link";

export default function ServicesPage() {
  return (
    <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div>
        <p style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, color: "#5a7d52", marginBottom: "14px" }}>Phase 2</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,4vw,48px)", color: "#1f3d2b" }}>Services page coming soon.</h1>
        <p style={{ fontSize: "18px", color: "rgba(28,27,23,0.7)", marginTop: "16px", maxWidth: "480px" }}>
          Full service detail pages are planned for Phase 2. In the meantime, everything you need is on the homepage.
        </p>
        <Link href="/#services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#c9a24b", color: "#1f3d2b", fontWeight: 700, fontSize: "14px", padding: "12px 22px", borderRadius: "999px", marginTop: "26px" }}>
          See services on homepage &rarr;
        </Link>
      </div>
    </main>
  );
}
