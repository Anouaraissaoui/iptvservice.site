import { Helmet } from "react-helmet-async";
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

const FrenchIndex = () => {
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
        "name": "Acheter un Abonnement IPTV | Meilleur Service IPTV 2024",
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
        "description": "Achetez un abonnement IPTV avec plus de 18000 chaînes HD et 4K. Meilleur service IPTV en France avec activation instantanée. Support client 24/7.",
        "inLanguage": "fr-FR"
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title="Acheter un Abonnement IPTV | Meilleur Service IPTV 2024"
        description="Achetez un abonnement IPTV avec plus de 18000 chaînes HD et 4K. Meilleur service IPTV en France avec activation instantanée."
        structuredData={structuredData}
      />
      <SEO
        title="Acheter un Abonnement IPTV | Meilleur Service IPTV 2024"
        description="Achetez un abonnement IPTV avec plus de 18000 chaînes HD et 4K. Service premium avec activation instantanée et support 24/7."
        keywords="abonnement IPTV, service IPTV, meilleur IPTV, IPTV France, chaînes HD, 4K IPTV, télévision en ligne, streaming TV"
        structuredData={structuredData}
        type="website"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
        alternates={{
          "en": "/",
          "fr": "/fr",
          "es": "/es",
          "de": "/de",
          "uk": "/uk"
        }}
        breadcrumbs={[
          {
            name: "Accueil",
            path: "/fr",
            position: 1,
            item: "https://www.iptvservice.site/fr"
          }
        ]}
      />
      <Helmet>
        <html lang="fr" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr" />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site" />
        <link rel="alternate" hrefLang="es" href="https://www.iptvservice.site/es" />
        <link rel="alternate" hrefLang="de" href="https://www.iptvservice.site/de" />
        <link rel="alternate" hrefLang="uk" href="https://www.iptvservice.site/uk" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iptvservice.site" />
      </Helmet>
      <div className="min-h-screen bg-navy">
        <Navbar />
        <section className="relative min-h-[calc(100vh-4rem)] w-full pt-24 md:pt-32 pb-16 md:pb-20 bg-navy overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <span className="text-primary animate-pulse font-semibold">Nouveau</span>
                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent text-sm md:text-base hover:text-primary transition-colors">
                  Découvrez l'avenir de la télévision →
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Le Meilleur Service
                </span>{" "}
                <span className="text-primary relative inline-block">
                  IPTV
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                </span>{" "}
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  en France !
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Profitez d'un divertissement inégalé avec notre service d'abonnement IPTV premium. 
                Plus de 18 000 chaînes en HD et 4K, activation instantanée et support client 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/fr/pricing" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 transition-all duration-300">
                  Voir les Forfaits
                </a>
                <a href="/fr/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366]/10 hover:bg-[#25D366]/20 md:py-4 md:text-lg md:px-10 transition-all duration-300">
                  Contactez-nous
                </a>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
              <div className="relative bg-navy-light rounded-3xl border border-white/10 p-2 md:p-3 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 hover:border-primary/50">
                <img 
                  src="/images/IPTV-Service.webp"
                  alt="Profitez du service IPTV sur votre grand écran TV dans un salon moderne" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
                  loading="eager"
                  width={800}
                  height={450}
                />
                <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 bg-navy-light/90 border border-white/10 rounded-2xl px-6 py-3 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-white font-medium">Streaming en Direct Disponible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy-light relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-2 backdrop-blur-xl text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-white">Pourquoi Nous Choisir ?</span>
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
                Découvrez une qualité et une fiabilité inégalées avec notre service IPTV premium, 
                choisi par des milliers d'utilisateurs dans le monde entier.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <StatCard
                number="+50K"
                label="Clients Satisfaits"
                icon={<Users className="w-8 h-8" />}
              />
              <StatCard
                number="+40K"
                label="Chaînes"
                icon={<Tv className="w-8 h-8" />}
              />
              <StatCard
                number="+1,500"
                label="Chaînes Sport"
                icon={<Radio className="w-8 h-8" />}
              />
              <StatCard
                number="+50K"
                label="Films & Séries"
                icon={<Film className="w-8 h-8" />}
              />
            </div>
          </div>
        </section>

        <PricingCards />
        <Benefits />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => (
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

export default FrenchIndex;