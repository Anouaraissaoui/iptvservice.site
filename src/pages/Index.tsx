import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { SEO } from "@/components/SEO";
import { ServerSEO } from "@/components/ServerSEO";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load non-critical components
const Stats = lazy(() => import("@/components/Stats"));
const PricingCards = lazy(() => import("@/components/PricingCards"));
const Benefits = lazy(() => import("@/components/Benefits"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => (
  <div className="w-full space-y-4 p-8">
    <Skeleton className="h-64 w-full" />
  </div>
);

const Index = () => {
  const baseUrl = "https://www.iptvservice.site";
  const currentYear = new Date().getFullYear();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        "url": baseUrl,
        "name": `Premium IPTV Service ${currentYear} | Best Streaming Experience`,
        "description": "Access 18,000+ live channels, VOD & sports. Premium IPTV with HD/4K quality, instant activation & 24/7 support. Risk-free trial with money-back guarantee!",
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
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1250"
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
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title={`Premium IPTV Service ${currentYear} | Best Streaming Experience`}
        description="Access 18,000+ live channels, VOD & sports. Premium IPTV with HD/4K quality, instant activation & 24/7 support. Risk-free trial with money-back guarantee!"
        structuredData={structuredData}
        keywords="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA"
        type="website"
        ogImage={`${baseUrl}/images/IPTV-Service.webp`}
        canonical={baseUrl}
        alternates={{
          "en": "/",
          "es": "/es",
          "fr": "/fr"
        }}
        lastModified={new Date().toISOString()}
      />
      
      <Helmet>
        <link 
          rel="preload" 
          href="/fonts/inter-var.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="/images/IPTV-Service.webp" 
          as="image" 
          type="image/webp"
        />
      </Helmet>

      <main 
        className="min-h-screen bg-navy" 
        itemScope 
        itemType="https://schema.org/WebPage"
        role="main"
      >
        <Navbar />
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>
      </main>
    </>
  );
};

export default Index;