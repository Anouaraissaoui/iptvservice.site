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

const Index = () => {
  const currentDate = new Date().getFullYear();
  const baseUrl = "https://www.iptvservice.site";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        "url": baseUrl,
        "name": `Buy IPTV Subscription | Best IPTV Service Provider ${currentDate}`,
        "description": "Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support.",
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "about": {
          "@type": "Product",
          "name": "IPTV Subscription Service",
          "description": "Premium IPTV streaming service with 18,000+ channels",
          "category": "Streaming Services",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "11",
            "highPrice": "90",
            "offerCount": "4"
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/IPTV-Service.webp`,
          "width": "1200",
          "height": "630"
        },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "breadcrumb": { "@id": `${baseUrl}/#breadcrumb` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": baseUrl,
              "name": "Home"
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title={`Buy IPTV Subscription | Best IPTV Service Provider ${currentDate}`}
        description="Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."
        structuredData={structuredData}
        keywords="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA"
        type="website"
        ogImage={`${baseUrl}/images/IPTV-Service.webp`}
        canonical={baseUrl}
        alternates={{
          "en": "/",
          "es": "/es",
          "fr": "/fr"
        }}
      />
      <SEO
        title={`Buy IPTV Subscription | Best IPTV Service Provider ${currentDate}`}
        description="Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."
        structuredData={structuredData}
        type="website"
        ogImage={`${baseUrl}/images/IPTV-Service.webp`}
        canonical={baseUrl}
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
            item: baseUrl
          }
        ]}
      />
      <main 
        className="min-h-screen bg-navy" 
        itemScope 
        itemType="https://schema.org/WebPage"
        role="main"
      >
        <header role="banner">
          <Navbar />
        </header>
        <Hero />
        <article 
          itemScope 
          itemType="https://schema.org/Article"
          role="article"
        >
          <section aria-label="Statistics" role="region">
            <Stats />
          </section>
          <section aria-label="Pricing Plans" role="region">
            <PricingCards />
          </section>
          <section aria-label="Service Benefits" role="region">
            <Benefits />
          </section>
          <section aria-label="Frequently Asked Questions" role="region">
            <FaqSection />
          </section>
        </article>
        <Footer />
      </main>
    </>
  );
};

export default Index;