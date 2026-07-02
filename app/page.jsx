import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Work from "@/components/sections/Work";
import QuoteForm from "@/components/sections/QuoteForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <HowItWorks />
      <Work />
      <QuoteForm />
    </main>
  );
}
