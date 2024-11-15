import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ServerSEO } from "@/components/ServerSEO";

const Features = () => {
  return (
    <>
      <ServerSEO 
        title="IPTV Features & Benefits | HD/4K Streaming with 18,000+ Channels"
        description="Explore our premium IPTV features: 18,000+ channels worldwide, HD/4K streaming, catch-up TV, multi-device support, EPG guide, and extensive VOD library."
        canonical="/features"
        ogImage="/images/IPTV-Service.webp"
        type="website"
        keywords="IPTV features, IPTV benefits, streaming quality, VOD content, live TV channels, HD IPTV, 4K streaming, EPG guide"
      />
      
      <main className="min-h-screen bg-navy">
        <Navbar />
        
        <header className="pt-20 pb-12 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" aria-hidden="true" />
          <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
          
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                Premium IPTV{" "}
                <span className="text-primary relative inline-block">
                  Features & Benefits
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                </span>
              </h1>
              <p className="text-gray-400 text-lg animate-fade-in delay-100">
                Discover why our IPTV service stands out with premium features and unmatched benefits
              </p>
            </div>
          </div>
        </header>

        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4">
            <Card className="bg-navy-light/50 border border-white/10 overflow-hidden backdrop-blur-xl">
              <CardContent className="p-6 md:p-8 space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div 
                      key={feature.title}
                      className="p-6 rounded-xl bg-navy/50 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Benefits />
        <Footer />
      </main>
    </>
  );
};

const features = [
  {
    title: "HD & 4K Quality",
    description: "Crystal clear streaming with support for HD and 4K resolution content.",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" y1="20" x2="2" y2="20"/></svg>
  },
  {
    title: "18,000+ Channels",
    description: "Access to over 18,000 live TV channels from around the world.",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
  },
  {
    title: "Multi-device Support",
    description: "Watch on multiple devices simultaneously with one subscription.",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
  },
  {
    title: "EPG Guide",
    description: "Comprehensive electronic program guide for easy content discovery.",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
  },
  {
    title: "VOD Library",
    description: "Extensive video-on-demand library with movies and TV shows.",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support for technical assistance.",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
  }
];

export default Features;