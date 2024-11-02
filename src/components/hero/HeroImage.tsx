import { useState, useEffect } from 'react';

const HeroImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <figure className="relative mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" aria-hidden="true"></div>
      <div className="relative bg-navy-light rounded-3xl border border-white/10 p-2 md:p-3 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 hover:border-primary/50">
        <div className={`relative ${isLoading ? 'blur-xl animate-pulse' : 'blur-0'}`}>
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
            alt="Person enjoying IPTV streaming service on a large screen TV in a modern living room setting" 
            className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video transition-all duration-300"
            loading="eager"
            width="800"
            height="450"
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <div className="absolute inset-0 bg-navy-light/50 animate-pulse rounded-2xl" />
          )}
        </div>
        <figcaption className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 bg-navy-light/90 border border-white/10 rounded-2xl p-3 md:p-4 shadow-xl backdrop-blur-xl w-max">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary animate-pulse" aria-hidden="true"></div>
            <span className="text-white font-medium whitespace-nowrap text-sm md:text-base">Live Streaming Available</span>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default HeroImage;