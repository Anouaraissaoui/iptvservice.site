import { Shield, Tv, Globe, CreditCard } from "lucide-react";
import { useState } from "react";

const Benefits = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const benefits = [
    {
      title: "Cost-Effective",
      description: (
        <>
          More affordable than traditional cable or satellite TV packages. Learn more about{" "}
          <a 
            href="https://en.wikipedia.org/wiki/Internet_Protocol_television" 
            target="_blank" 
            rel="dofollow"
            className="text-primary hover:text-primary/80 underline decoration-primary/30 transition-colors"
          >
            IPTV streaming technology
          </a>
          .
        </>
      ),
      icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "/pricing",
      linkText: "View IPTV Subscription Plans"
    },
    {
      title: "High-Quality Streaming",
      description: "Enjoy crisp, high-definition video and audio quality.",
      icon: <Tv className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "/features",
      linkText: "Explore HD & 4K Streaming Features"
    },
    {
      title: "Flexible Viewing",
      description: "Watch your favorite content anytime, anywhere with an internet connection.",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "/features#streaming",
      linkText: "Learn About Multi-device Streaming"
    },
    {
      title: "Global Reach",
      description: "Access a wide range of international channels and content.",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "/features#channels",
      linkText: "Browse International Channel List"
    }
  ];

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-navy-light relative overflow-hidden"
      aria-labelledby="benefits-heading"
      role="region"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <figure className="relative group order-2 lg:order-1" role="img" aria-label="IPTV Service Features">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" aria-hidden="true" />
            <a 
              href="/features" 
              className="block relative transform group-hover:scale-[1.02] transition-all duration-500"
              aria-label="Explore IPTV Features"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-2xl" aria-hidden="true" />
              {isLoading && (
                <div className="absolute inset-0 bg-navy animate-pulse rounded-3xl" role="progressbar" aria-label="Loading image..." />
              )}
              <img 
                src="/images/IPTV-Subscription.webp" 
                alt="Premium IPTV subscription packages featuring HD and 4K quality streaming with multiple channels, VOD content, and live sports for comprehensive entertainment"
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
                <div className="absolute inset-0 flex items-center justify-center bg-navy rounded-3xl" role="alert">
                  <p className="text-gray-400">Failed to load image</p>
                </div>
              )}
              <figcaption className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-navy-light/90 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                  <p className="text-white text-sm sm:text-base font-medium">Premium Quality Streaming</p>
                </div>
              </figcaption>
            </a>
          </figure>
          
          <div className="space-y-8 sm:space-y-10 md:space-y-12 order-1 lg:order-2">
            <header className="space-y-6 text-center lg:text-left">
              <a 
                href="/features" 
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 sm:px-6 md:px-8 py-2.5 backdrop-blur-xl text-sm sm:text-base hover:bg-white/10 transition-all duration-300 font-medium"
                aria-label="Learn about our IPTV service benefits"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                <span className="text-white">Why Choose Our IPTV Service?</span>
              </a>
              
              <h2 
                id="benefits-heading" 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Premium{" "}
                <span className="text-primary relative inline-block hover:text-primary/90 transition-colors">
                  IPTV Benefits
                  <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-primary/30 blur-sm" aria-hidden="true" />
                </span>
              </h2>
            </header>
            
            <ul 
              className="space-y-5 md:space-y-7" 
              role="list" 
              aria-label="IPTV Service Benefits"
            >
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <a 
                    href={benefit.link}
                    className="block group bg-navy/50 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:border-primary/50 transition-all duration-300 hover:bg-navy-light/50 hover:scale-[1.02] sm:hover:scale-105 backdrop-blur-sm"
                    aria-label={benefit.linkText}
                  >
                    <article className="flex items-start gap-4 sm:gap-5">
                      <div 
                        className="p-3 sm:p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors"
                        aria-hidden="true"
                      >
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
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