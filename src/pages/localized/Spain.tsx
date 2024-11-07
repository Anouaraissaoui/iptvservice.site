import { LocalizedPage } from "@/components/LocalizedPage";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Spain = () => {
  const translations = {
    hero: {
      title: "Descubre el Mejor Servicio IPTV",
      subtitle: "Disfruta de una experiencia de streaming incomparable con más de 18.000 canales en vivo",
      cta: "Ver Planes",
      contactUs: "Contáctanos",
      newFeature: "Nuevo",
      experienceText: "Experimenta el futuro de la televisión →"
    },
    benefits: {
      title: "Ventajas del IPTV",
      items: [
        {
          title: "Económico",
          description: "Más asequible que los paquetes tradicionales de TV por cable o satélite."
        },
        {
          title: "Streaming de Alta Calidad",
          description: "Disfruta de una calidad de video y audio nítida en alta definición."
        },
        {
          title: "Visualización Flexible",
          description: "Ve tu contenido favorito en cualquier momento y lugar con conexión a Internet."
        },
        {
          title: "Alcance Global",
          description: "Accede a una amplia gama de canales y contenido internacional."
        }
      ]
    }
  };

  return (
    <LocalizedPage
      country="Spain"
      languageCode="es"
      title="Servicio IPTV Premium | Canales de TV Españoles en Directo"
      description="Accede a más de 18.000 canales de TV españoles en directo. Servicio IPTV premium con calidad HD/4K, activación instantánea y soporte 24/7."
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

export default Spain;