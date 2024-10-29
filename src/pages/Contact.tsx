import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.iptvservice.site/contact/#webpage",
        "url": "https://www.iptvservice.site/contact",
        "name": "24/7 IPTV Support & Customer Service",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Get instant support for your IPTV service. Our 24/7 customer support team provides technical assistance and setup guidance.",
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
        <title>24/7 IPTV Support & Customer Service | Premium IPTV Help</title>
        <meta name="description" content="Get instant support for your IPTV service. Our 24/7 customer support team provides technical assistance, subscription help, and setup guidance. Reach us via live chat, WhatsApp, or email." />
        <meta name="keywords" content="IPTV support, IPTV customer service, IPTV help, IPTV technical support, IPTV setup help, contact IPTV service 2024" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="IPTV Service" />
        
        <link rel="canonical" href="https://www.iptvservice.site/contact" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="24/7 IPTV Customer Support & Technical Help 2024" />
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

      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
