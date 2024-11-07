import { memo } from "react";
import { Link } from "react-router-dom";
import HeroTitle from "./hero/HeroTitle";
import HeroImage from "./hero/HeroImage";
import HeroActions from "./hero/HeroActions";

interface HeroTranslations {
  title: string;
  subtitle: string;
  cta: string;
  contactUs: string;
  newFeature: string;
  experienceText: string;
}

const Hero = memo(({ translations }: { translations?: HeroTranslations }) => {
  const defaultTranslations: HeroTranslations = {
    title: "Experience The #1 IPTV Subscription Service Today!",
    subtitle: "Unleash unmatched entertainment with our leading IPTV subscription service.",
    cta: "View Pricing Plans",
    contactUs: "Contact Support",
    newFeature: "New",
    experienceText: "Experience the future of TV →"
  };

  const t = translations || defaultTranslations;

  return (
    <section 
      className="relative min-h-[calc(100vh-4rem)] w-full pt-24 md:pt-32 pb-16 md:pb-20 bg-navy overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <article className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <span className="text-primary animate-pulse font-semibold" aria-label="New Feature">{t.newFeature}</span>
            <Link to="/features" className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent text-sm md:text-base hover:text-primary transition-colors">
              {t.experienceText}
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{t.title}</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {t.subtitle}
          </p>
          
          <nav className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" aria-label="Primary CTA">
            <Link to="/pricing">
              <button className="bg-primary text-navy hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 h-12 md:h-14 rounded-lg group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,133,0.4)] w-full sm:w-auto">
                {t.cta}
              </button>
            </Link>
            <Link to="/contact">
              <button className="text-white border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-base md:text-lg px-6 md:px-8 h-12 md:h-14 rounded-lg group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] w-full sm:w-auto">
                {t.contactUs}
              </button>
            </Link>
          </nav>
        </article>
        
        <HeroImage />
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;