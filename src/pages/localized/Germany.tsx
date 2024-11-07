import { LocalizedPage } from "@/components/LocalizedPage";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Germany = () => {
  const translations = {
    hero: {
      title: "Erleben Sie den Besten IPTV-Service",
      subtitle: "Genießen Sie ein unvergleichliches Streaming-Erlebnis mit über 18.000 Live-Kanälen",
      cta: "Pakete ansehen",
      contactUs: "Kontakt aufnehmen",
      newFeature: "Neu",
      experienceText: "Erleben Sie die Zukunft des Fernsehens →"
    },
    benefits: {
      title: "Vorteile von IPTV",
      items: [
        {
          title: "Kostengünstig",
          description: "Günstiger als herkömmliche Kabel- oder Satelliten-TV-Pakete."
        },
        {
          title: "Hochqualitatives Streaming",
          description: "Genießen Sie gestochen scharfe Video- und Audioqualität in HD."
        },
        {
          title: "Flexibles Ansehen",
          description: "Schauen Sie Ihre Lieblingsinhalte jederzeit und überall mit Internetverbindung."
        },
        {
          title: "Globale Reichweite",
          description: "Zugriff auf eine große Auswahl internationaler Kanäle und Inhalte."
        }
      ]
    }
  };

  return (
    <LocalizedPage
      country="Germany"
      languageCode="de"
      title="Premium IPTV-Service | Deutsche TV-Kanäle Live"
      description="Zugriff auf über 18.000 deutsche TV-Kanäle live. Premium IPTV-Service mit HD/4K-Qualität, sofortiger Aktivierung und 24/7-Support."
    >
      <div className="min-h-screen bg-navy">
        <Navbar />
        <main>
          <Hero translations={translations.hero} />
          <Stats />
          <PricingCards />
          <Benefits translations={translations.benefits} />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default Germany;