import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Skeleton } from "@/components/ui/skeleton";

const Stats = lazy(() => import("@/components/Stats"));
const PricingCards = lazy(() => import("@/components/PricingCards"));
const Benefits = lazy(() => import("@/components/Benefits"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="w-full space-y-4 p-8">
    <Skeleton className="h-8 w-3/4 mx-auto" />
    <Skeleton className="h-4 w-1/2 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  </div>
);

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/#webpage",
        "url": "https://www.iptvservice.site",
        "name": "Buy IPTV Subscription | Best IPTV Service USA 2025",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ideogram.ai/assets/progressive-image/balanced/response/C55t2k-_Qr-ZTxrcVHRZDA"
        },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Buy IPTV subscription with 18,000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support.",
        "breadcrumb": { "@id": "https://www.iptvservice.site/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.iptvservice.site/#breadcrumb",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "WebPage",
            "@id": "https://www.iptvservice.site",
            "url": "https://www.iptvservice.site",
            "name": "Home"
          }
        }]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Buy IPTV Subscription | Best IPTV Service USA 2025</title>
        <meta name="description" content="Buy IPTV subscription with 18,000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support." />
        <meta name="keywords" content="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA" />
        <meta name="author" content="IPTV Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        <link rel="cite" href="https://en.wikipedia.org/wiki/Internet_Protocol_television" />
        <link rel="canonical" href="https://www.iptvservice.site" />
      </Helmet>
      <div className="min-h-screen bg-navy">
        <Navbar />
        <Hero />
        <div className="container mx-auto px-4 py-8 text-sm text-gray-400">
          <p className="max-w-3xl mx-auto text-center">
            Learn more about{" "}
            <a 
              href="https://en.wikipedia.org/wiki/Internet_Protocol_television" 
              target="_blank" 
              rel="noopener noreferrer nofollow" 
              className="text-primary hover:text-primary/80 underline"
              aria-label="Learn more about IPTV on Wikipedia"
            >
              IPTV technology on Wikipedia
            </a>
            {" "}to understand how our service delivers high-quality streaming content over IP networks.
          </p>
        </div>
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PricingCards />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
