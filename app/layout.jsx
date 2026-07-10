import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE_TEL,
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SERVICE_AREA_TOWNS,
} from "@/lib/site";

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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "L&J Landscaping | Reliable Lawn Care in Framingham, Natick & Metro West",
    template: "%s | L&J Landscaping",
  },
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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "L&J Landscaping crew at work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "L&J Landscaping | Reliable Lawn Care in Framingham & Metro West",
    description:
      "Family-owned landscaping and lawn care serving Framingham, Natick, and Metro West. 27 years in the trade.",
    images: ["/og-image.jpg"],
  },
};

// Address confirmed real (12 Torrey St, Framingham 01702). NOTE: add real opening hours when known.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: BUSINESS_NAME,
  description:
    "Family-owned landscaping and lawn care company serving Framingham, Natick, and Greater Boston's Metro West. Two generations of experience in lawn maintenance, spring and fall cleanups, mulching, and light masonry.",
  image: `${SITE_URL}/logo.png`,
  "@id": `${SITE_URL}/#business`,
  url: SITE_URL,
  telephone: PHONE_TEL,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Torrey St",
    addressLocality: "Framingham",
    addressRegion: "MA",
    postalCode: "01702",
    addressCountry: "US",
  },
  areaServed: SERVICE_AREA_TOWNS.map((name) => ({
    "@type": "City",
    name,
    address: { addressRegion: "MA" },
  })),
  foundingDate: "2022",
  slogan: "Two generations, one standard.",
  priceRange: "$$",
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
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
