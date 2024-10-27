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
  return (
    <>
      <Helmet>
        <title>Premium IPTV Service | Best IPTV Subscription USA 2024</title>
        <meta name="description" content="Get premium IPTV subscription with 18,000+ live channels, HD/4K quality VOD & sports. Enjoy 99.9% uptime, instant activation & 24/7 support. Try risk-free with money-back guarantee!" />
        <meta name="keywords" content="premium IPTV service, IPTV subscription USA, best IPTV provider, HD IPTV channels, 4K IPTV streaming, buy IPTV subscription, IPTV service provider" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium IPTV Service | #1 Streaming Experience 2024" />
        <meta property="og:description" content="Access 18,000+ live channels, VOD & sports in HD/4K quality. Get instant activation, 24/7 support & money-back guarantee. Start streaming today!" />
        <meta property="og:url" content="https://iptvservice.site/" />
        <meta property="og:site_name" content="Premium IPTV Service" />
        <meta property="og:image" content="https://iptvservice.site/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium IPTV Service | Best Streaming Experience 2024" />
        <meta name="twitter:description" content="18,000+ channels, HD/4K quality, instant activation & 24/7 support. Try risk-free today!" />
        <meta name="twitter:image" content="https://iptvservice.site/og-image.jpg" />
        <link rel="canonical" href="https://iptvservice.site/" />
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