import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/installation-guide/HeroSection";
import { QuickLinks } from "@/components/installation-guide/QuickLinks";
import { InstallationTabs } from "@/components/installation-guide/InstallationTabs";
import { FAQ } from "@/components/installation-guide/FAQ";

const InstallationGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Install IPTV on Firestick, Android, and Apple TV",
    "description": "Complete guide for installing IPTV on Firestick, Android devices, and Apple TV. Step-by-step instructions for easy setup and configuration.",
    "image": "https://www.iptvservice.site/images/IPTV-troubleshooting.webp",
    "author": {
      "@type": "Organization",
      "name": "IPTV Service"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iptvservice.site/logo.svg"
      }
    },
    "datePublished": "2024-02-26",
    "dateModified": new Date().toISOString()
  };

  return (
    <>
      <SEO
        title="How to Install IPTV on Firestick, Android, and Apple TV | Complete Guide 2025"
        description="Learn how to install IPTV on Firestick, Android devices, and Apple TV with our comprehensive guide. Step-by-step instructions for easy setup and configuration."
        canonical="https://www.iptvservice.site/blog/installation-guide/"
        type="article"
        structuredData={structuredData}
        keywords="IPTV installation, Firestick IPTV setup, Android IPTV guide, Apple TV IPTV, IPTV apps, IPTV configuration, streaming setup, IPTV Smarters, TiviMate, GSE Smart IPTV, M3U URL setup, Xtream codes"
      />
      
      <main className="min-h-screen bg-navy">
        <Navbar />
        
        <article className="container mx-auto px-4 py-24">
          <HeroSection />
          <div className="max-w-4xl mx-auto">
            <QuickLinks />
            <InstallationTabs />
            <FAQ />
          </div>
        </article>
        
        <Footer />
      </main>
    </>
  );
};

export default InstallationGuide;