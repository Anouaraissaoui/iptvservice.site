import { Suspense, lazy } from "react";
import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

// Lazy load components for better initial load performance
const Benefits = lazy(() => import("@/components/Benefits"));
const Footer = lazy(() => import("@/components/Footer"));

const Features = () => {
  const baseUrl = "https://www.iptvservice.site";
  const canonicalUrl = `${baseUrl}/features/`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": "Premium IPTV Features & Benefits | HD/4K Streaming Service",
    "description": "Explore our premium IPTV features: 18,000+ HD & 4K channels, VOD library, catch-up TV, EPG guide, and multi-device support. Experience the best streaming quality.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`
    },
    "about": {
      "@type": "Product",
      "name": "IPTV Streaming Service",
      "description": "Premium IPTV service with 18,000+ channels in HD & 4K quality",
      "category": "Streaming Services"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Features",
          "item": canonicalUrl
        }
      ]
    },
    "datePublished": "2024-01-01T08:00:00+00:00",
    "dateModified": new Date().toISOString()
  };

  return (
    <>
      <SEO
        title="Premium IPTV Features & Benefits | HD/4K Streaming Service"
        description="Explore our premium IPTV features: 18,000+ HD & 4K channels, VOD library, catch-up TV, EPG guide, and multi-device support. Experience the best streaming quality."
        canonical={canonicalUrl}
        type="website"
        ogImage={`${baseUrl}/images/IPTV-Service.webp`}
        keywords="IPTV features, HD channels, 4K streaming, VOD library, catch-up TV, EPG guide, multi-device support, premium IPTV service"
        structuredData={structuredData}
        publishedTime="2024-01-01T08:00:00+00:00"
        modifiedTime={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", path: "/", position: 1, item: baseUrl },
          { name: "Features", path: "/features/", position: 2, item: canonicalUrl }
        ]}
      />
      
      <main className="min-h-screen bg-navy overflow-hidden">
        <Navbar />
        
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-28 pb-16 text-center relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Premium IPTV{" "}
                <span className="text-primary relative inline-block">
                  Features & Benefits
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Discover why our IPTV service stands out with premium features and unmatched benefits. 
                Experience entertainment like never before.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <Suspense fallback={
          <div className="container mx-auto px-4 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="p-6 rounded-xl bg-navy-light">
                  <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
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