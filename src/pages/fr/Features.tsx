import { Helmet } from "react-helmet-async";
import Navbar from "@/components/fr/Navbar";
import Benefits from "@/components/fr/Benefits";
import Footer from "@/components/fr/Footer";

const Features = () => {
  return (
    <>
      <Helmet>
        <title>Fonctionnalités Service IPTV | Service de Streaming Premium</title>
        <meta name="description" content="Découvrez nos fonctionnalités IPTV premium : plus de 18 000 chaînes, streaming HD/4K, TV de rattrapage, support multi-appareils, guide EPG et bibliothèque VOD complète." />
        <meta name="keywords" content="fonctionnalités Service IPTV, avantages Service IPTV, qualité streaming, contenu VOD, chaînes TV en direct, Service IPTV HD, streaming 4K, guide EPG" />
        <link rel="canonical" href="https://www.iptvservice.site/fr/features" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr/features" />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/features" />
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="pt-20">
          <Benefits />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Features;