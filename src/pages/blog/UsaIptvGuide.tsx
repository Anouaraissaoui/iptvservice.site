import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GuideHeader } from "@/components/blog/usa-guide/GuideHeader";
import { ProvidersTable } from "@/components/blog/usa-guide/ProvidersTable";
import { GuideFAQ } from "@/components/blog/usa-guide/GuideFAQ";

const UsaIptvGuide = () => {
  return (
    <>
      <SEO
        title="Best USA IPTV Service Providers (2024): A Complete Guide"
        description="Comprehensive guide to the best IPTV service providers in the USA for 2024. Compare features, pricing, and find the perfect streaming solution."
        keywords="IPTV service, USA IPTV, streaming services, IPTV providers, legal IPTV, IPTV guide 2024"
        type="article"
        publishedTime="2024-02-20T00:00:00Z"
      />

      <div className="min-h-screen bg-navy">
        <Navbar />
        
        <main className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-grid" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container mx-auto px-4 py-24 relative">
            <article className="prose prose-invert max-w-none">
              <GuideHeader />

              {/* What is IPTV Section */}
              <section className="mb-16">
                <Card className="bg-navy-light/50 border border-white/10 p-8 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-4">What is IPTV?</h2>
                  <p className="text-gray-400">
                    IPTV delivers television content over the internet, unlike traditional broadcast or cable 
                    TV services. Through IPTV, viewers can access live TV, on-demand content, and time-shifted 
                    media, often with more flexibility and at a lower cost than conventional options.
                  </p>
                </Card>
              </section>

              {/* Providers Table Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Top IPTV Service Providers</h2>
                <ProvidersTable />
              </section>

              {/* Requirements Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Requirements for Optimal IPTV Performance</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-navy-light/50 border border-white/10 p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-4">High-Speed Internet</h3>
                    <p className="text-gray-400">
                      Recommended speeds are 25 Mbps for HD and 75 Mbps or higher for 4K streaming quality.
                    </p>
                  </Card>
                  <Card className="bg-navy-light/50 border border-white/10 p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-4">Compatible Devices</h3>
                    <p className="text-gray-400">
                      Use Smart TVs, streaming devices, or smartphones that support the IPTV app.
                    </p>
                  </Card>
                </div>
              </section>

              {/* FAQs Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <GuideFAQ />
              </section>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UsaIptvGuide;