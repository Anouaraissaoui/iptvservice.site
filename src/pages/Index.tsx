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

const Index = () => {
  const currentYear = new Date().getFullYear();
  
  // Load and parse JSON schema files
  const productSchema = require('/public/schemas/product.json');
  const websiteSchema = require('/public/schemas/website.json');
  const organizationSchema = require('/public/schemas/organization.json');
  const breadcrumbsSchema = require('/public/schemas/breadcrumbs.json');
  const faqSchema = require('/public/schemas/faq.json');
  const localBusinessSchema = require('/public/schemas/local-business.json');

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      productSchema,
      websiteSchema,
      organizationSchema,
      breadcrumbsSchema,
      faqSchema,
      localBusinessSchema,
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/#webpage",
        "url": "https://www.iptvservice.site",
        "name": `Buy IPTV Subscription | Best IPTV Service Provider ${currentYear + 1}`,
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
        "description": "Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support.",
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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <ServerSEO 
        title={`Buy IPTV Subscription | Best IPTV Service Provider ${currentYear + 1}`}
        description="Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."
        structuredData={structuredData}
      />
      <SEO
        title={`Buy IPTV Subscription | Best IPTV Service Provider ${currentYear + 1}`}
        description="Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."
        keywords="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA"
        structuredData={structuredData}
        type="website"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
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