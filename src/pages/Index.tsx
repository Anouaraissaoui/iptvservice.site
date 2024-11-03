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
        "url": "https://www.iptvservice.site",
        "name": `Premium IPTV Service ${currentDate} | 18,000+ HD Channels`,
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "about": { "@id": "https://www.iptvservice.site/#organization" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ideogram.ai/assets/progressive-image/balanced/response/T-JUnqqgRsmp3yYR7L_s0g",
          "width": "1200",
          "height": "630"
        },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Experience premium IPTV streaming with 18,000+ HD & 4K channels. Instant activation, 24/7 support, and VOD content. Try risk-free with money-back guarantee!",
        "inLanguage": "en-US",
        "potentialAction": [{
          "@type": "ReadAction",
          "target": ["https://www.iptvservice.site/pricing"]
        }]
      }
    ]
  };

  return (
    <>
      <SEO
        title={`Premium IPTV Service ${currentDate} | 18,000+ HD Channels`}
        description="Experience premium IPTV streaming with 18,000+ HD & 4K channels. Instant activation, 24/7 support, and VOD content. Try risk-free with money-back guarantee!"
        keywords="IPTV service, HD channels, 4K streaming, premium IPTV, buy IPTV subscription, best IPTV service, IPTV provider USA, live TV streaming"
        structuredData={structuredData}
        type="website"
        ogImage="https://ideogram.ai/assets/progressive-image/balanced/response/T-JUnqqgRsmp3yYR7L_s0g"
        alternates={{
          "en": "/",
          "es": "/es",
          "fr": "/fr"
        }}
        breadcrumbs={[
          {
            name: "Home",
            path: "/",
            position: 1,
            item: "https://www.iptvservice.site"
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