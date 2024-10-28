import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = memo(() => {
  return (
    <section 
      className="relative min-h-[calc(100vh-4rem)] pt-24 md:pt-32 pb-16 md:pb-20 bg-navy overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <article className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <span className="text-primary animate-pulse font-semibold">Nouveau</span>
            <Link to="/fr/features" className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent text-sm md:text-base hover:text-primary transition-colors">
              Découvrez l'avenir de la télévision →
            </Link>
          </div>
          
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Découvrez le N°1 des </span>
            <Link to="/fr/pricing" className="text-primary relative inline-block hover:text-primary/90 transition-colors">
              Services IPTV
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm"></span>
            </Link>{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Aujourd'hui!</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Libérez un divertissement inégalé avec notre service d'abonnement IPTV leader.
            <Link to="/fr/blog" className="text-primary hover:text-primary/90 transition-colors"> En savoir plus sur l'IPTV </Link> 
            des meilleurs de l'industrie et profitez d'une expérience de visionnage fluide et de haute qualité.
          </p>
          
          <nav className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" aria-label="Primary CTA">
            <Link to="/fr/pricing">
              <Button 
                className="bg-primary text-navy hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 h-12 md:h-14 group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,133,0.4)] w-full sm:w-auto"
                aria-label="Voir les forfaits"
              >
                Voir les forfaits
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/fr/contact">
              <Button 
                variant="outline" 
                className="text-white border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-base md:text-lg px-6 md:px-8 h-12 md:h-14 group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] w-full sm:w-auto"
                aria-label="Contacter le support"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                Contacter le support
              </Button>
            </Link>
          </nav>
        </article>
        
        <figure className="relative mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" aria-hidden="true"></div>
          <div className="relative bg-navy-light rounded-3xl border border-white/10 p-2 md:p-3 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 hover:border-primary/50">
            <img 
              src="https://ideogram.ai/assets/progressive-image/balanced/response/T-JUnqqgRsmp3yYR7L_s0g"
              alt="Personne profitant du service IPTV sur un grand écran TV dans un salon moderne" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              loading="eager"
              width="800"
              height="450"
            />
            <figcaption className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 bg-navy-light/90 border border-white/10 rounded-2xl p-3 md:p-4 shadow-xl backdrop-blur-xl w-max">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary animate-pulse" aria-hidden="true"></div>
                <span className="text-white font-medium whitespace-nowrap text-sm md:text-base">Streaming en direct disponible</span>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
});

export default Hero;