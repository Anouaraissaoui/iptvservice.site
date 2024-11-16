import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components
const ContactInfo = lazy(() => import("@/components/contact/ContactInfo"));
const ContactForm = lazy(() => import("@/components/contact/ContactForm"));

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.iptvservice.site/contact/#webpage",
        "url": "https://www.iptvservice.site/contact",
        "name": "24/7 IPTV Support & Customer Service | Premium IPTV Help",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Get instant support for your IPTV service. Our 24/7 customer support team provides technical assistance, subscription help, and setup guidance. Fast response guaranteed!",
        "breadcrumb": { "@id": "https://www.iptvservice.site/contact/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.iptvservice.site/contact/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "https://www.iptvservice.site",
              "url": "https://www.iptvservice.site",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebPage",
              "@id": "https://www.iptvservice.site/contact",
              "url": "https://www.iptvservice.site/contact",
              "name": "Contact"
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.iptvservice.site/contact/#organization",
        "name": "Premium IPTV Service",
        "url": "https://www.iptvservice.site",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-234-567-8900",
          "contactType": "customer service",
          "availableLanguage": ["English"],
          "contactOption": "TollFree",
          "areaServed": "Worldwide"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact IPTV Support | 24/7 Premium Customer Service</title>
        <meta name="description" content="Get instant support for your IPTV service. Our 24/7 customer support team provides technical assistance, subscription help, and setup guidance. Fast response guaranteed!" />
        <meta name="keywords" content="IPTV support, IPTV customer service, IPTV help, IPTV technical support, IPTV setup help, contact IPTV service 2024" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="IPTV Service" />
        
        <link rel="canonical" href="https://www.iptvservice.site/contact" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="24/7 IPTV Customer Support & Technical Help 2025" />
        <meta property="og:description" content="Need help? Our 24/7 support team is ready to assist with technical issues, subscription inquiries, and setup guidance." />
        <meta property="og:url" content="https://www.iptvservice.site/contact" />
        <meta property="og:site_name" content="IPTV Service" />
        <meta property="og:image" content="https://www.iptvservice.site/contact-support.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iptvservice" />
        <meta name="twitter:title" content="24/7 IPTV Support & Customer Service" />
        <meta name="twitter:description" content="Get instant IPTV support via live chat, WhatsApp, or email. Available 24/7!" />
        <meta name="twitter:image" content="https://www.iptvservice.site/contact-support.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-navy overflow-hidden">
        <Navbar />
        <main>
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-24 md:py-32"
          >
            <motion.header 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-16 md:mb-24"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Get in <span className="text-primary relative inline-block">Touch
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Have questions about our IPTV service? Our support team is available 24/7 to assist you.
              </p>
            </motion.header>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-start relative"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />

              <Suspense fallback={
                <div className="space-y-6">
                  <Skeleton className="h-12 w-3/4" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-12 w-2/3" />
                </div>
              }>
                <ContactInfo />
              </Suspense>

              <Suspense fallback={
                <div className="space-y-6 bg-navy-light/50 border border-white/10 rounded-2xl p-8">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              }>
                <ContactForm />
              </Suspense>
            </motion.section>
          </motion.article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;