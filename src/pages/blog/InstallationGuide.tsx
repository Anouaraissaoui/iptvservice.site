import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Header } from "@/components/blog/installation-guide/Header";
import { QuickLinks } from "@/components/blog/installation-guide/QuickLinks";
import { InstallationTabs } from "@/components/blog/installation-guide/InstallationTabs";
import { Faq } from "@/components/blog/installation-guide/Faq";

const InstallationGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install IPTV on Firestick, Android, and Apple TV",
    "description": "Complete guide for installing IPTV on Firestick, Android devices, and Apple TV. Step-by-step instructions for easy setup and configuration.",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.iptvservice.site/images/IPTV-troubleshooting.webp",
      "height": "630",
      "width": "1200"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enable Apps from Unknown Sources",
        "text": "Go to Settings and enable installation from unknown sources"
      },
      {
        "@type": "HowToStep",
        "name": "Download IPTV App",
        "text": "Download your preferred IPTV application"
      },
      {
        "@type": "HowToStep",
        "name": "Install and Configure",
        "text": "Install the app and enter your service credentials"
      }
    ],
    "totalTime": "PT10M"
  };

  return (
    <>
      <SEO
        title="How to Install IPTV on Firestick, Android, and Apple TV | Complete Guide 2025"
        description="Learn how to install IPTV on Firestick, Android devices, and Apple TV with our comprehensive guide. Step-by-step instructions for easy setup and configuration."
        canonical="/blog/installation-guide/"
        type="article"
        structuredData={structuredData}
        keywords="IPTV installation, Firestick IPTV setup, Android IPTV guide, Apple TV IPTV, IPTV apps, IPTV configuration"
        publishedTime="2024-02-26T12:00:00+00:00"
        modifiedTime={new Date().toISOString()}
      />
      
      <main className="min-h-screen bg-navy">
        <Navbar />
        
        <div className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          
          <article className="container mx-auto px-4 py-24 relative">
            <Header />
            <QuickLinks />
            <InstallationTabs />
            <Faq />
          </article>
        </div>
        
        <Footer />
      </main>
    </>
  );
};

export default InstallationGuide;