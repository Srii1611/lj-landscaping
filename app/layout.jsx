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

export const metadata = {
  title: "L&J Landscaping | Reliable Lawn Care in Framingham, Natick & Metro West",
  description:
    "Family-owned landscaping and lawn care serving Framingham, Natick, and Greater Boston’s Metro West. The most reliable crew you’ve seen — lawn maintenance, spring & fall cleanups, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hankenGrotesk.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
