import { LocalizedPage } from "@/components/LocalizedPage";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const France = () => {
  const translations = {
    hero: {
      title: "Découvrez le Meilleur Service IPTV",
      subtitle: "Profitez d'une expérience de streaming inégalée avec plus de 18 000 chaînes en direct",
      cta: "Voir les forfaits",
      contactUs: "Nous contacter",
      newFeature: "Nouveau",
      experienceText: "Découvrez l'avenir de la télévision →"
    },
    benefits: {
      title: "Avantages de l'IPTV",
      items: [
        {
          title: "Économique",
          description: "Plus abordable que les forfaits de télévision par câble ou satellite traditionnels."
        },
        {
          title: "Streaming Haute Qualité",
          description: "Profitez d'une qualité vidéo et audio haute définition."
        },
        {
          title: "Visionnage Flexible",
          description: "Regardez vos contenus préférés n'importe quand, n'importe où avec une connexion Internet."
        },
        {
          title: "Portée Mondiale",
          description: "Accédez à une large gamme de chaînes et contenus internationaux."
        }
      ]
    }
  };

  return (
    <LocalizedPage
      country="France"
      languageCode="fr"
      title="Service IPTV Premium | Chaînes TV Françaises en Direct"
      description="Accédez à plus de 18 000 chaînes TV françaises en direct. Service IPTV premium avec qualité HD/4K, activation instantanée et support 24/7."
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

export default France;