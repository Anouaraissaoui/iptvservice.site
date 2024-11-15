import { memo } from "react";
import { Link } from "react-router-dom";
import HeroTitle from "./hero/HeroTitle";
import HeroImage from "./hero/HeroImage";
import HeroActions from "./hero/HeroActions";

const Hero = memo(() => {
  return (
    <header 
      className="relative min-h-[calc(100vh-4rem)] w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 bg-navy overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative">
        <article 
          className="flex flex-col gap-6 sm:gap-8 md:gap-10 text-center lg:text-left"
          itemScope 
          itemType="https://schema.org/Article"
          role="article"
          aria-label="Premium IPTV Service Introduction"
        >
          <div 
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 w-max mx-auto lg:mx-0"
            role="complementary"
          >
            <span className="text-primary animate-pulse font-semibold">New</span>
            <Link 
              to="/features" 
              className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent text-sm md:text-base hover:text-primary transition-colors"
              itemProp="url"
              aria-label="Learn about our new features"
            >
              Experience the future of TV →
            </Link>
          </div>
          
          <HeroTitle />
          
          <h2 
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
            itemProp="description"
            role="doc-subtitle"
          >
            Unleash unmatched entertainment with our leading IPTV subscription service. 
            <Link 
              to="/blog" 
              className="text-primary hover:text-primary/90 transition-colors"
              aria-label="Read our IPTV guide"
            >
              Learn more about IPTV 
            </Link> 
            from the best in the industry and enjoy a seamless, high-quality viewing experience.
          </h2>
          
          <HeroActions />
        </article>
        
        <HeroImage 
          alt="Premium IPTV streaming service showcasing 18,000+ HD and 4K quality channels with live sports, movies, and international content for the ultimate entertainment experience" 
        />
      </div>
    </header>
  );
});

Hero.displayName = "Hero";

export default Hero;