import { Helmet } from "react-helmet-async";
import Navbar from "@/components/fr/Navbar";
import PricingCards from "@/components/fr/PricingCards";
import Footer from "@/components/fr/Footer";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Forfaits IPTV | Abonnements Premium à partir de 11€/mois</title>
        <meta name="description" content="Choisissez parmi nos forfaits IPTV flexibles à partir de 11€/mois. Tous les forfaits incluent plus de 18 000 chaînes, qualité HD/4K, contenu VOD, support multi-appareils et service client 24/7." />
        <meta name="keywords" content="forfaits IPTV, prix IPTV, abonnement IPTV, packages IPTV, service IPTV pas cher, offres IPTV, meilleurs forfaits IPTV" />
        <link rel="canonical" href="https://www.iptvservice.site/fr/pricing" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr/pricing" />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/pricing" />
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="pt-20">
          <PricingCards />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Pricing;