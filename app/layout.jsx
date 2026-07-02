import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://lj-landscaping.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "L&J Landscaping | Reliable Lawn Care in Framingham, Natick & Metro West",
  description:
    "Family-owned landscaping and lawn care serving Framingham, Natick, and Greater Boston’s Metro West. The most reliable crew you’ve seen — lawn maintenance, spring & fall cleanups, and more.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "L&J Landscaping",
    title:
      "L&J Landscaping | Reliable Lawn Care in Framingham, Natick & Metro West",
    description:
      "Family-owned landscaping and lawn care serving Framingham, Natick, and Greater Boston’s Metro West. 27 years in the trade.",
    images: [{ url: "/hero-poster.jpg", width: 1200, height: 630, alt: "L&J Landscaping crew at work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "L&J Landscaping | Reliable Lawn Care in Framingham & Metro West",
    description:
      "Family-owned landscaping and lawn care serving Framingham, Natick, and Metro West. 27 years in the trade.",
    images: ["/hero-poster.jpg"],
  },
};

// NOTE: verify postalCode (01701/01702) and add real opening hours before launch.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "L&J Landscaping",
  image: `${SITE_URL}/logo.png`,
  "@id": `${SITE_URL}/#business`,
  url: SITE_URL,
  telephone: "+15086650285",
  email: "landjlandscapingma@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Torrey St",
    addressLocality: "Framingham",
    addressRegion: "MA",
    postalCode: "01702",
    addressCountry: "US",
  },
  areaServed: [
    "Framingham", "Natick", "Wayland", "Sudbury", "Ashland", "Wellesley",
    "Newton", "Weston", "Holliston", "Hopkinton", "Sherborn", "Medfield",
    "Dover", "Needham", "Dedham", "Milford", "Northborough", "Westborough",
  ].map((name) => ({ "@type": "City", name })),
  foundingDate: "2022",
  slogan: "Two generations, one standard.",
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hankenGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
