import { Shield, Tv, Globe, CreditCard } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Benefits = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();
  const isFrench = location.pathname.startsWith("/fr");

  const benefits = [
    {
      title: isFrench ? "Économique" : "Cost-Effective",
      description: isFrench ? "Plus abordable que les forfaits TV câble ou satellite traditionnels." : "More affordable than traditional cable or satellite TV packages.",
      icon: <CreditCard className="w-6 h-6" />,
      link: isFrench ? "/fr/pricing" : "/pricing"
    },
    {
      title: isFrench ? "Streaming Haute Qualité" : "High-Quality Streaming",
      description: isFrench ? "Profitez d'une qualité vidéo et audio haute définition." : "Enjoy crisp, high-definition video and audio quality.",
      icon: <Tv className="w-6 h-6" />,
      link: isFrench ? "/fr/features" : "/features"
    },
    {
      title: isFrench ? "Visionnage Flexible" : "Flexible Viewing",
      description: isFrench ? "Regardez vos contenus préférés n'importe où avec une connexion internet." : "Watch your favorite content anytime, anywhere with an internet connection.",
      icon: <Shield className="w-6 h-6" />,
      link: isFrench ? "/fr/features#streaming" : "/features#streaming"
    },
    {
      title: isFrench ? "Portée Mondiale" : "Global Reach",
      description: isFrench ? "Accédez à une large gamme de chaînes et contenus internationaux." : "Access a wide range of international channels and content.",
      icon: <Globe className="w-6 h-6" />,
      link: isFrench ? "/fr/features#channels" : "/features#channels"
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 bg-navy-light relative overflow-hidden"
      aria-labelledby="benefits-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <figure className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" aria-hidden="true" />
            <a href={isFrench ? "/fr/features" : "/features"} className="block relative transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-2xl" aria-hidden="true" />
              {isLoading && (
                <div className="absolute inset-0 bg-navy animate-pulse rounded-3xl" />
              )}
              <img 
                src="/images/IPTV-Subscription.webp" 
                alt={isFrench ? "Famille profitant du divertissement IPTV ensemble" : "Family enjoying IPTV entertainment together"}
                className={`relative rounded-3xl shadow-2xl border border-white/10 group-hover:border-primary/50 transition-all duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                loading="lazy"
                width="600"
                height="400"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setError(true);
                  setIsLoading(false);
                }}
              />
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-navy rounded-3xl">
                  <p className="text-gray-400">{isFrench ? "Impossible de charger l'image" : "Failed to load image"}</p>
                </div>
              )}
              <figcaption className="absolute -bottom-6 -right-6 bg-navy-light/90 border border-white/10 rounded-2xl px-6 py-3 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                  <p className="text-white font-medium">{isFrench ? "Qualité Premium" : "Premium Quality"}</p>
                </div>
              </figcaption>
            </a>
          </figure>
          
          <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
            <header className="space-y-4 text-center lg:text-left">
              <a href={isFrench ? "/fr/features" : "/features"} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-2 backdrop-blur-xl text-sm hover:bg-white/10 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                <span className="text-white">{isFrench ? "Pourquoi Nous Choisir ?" : "Why Choose Us?"}</span>
              </a>
              
              <h2 id="benefits-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {isFrench ? "Avantages de l'" : "Benefits of "}
                <a href={isFrench ? "/fr/pricing" : "/pricing"} className="text-primary relative inline-block hover:text-primary/90 transition-colors">
                  IPTV
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" aria-hidden="true" />
                </a>
              </h2>
            </header>
            
            <ul className="space-y-4 md:space-y-6" role="list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <a 
                    href={benefit.link}
                    className="block group bg-navy/50 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:bg-navy-light/50 hover:scale-105 backdrop-blur-sm"
                  >
                    <article className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {benefit.description}
                        </p>
                      </div>
                    </article>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
