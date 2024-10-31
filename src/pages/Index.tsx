import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { generateOrganizationData, generateWebsiteData, generateProductData } from "@/utils/structuredData";

const Index = () => {
  const structuredData = {
    "@graph": [
      generateOrganizationData(),
      generateWebsiteData(),
      generateProductData(11),
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/#webpage",
        "url": "https://www.iptvservice.site",
        "name": "Premium IPTV Service | 18,000+ Channels in HD & 4K Quality",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "about": { "@id": "https://www.iptvservice.site/#organization" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ideogram.ai/assets/progressive-image/balanced/response/T-JUnqqgRsmp3yYR7L_s0g"
        },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString()
      }
    ]
  };

  return (
    <>
      <SEO
        title="Premium IPTV Service | 18,000+ Channels in HD & 4K Quality"
        description="Buy Premium IPTV subscription with 18,000+ HD & 4K channels. Best IPTV service in USA with instant activation and 24/7 support."
        keywords="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV channels, HD IPTV, 4K IPTV"
        structuredData={structuredData}
        type="website"
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