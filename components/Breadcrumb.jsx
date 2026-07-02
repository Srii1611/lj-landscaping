export default function BreadcrumbSchema({ page, path }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lj-landscaping.vercel.app",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": page,
        "item": `https://lj-landscaping.vercel.app${path}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
