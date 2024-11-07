import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom"; // Add this import
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

const Index = () => {
  const location = useLocation(); // Use useLocation hook
  const isFrench = location.pathname.startsWith("/fr");
  const currentDate = new Date().getFullYear();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationData(),
      generateWebsiteData(),
      generateProductData(11),
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/#webpage",
        "url": `https://www.iptvservice.site${isFrench ? "/fr" : ""}`,
        "name": isFrench 
          ? `Acheter un Abonnement IPTV | Meilleur Service IPTV ${currentDate}`
          : `Buy IPTV Subscription | Best IPTV Service Provider ${currentDate}`,
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
        "description": isFrench
          ? "Achetez un abonnement IPTV avec plus de 18000 chaînes HD & 4K. Meilleur service IPTV en France avec activation instantanée. Service IPTV premium avec support 24/7."
          : "Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support.",
        "inLanguage": isFrench ? "fr-FR" : "en-US",
        "potentialAction": [{
          "@type": "ReadAction",
          "target": [`https://www.iptvservice.site${isFrench ? "/fr" : ""}/pricing`]
        }]
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title={isFrench 
          ? "Acheter un Abonnement IPTV | Meilleur Service IPTV 2024"
          : "Buy IPTV Subscription | Best IPTV Service Provider 2024"}
        description={isFrench
          ? "Achetez un abonnement IPTV avec plus de 18000 chaînes HD & 4K. Meilleur service IPTV en France avec activation instantanée. Service IPTV premium avec support 24/7."
          : "Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."}
        structuredData={structuredData}
      />
      <SEO
        title={isFrench 
          ? "Acheter un Abonnement IPTV | Meilleur Service IPTV 2024"
          : "Buy IPTV Subscription | Best IPTV Service Provider 2024"}
        description={isFrench
          ? "Achetez un abonnement IPTV avec plus de 18000 chaînes HD & 4K. Meilleur service IPTV en France avec activation instantanée. Service IPTV premium avec support 24/7."
          : "Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."}
        keywords={isFrench
          ? "acheter IPTV, service IPTV, meilleur service IPTV, abonnement IPTV, acheter IPTV France, IPTV acheter, meilleur achat IPTV, chaînes IPTV, IPTV HD, IPTV 4K, service IPTV premium, fournisseur IPTV France"
          : "buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA"}
        structuredData={structuredData}
        type="website"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
        alternates={{
          "en": "/",
          "fr": "/fr"
        }}
        breadcrumbs={[
          {
            name: isFrench ? "Accueil" : "Home",
            path: isFrench ? "/fr" : "/",
            position: 1,
            item: `https://www.iptvservice.site${isFrench ? "/fr" : ""}`
          }
        ]}
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

export default Index;