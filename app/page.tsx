import Navbar from "@/components/Navbar";
import { HeroSection01 } from "@/components/ui/hero-01";
import Problem from "@/components/Problem";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import EventsJar from "@/components/EventsJar";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Instagram from "@/components/Instagram";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection01 />
        <Problem />
        <Stats />
        <Partners />
        <Ticker text="Next Generation Partying" bg="bg-accent" fg="text-ink" />
        <EventsJar />
        <Services />
        <Ticker text="Echte Momente · Keine Inszenierung" bg="bg-acid" fg="text-ink" speed="slow" />
        <Gallery />
        <Instagram />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
