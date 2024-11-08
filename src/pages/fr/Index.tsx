import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ServerSEO } from "@/components/ServerSEO";
import { generateOrganizationData, generateWebsiteData, generateProductData } from "@/utils/structuredData";

const FrenchIndex = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationData(),
      generateWebsiteData(),
      generateProductData(11),
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/fr/#webpage",
        "url": "https://www.iptvservice.site/fr",
        "name": "Acheter un Abonnement IPTV | Meilleur Service IPTV 2025",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "about": { "@id": "https://www.iptvservice.site/#organization" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.iptvservice.site/images/IPTV-Service.webp",
          "width": "1200",
          "height": "630"
        },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Achetez un abonnement IPTV avec plus de 18000 chaînes HD et 4K. Meilleur service IPTV en France avec activation instantanée. Service IPTV premium avec support 24/7.",
        "inLanguage": "fr"
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title="Acheter un Abonnement IPTV | Meilleur Service IPTV 2025"
        description="Achetez un abonnement IPTV avec plus de 18000 chaînes HD et 4K. Meilleur service IPTV en France avec activation instantanée."
        structuredData={structuredData}
      />
      <SEO
        title="Acheter un Abonnement IPTV | Meilleur Service IPTV 2025"
        description="Achetez un abonnement IPTV avec plus de 18000 chaînes HD et 4K. Meilleur service IPTV en France avec activation instantanée."
        keywords="abonnement IPTV, service IPTV, meilleur IPTV, IPTV France, chaînes HD, 4K IPTV"
        structuredData={structuredData}
        type="website"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
        alternates={{
          "en": "/",
          "fr": "/fr",
          "es": "/es",
          "de": "/de",
          "uk": "/uk"
        }}
      />
      <div className="min-h-screen bg-navy">
        <Navbar />
        <Hero />
        <Stats />
        <PricingCards />
        <Benefits />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

export default FrenchIndex;