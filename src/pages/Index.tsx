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
        "name": "Premium IPTV Service | Best Streaming Experience 2024",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.iptvservice.site/og-image.jpg"
        },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Premium IPTV streaming service with 18,000+ channels, VOD content, and live sports in HD/4K quality. 24/7 support and instant activation.",
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
        <title>Buy IPTV Service | Best IPTV Subscription USA, UK & Worldwide 2024</title>
        <meta name="description" content="Premium IPTV subscription with 18,000+ channels, VOD & sports in HD/4K quality. Instant activation, 24/7 support, and 99.9% uptime guaranteed. Try risk-free today!" />
        <meta name="keywords" content="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV channels, HD IPTV, 4K IPTV, streaming service, live TV" />
        <meta name="author" content="Premium IPTV Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        <link rel="canonical" href="https://www.iptvservice.site" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium IPTV Service 2024 | #1 Streaming Experience" />
        <meta property="og:description" content="Access 18,000+ live channels, VOD & sports. Premium IPTV with HD/4K quality, instant activation & 24/7 support. Risk-free trial with money-back guarantee!" />
        <meta property="og:url" content="https://www.iptvservice.site/" />
        <meta property="og:site_name" content="Premium IPTV Service" />
        <meta property="og:image" content="https://www.iptvservice.site/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iptvservice" />
        <meta name="twitter:title" content="Premium IPTV Service 2024 | Best Streaming Experience" />
        <meta name="twitter:description" content="18,000+ channels, HD/4K quality, instant activation & 24/7 support. Try risk-free with our money-back guarantee!" />
        <meta name="twitter:image" content="https://www.iptvservice.site/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-navy">
        <Navbar />
        <Hero />
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