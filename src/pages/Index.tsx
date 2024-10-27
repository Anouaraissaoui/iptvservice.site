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
        <title>IPTV Service | Best IPTV Subscription USA, UK & Worldwide</title>
        <meta name="description" content="Buy IPTV subscription with 18,000+ live channels, HD/4K VOD & sports. Premium IPTV service with 99.9% uptime, instant activation & 24/7 support." />
        <meta name="keywords" content="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium IPTV Service | #1 Streaming Experience" />
        <meta property="og:description" content="Access 18,000+ live channels, VOD & sports. Premium IPTV with HD/4K quality, instant activation & 24/7 support. Risk-free trial with money-back guarantee!" />
        <meta property="og:url" content="https://www.iptvservice.site/" />
        <meta property="og:site_name" content="Premium IPTV Service" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium IPTV Service | #1 Streaming Experience" />
        <meta name="twitter:description" content="18,000+ channels, HD/4K quality, instant activation & 24/7 support. Try risk-free with our money-back guarantee!" />
        <link rel="canonical" href="https://www.iptvservice.site/" />
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
