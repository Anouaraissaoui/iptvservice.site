import { Helmet } from "react-helmet-async";
import { Users, Tv, Radio, Film } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ServerSEO } from "@/components/ServerSEO";
import { generateOrganizationData, generateWebsiteData, generateProductData } from "@/utils/structuredData";

const Index = () => {
  const currentDate = new Date().getFullYear();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationData(),
      generateWebsiteData(),
      generateProductData(11),
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/fr/#webpage",
        "url": "https://www.iptvservice.site/fr",
        "name": `Acheter un Abonnement IPTV | Meilleur Service IPTV ${currentDate}`,
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "about": { "@id": "https://www.iptvservice.site/#organization" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.iptvservice.site/images/IPTV-Service.webp",
          "width": "1200",
          "height": "630"
        },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Achetez un abonnement IPTV avec plus de 18000 chaînes HD et 4K. Le meilleur service IPTV en France avec activation instantanée. Support 24/7.",
        "inLanguage": "fr-FR"
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title="Acheter un Abonnement IPTV | Meilleur Service IPTV 2024"
        description="Achetez un abonnement IPTV avec plus de 18000 chaînes HD et 4K. Le meilleur service IPTV en France avec activation instantanée. Support 24/7."
        structuredData={structuredData}
      />
      <SEO
        title="Acheter un Abonnement IPTV | Meilleur Service IPTV 2024"
        description="Achetez un abonnement IPTV avec plus de 18000 chaînes HD et 4K. Le meilleur service IPTV en France avec activation instantanée. Support 24/7."
        keywords="acheter IPTV, service IPTV, meilleur IPTV, abonnement IPTV, IPTV France, chaînes HD, IPTV 4K, service IPTV premium"
        structuredData={structuredData}
        type="website"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
      />
      <Helmet>
        <html lang="fr" />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr" />
        <link rel="alternate" hrefLang="es" href="https://www.iptvservice.site/es" />
        <link rel="alternate" hrefLang="de" href="https://www.iptvservice.site/de" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iptvservice.site/" />
      </Helmet>
      <div className="min-h-screen bg-navy">
        <Navbar />
        <Hero />
        <div className="py-16 md:py-24 bg-navy-light relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-2 backdrop-blur-xl text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-white">Pourquoi Nous Choisir?</span>
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Pourquoi Nous Choisir Pour Votre{" "}
                <span className="text-primary relative inline-block">
                  Abonnement IPTV
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                </span>
              </h2>
              
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-8" />
              
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Découvrez une qualité et une fiabilité inégalées avec notre service IPTV premium, approuvé par des milliers d'utilisateurs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <StatsCard
                icon={<Users className="w-8 h-8" />}
                number="+50K"
                label="Clients Satisfaits"
              />
              <StatsCard
                icon={<Tv className="w-8 h-8" />}
                number="+40K"
                label="Chaînes"
              />
              <StatsCard
                icon={<Radio className="w-8 h-8" />}
                number="+1,500"
                label="Chaînes Sport"
              />
              <StatsCard
                icon={<Film className="w-8 h-8" />}
                number="+50K"
                label="Films et VOD"
              />
            </div>
          </div>
        </div>
        <PricingCards />
        <Benefits />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

interface StatsCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatsCard = ({ icon, number, label }: StatsCardProps) => (
  <div className="relative group transform hover:scale-105 transition-all duration-500">
    <div className="absolute inset-0 bg-primary/5 blur-xl rounded-3xl group-hover:bg-primary/10 transition-all duration-300" />
    
    <div className="relative bg-navy-light/80 border border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 backdrop-blur-sm h-full">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      
      <p className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
        {number}
      </p>
      
      <p className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300">
        {label}
      </p>
    </div>
  </div>
);

export default Index;
