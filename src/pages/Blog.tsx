import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Blog = () => {
  const structuredData = {
    "@type": "Blog",
    "@id": "https://www.iptvservice.site/blog/#blog",
    "name": "IPTV Blog - Latest Streaming News & Updates",
    "description": "Latest Streaming News, Guides & Updates 2024",
    "url": "https://www.iptvservice.site/blog",
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iptvservice.site/logo.svg"
      }
    }
  };

  return (
    <>
      <SEO
        title="IPTV Blog - Latest Streaming News & Updates 2024"
        description="Stay informed with expert IPTV guides, streaming tips, industry news, and technical tutorials. Learn about new features, channel updates, and maximize your streaming experience."
        keywords="IPTV blog, streaming news, IPTV guides, streaming tips, IPTV tutorials, IPTV updates 2024, streaming guides"
        canonical="https://www.iptvservice.site/blog"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest from Our{" "}
              <span className="text-primary relative inline-block">
                Blog
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest news, guides, and insights about IPTV streaming
            </p>
          </div>

          <div className="text-white text-center">
            Coming soon! Our blog is under construction.
          </div>
        </div>
        
        <Footer />
      </main>
    </>
  );
};

export default Blog;