import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Enjoy from "@/components/sections/Enjoy";
import Stats from "@/components/sections/Stats";
import Work from "@/components/sections/Work";
import Featured from "@/components/sections/Featured";
import Story from "@/components/sections/Story";
import Reviews from "@/components/sections/Reviews";
import QuoteForm from "@/components/sections/QuoteForm";
import ServiceArea from "@/components/sections/ServiceArea";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <HowItWorks />
      <Enjoy />
      <Stats />
      <Work />
      <Featured />
      <Story />
      <Reviews />
      <QuoteForm />
      <ServiceArea />
    </main>
  );
}
