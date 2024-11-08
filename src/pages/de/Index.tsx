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

const GermanIndex = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationData(),
      generateWebsiteData(),
      generateProductData(11),
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/de/#webpage",
        "url": "https://www.iptvservice.site/de",
        "name": "IPTV-Abonnement kaufen | Bester IPTV-Service 2025",
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
        "description": "Kaufen Sie ein IPTV-Abonnement mit über 18000 HD- und 4K-Kanälen. Bester IPTV-Service in Deutschland mit sofortiger Aktivierung. Premium IPTV-Service mit 24/7 Support.",
        "inLanguage": "de"
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title="IPTV-Abonnement kaufen | Bester IPTV-Service 2025"
        description="Kaufen Sie ein IPTV-Abonnement mit über 18000 HD- und 4K-Kanälen. Bester IPTV-Service in Deutschland mit sofortiger Aktivierung."
        structuredData={structuredData}
      />
      <SEO
        title="IPTV-Abonnement kaufen | Bester IPTV-Service 2025"
        description="Kaufen Sie ein IPTV-Abonnement mit über 18000 HD- und 4K-Kanälen. Bester IPTV-Service in Deutschland mit sofortiger Aktivierung."
        keywords="IPTV-Abonnement, IPTV-Service, bester IPTV, IPTV Deutschland, HD-Kanäle, 4K IPTV"
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

export default GermanIndex;