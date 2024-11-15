import { Suspense, lazy } from "react";
import { Loader2, CheckCircle2, Zap, Tv2, Globe2, Clock, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ServerSEO } from "@/components/ServerSEO";

// Lazy load Benefits component since it's below the fold
const LazyBenefits = lazy(() => import("@/components/Benefits"));

const Features = () => {
  const features = [
    {
      icon: <Tv2 className="w-6 h-6 text-primary" />,
      title: "18,000+ Live Channels",
      description: "Access a vast library of live TV channels from around the world in HD and 4K quality."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-primary" />,
      title: "International Content",
      description: "Enjoy content from multiple countries and regions with multi-language support."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "24/7 Availability",
      description: "Stream your favorite content anytime with our reliable, always-on service."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Ultra-Fast Streaming",
      description: "Experience buffer-free streaming with our optimized server network."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: "99.9% Uptime",
      description: "Rely on our stable service with minimal interruptions and consistent performance."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "Multi-Device Support",
      description: "Watch on any device including Smart TVs, phones, tablets, and computers."
    }
  ];

  return (
    <>
      <ServerSEO 
        title="Premium IPTV Features & Benefits | HD/4K Streaming with 18,000+ Channels"
        description="Explore our premium IPTV features: 18,000+ live channels, HD/4K quality, VOD content, catch-up TV, EPG guide, and multi-device support. Experience the best in streaming technology."
        canonical="/features"
        type="website"
        keywords="IPTV features, IPTV benefits, streaming quality, VOD content, live TV channels, HD IPTV, 4K streaming, EPG guide, catch-up TV, multi-device support"
        imageAlt="Premium IPTV Service Features"
        articleSection="Features"
      />

      <main className="min-h-screen bg-navy">
        <Navbar />
        
        {/* Hero Section */}
        <header className="pt-24 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-grid" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container mx-auto max-w-6xl relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 animate-fade-in">
              Premium IPTV{" "}
              <span className="text-primary relative inline-block">
                Features & Benefits
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
              </span>
            </h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg animate-fade-in delay-100">
              Discover why our IPTV service stands out with premium features and unmatched streaming quality
            </p>
          </div>
        </header>

        {/* Features Grid */}
        <section className="py-16 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <article 
                  key={index}
                  className="group bg-navy-light/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with Suspense */}
        <Suspense 
          fallback={
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          }
        >
          <LazyBenefits />
        </Suspense>

        <Footer />
      </main>
    </>
  );
};

export default Features;