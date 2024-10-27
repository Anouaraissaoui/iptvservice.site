import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components that are below the fold
const Stats = lazy(() => import("@/components/Stats"));
const PricingCards = lazy(() => import("@/components/PricingCards"));
const Benefits = lazy(() => import("@/components/Benefits"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading fallback component
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
  return (
    <>
      <Helmet>
        <title>Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide</title>
        <meta name="description" content="Get instant access to 18,000+ live TV channels, VOD content & sports. Premium IPTV service with HD/4K quality, instant activation & 24/7 support. Plans from $11/month. Try risk-free today!" />
        <meta name="keywords" content="buy IPTV subscription, best IPTV service 2024, premium IPTV provider, HD streaming service, live TV channels, sports streaming, movies on demand, 4K IPTV, reliable IPTV, cheap IPTV subscription" />
        <link rel="canonical" href="https://iptvservice.site/" />
        
        {/* Social Media Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide" />
        <meta property="og:description" content="Get instant access to 18,000+ live TV channels, VOD content & sports. Premium IPTV service with HD/4K quality, instant activation & 24/7 support." />
        <meta property="og:image" content="https://iptvservice.site/og-image.jpg" />
        <meta property="og:url" content="https://iptvservice.site" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IPTV Service Provider | Premium Streaming Service" />
        <meta name="twitter:description" content="Access 18,000+ channels, VOD & sports. HD/4K quality, instant activation & 24/7 support." />
        <meta name="twitter:image" content="https://iptvservice.site/og-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Best IPTV Service Provider",
            "description": "Premium IPTV streaming service with 18,000+ channels worldwide",
            "publisher": {
              "@type": "Organization",
              "name": "Premium IPTV Service",
              "logo": {
                "@type": "ImageObject",
                "url": "https://iptvservice.site/logo.png"
              }
            },
            "mainEntity": {
              "@type": "Product",
              "name": "IPTV Subscription",
              "description": "Premium IPTV service with 18,000+ channels",
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "11",
                "highPrice": "90",
                "priceCurrency": "USD"
              }
            }
          })}
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