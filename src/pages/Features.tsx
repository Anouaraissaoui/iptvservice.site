import { Suspense, lazy } from "react";
import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components for better initial load performance
const Benefits = lazy(() => import("@/components/Benefits"));
const Footer = lazy(() => import("@/components/Footer"));

const Features = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.iptvservice.site/features/#webpage",
    "url": "https://www.iptvservice.site/features",
    "name": "Premium IPTV Features & Benefits | HD/4K Streaming Service",
    "description": "Explore our premium IPTV features: 18,000+ HD & 4K channels, VOD library, catch-up TV, EPG guide, and multi-device support. Experience the best streaming quality.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.iptvservice.site/#website"
    },
    "about": {
      "@type": "Product",
      "name": "IPTV Streaming Service",
      "description": "Premium IPTV service with 18,000+ channels in HD & 4K quality",
      "category": "Streaming Services"
    },
    "datePublished": "2024-01-01T08:00:00+00:00",
    "dateModified": new Date().toISOString()
  };

  return (
    <>
      <SEO
        title="Premium IPTV Features & Benefits | HD/4K Streaming Service"
        description="Explore our premium IPTV features: 18,000+ HD & 4K channels, VOD library, catch-up TV, EPG guide, and multi-device support. Experience the best streaming quality."
        canonical="/features"
        type="website"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
        keywords="IPTV features, HD channels, 4K streaming, VOD library, catch-up TV, EPG guide, multi-device support, premium IPTV service"
        structuredData={structuredData}
        publishedTime="2024-01-01T08:00:00+00:00"
        modifiedTime={new Date().toISOString()}
      />
      
      <main className="min-h-screen bg-navy">
        <Navbar />
        
        <section className="pt-20 pb-12 text-center relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container mx-auto px-4 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium IPTV{" "}
              <span className="text-primary relative inline-block">
                Features & Benefits
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover why our IPTV service stands out with premium features and unmatched benefits
            </p>
          </div>
        </section>

        <Suspense fallback={
          <div className="space-y-4 p-8">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        }>
          <Benefits />
        </Suspense>

        <Suspense fallback={
          <div className="space-y-4 p-8">
            <Skeleton className="h-48 w-full" />
          </div>
        }>
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Features;