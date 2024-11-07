import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogGrid } from "@/components/blog/BlogGrid";

const staticPosts = [
  {
    id: 1,
    date: new Date().toISOString(),
    title: { rendered: "Getting Started with IPTV" },
    excerpt: { rendered: "Learn everything you need to know about setting up and using IPTV services effectively." },
    link: "/blog/getting-started",
    _embedded: {
      "wp:featuredmedia": [{
        source_url: "https://www.iptvservice.site/Buy-IPTV.jpg"
      }]
    }
  },
  {
    id: 2,
    date: new Date().toISOString(),
    title: { rendered: "Best Devices for IPTV Streaming" },
    excerpt: { rendered: "Discover the top devices and setups for the optimal IPTV streaming experience." },
    link: "/blog/best-devices",
    _embedded: {
      "wp:featuredmedia": [{
        source_url: "https://www.iptvservice.site/IPTV-Service.webp"
      }]
    }
  },
  {
    id: 3,
    date: new Date().toISOString(),
    title: { rendered: "IPTV Troubleshooting Guide" },
    excerpt: { rendered: "Common issues and their solutions to ensure smooth IPTV streaming." },
    link: "/blog/troubleshooting",
    _embedded: {
      "wp:featuredmedia": [{
        source_url: "https://www.iptvservice.site/IPTV-Subscription.webp"
      }]
    }
  }
];

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
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
    },
    "blogPost": staticPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title.rendered,
      "datePublished": post.date,
      "url": `https://www.iptvservice.site${post.link}`,
      "image": post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
    }))
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
        <div className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" aria-hidden="true" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
          
          <div className="container mx-auto px-4 py-24 relative">
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

            <BlogGrid posts={staticPosts} isLoading={false} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Blog;