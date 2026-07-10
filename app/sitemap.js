import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const routes = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" },
    { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${SITE_URL}/our-work`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_URL}/service-area`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_URL}/about`, priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
