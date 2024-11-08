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

const SpanishIndex = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationData(),
      generateWebsiteData(),
      generateProductData(11),
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/es/#webpage",
        "url": "https://www.iptvservice.site/es",
        "name": "Comprar Suscripción IPTV | Mejor Servicio IPTV 2025",
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
        "description": "Compre una suscripción IPTV con más de 18000 canales HD y 4K. El mejor servicio IPTV en España con activación instantánea. Servicio IPTV premium con soporte 24/7.",
        "inLanguage": "es"
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title="Comprar Suscripción IPTV | Mejor Servicio IPTV 2025"
        description="Compre una suscripción IPTV con más de 18000 canales HD y 4K. El mejor servicio IPTV en España con activación instantánea."
        structuredData={structuredData}
      />
      <SEO
        title="Comprar Suscripción IPTV | Mejor Servicio IPTV 2025"
        description="Compre una suscripción IPTV con más de 18000 canales HD y 4K. El mejor servicio IPTV en España con activación instantánea."
        keywords="suscripción IPTV, servicio IPTV, mejor IPTV, IPTV España, canales HD, 4K IPTV"
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

export default SpanishIndex;