import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.iptvservice.site/contact/#webpage",
        "url": "https://www.iptvservice.site/contact",
        "name": "24/7 IPTV Support & Customer Service | Get Instant Help",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Get instant support for your IPTV service. Our 24/7 customer support team provides technical assistance and setup guidance. Contact us via live chat, WhatsApp, or email.",
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
        <title>Contact IPTV Support | 24/7 Customer Service & Technical Help</title>
        <meta name="description" content="Get instant support for your IPTV service. Our 24/7 customer support team provides technical assistance, subscription help, and setup guidance. Reach us via live chat, WhatsApp, or email." />
        <meta name="keywords" content="IPTV support, IPTV customer service, IPTV help, IPTV technical support, IPTV setup help, contact IPTV service 2024" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://www.iptvservice.site/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="24/7 IPTV Customer Support & Technical Help 2024" />
        <meta property="og:description" content="Need help? Our 24/7 support team is ready to assist with technical issues, subscription inquiries, and setup guidance." />
        <meta property="og:url" content="https://www.iptvservice.site/contact" />
        <meta property="og:site_name" content="IPTV Service" />
        <meta property="og:image" content="https://www.iptvservice.site/contact-support.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-10 animate-grid" />
        <Navbar />
        <main className="relative">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-24"
          >
            <motion.header 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Contact Our Support Team
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Get instant support for your IPTV service needs. We're available 24/7 to help you.
              </p>
            </motion.header>

            <section className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <ContactInfo />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ContactForm />
              </motion.div>
            </section>
          </motion.article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;