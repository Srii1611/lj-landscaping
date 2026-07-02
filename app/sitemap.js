export default function sitemap() {
  const base = "https://lj-landscaping.vercel.app";

  const routes = [
    { url: base, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/our-work`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/service-area`, priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
