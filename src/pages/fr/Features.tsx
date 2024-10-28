import { Helmet } from "react-helmet-async";
import Navbar from "@/components/fr/Navbar";
import Benefits from "@/components/fr/Benefits";
import Footer from "@/components/fr/Footer";

const Features = () => {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Fonctionnalités IPTV Premium | Service de Streaming HD/4K</title>
        <meta name="description" content="Découvrez nos fonctionnalités IPTV premium : plus de 18 000 chaînes, streaming HD/4K, TV de rattrapage, support multi-appareils, guide EPG et bibliothèque VOD complète. Profitez d'une disponibilité de 99,9%." />
        <meta name="keywords" content="fonctionnalités IPTV, avantages IPTV, qualité streaming, contenu VOD, chaînes TV en direct, IPTV HD, streaming 4K, guide EPG, multi-appareils" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fonctionnalités IPTV Premium | Streaming HD/4K" />
        <meta property="og:description" content="Explorez nos fonctionnalités premium : 18 000+ chaînes, qualité HD/4K, VOD, et plus encore. Découvrez pourquoi nous sommes leaders du streaming IPTV." />
        <meta property="og:url" content="https://www.iptvservice.site/fr/features" />
        <meta property="og:site_name" content="Service IPTV Premium" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://ideogram.ai/assets/progressive-image/balanced/response/C55t2k-_Qr-ZTxrcVHRZDA" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fonctionnalités IPTV Premium" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fonctionnalités IPTV Premium 2024" />
        <meta name="twitter:description" content="Découvrez nos fonctionnalités premium : streaming HD/4K, VOD, et plus!" />
        <meta name="twitter:image" content="https://ideogram.ai/assets/progressive-image/balanced/response/C55t2k-_Qr-ZTxrcVHRZDA" />
        <meta name="twitter:image:alt" content="Fonctionnalités IPTV" />
        <link rel="canonical" href="https://www.iptvservice.site/fr/features" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr/features" />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/features" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iptvservice.site/features" />
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