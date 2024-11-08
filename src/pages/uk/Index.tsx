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

const UkrainianIndex = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationData(),
      generateWebsiteData(),
      generateProductData(11),
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/uk/#webpage",
        "url": "https://www.iptvservice.site/uk",
        "name": "Купити IPTV Підписку | Найкращий IPTV Сервіс 2025",
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
        "description": "Купіть IPTV підписку з понад 18000 HD та 4K каналами. Найкращий IPTV сервіс в Україні з миттєвою активацією. Преміум IPTV сервіс з цілодобовою підтримкою.",
        "inLanguage": "uk"
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title="Купити IPTV Підписку | Найкращий IPTV Сервіс 2025"
        description="Купіть IPTV підписку з понад 18000 HD та 4K каналами. Найкращий IPTV сервіс в Україні з миттєвою активацією."
        structuredData={structuredData}
      />
      <SEO
        title="Купити IPTV Підписку | Найкращий IPTV Сервіс 2025"
        description="Купіть IPTV підписку з понад 18000 HD та 4K каналами. Найкращий IPTV сервіс в Україні з миттєвою активацією."
        keywords="IPTV підписка, IPTV сервіс, найкращий IPTV, IPTV Україна, HD канали, 4K IPTV"
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

export default UkrainianIndex;