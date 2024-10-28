import { Shield, Tv, Globe, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Benefits = () => {
  const benefits = [
    {
      title: "Économique",
      description: "Plus abordable que les forfaits TV câble ou satellite traditionnels.",
      icon: <CreditCard className="w-6 h-6" />,
      link: "/fr/pricing"
    },
    {
      title: "Streaming Haute Qualité",
      description: "Profitez d'une qualité audio et vidéo haute définition.",
      icon: <Tv className="w-6 h-6" />,
      link: "/fr/features"
    },
    {
      title: "Visionnage Flexible",
      description: "Regardez vos contenus préférés n'importe quand, n'importe où avec une connexion internet.",
      icon: <Shield className="w-6 h-6" />,
      link: "/fr/features#streaming"
    },
    {
      title: "Portée Mondiale",
      description: "Accédez à une large gamme de chaînes et contenus internationaux.",
      icon: <Globe className="w-6 h-6" />,
      link: "/fr/features#channels"
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
            <Link to="/fr/features" className="block relative transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-2xl" aria-hidden="true" />
              <img 
                src="https://ideogram.ai/assets/progressive-image/balanced/response/rjBDn08hT6OtKawxA6EQPg" 
                alt="Famille profitant du divertissement IPTV ensemble" 
                className="relative rounded-3xl shadow-2xl border border-white/10 group-hover:border-primary/50 transition-colors duration-300"
                loading="lazy"
                width="600"
                height="400"
              />
              <figcaption className="absolute -bottom-6 -right-6 bg-navy-light/90 border border-white/10 rounded-2xl px-6 py-3 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                  <p className="text-white font-medium">Qualité Premium</p>
                </div>
              </figcaption>
            </Link>
          </figure>
          
          <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
            <header className="space-y-4 text-center lg:text-left">
              <Link to="/fr/features" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-2 backdrop-blur-xl text-sm hover:bg-white/10 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                <span className="text-white">Pourquoi Nous Choisir?</span>
              </Link>
              
              <h2 id="benefits-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Avantages de l'{" "}
                <Link to="/fr/pricing" className="text-primary relative inline-block hover:text-primary/90 transition-colors">
                  IPTV
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" aria-hidden="true" />
                </Link>
              </h2>
            </header>
            
            <ul className="space-y-4 md:space-y-6" role="list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <Link 
                    to={benefit.link}
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
                  </Link>
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