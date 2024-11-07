import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlogGrid } from "@/components/blog/BlogGrid";

// Import the blog post
import FirestickGuide from "../content/blog/firestick-setup-guide.mdx";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      // For now we'll return just the Firestick guide
      // In a real app, you'd fetch this from an API
      return [{
        id: 1,
        date: "2024-03-19",
        title: { rendered: "How to Easily Set Up IPTV on FireStick? – Step-By-Step Guide 2024" },
        excerpt: { rendered: "Complete step-by-step guide to install and set up IPTV on your Amazon FireStick..." },
        content: FirestickGuide,
        link: "/blog/firestick-setup-guide",
        _embedded: {
          "wp:featuredmedia": [{
            source_url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          }]
        }
      }]
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.iptvservice.site/blog/#blog",
    "name": "IPTV Blog - Latest Streaming News & Updates",
    "description": "Latest IPTV guides, news, and updates",
    "url": "https://www.iptvservice.site/blog",
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iptvservice.site/logo.svg"
      }
    },
    "blogPost": posts?.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title.rendered,
      "datePublished": post.date,
      "url": post.link,
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

          <BlogGrid posts={posts} isLoading={isLoading} />
        </div>
        
        <Footer />
      </main>
    </>
  );
};

export default Blog;