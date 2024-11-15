import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { SEO } from "@/components/SEO";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&per_page=9",
        {
          headers: {
            'Cache-Control': 'max-age=3600'
          }
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.iptvservice.site/blog/#blog",
    "name": "IPTV Blog - Latest Streaming News & Updates",
    "description": "Latest IPTV Streaming News, Guides & Updates 2024",
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
        title="IPTV Blog - Latest Streaming News & Updates 2025"
        description="Stay informed with expert IPTV guides, streaming tips, industry news, and technical tutorials. Learn about new features, channel updates, and maximize your streaming experience."
        keywords="IPTV blog, streaming news, IPTV guides, streaming tips, IPTV tutorials, IPTV updates 2025, streaming guides"
        canonical="https://www.iptvservice.site/blog"
        structuredData={structuredData}
        type="article"
        modifiedTime={new Date().toISOString()}
      />

      <main 
        className="min-h-screen bg-navy"
        itemScope 
        itemType="https://schema.org/Blog"
      >
        <header role="banner">
          <Navbar />
        </header>
        
        <article 
          className="container mx-auto px-4 py-24"
          itemScope 
          itemType="https://schema.org/BlogPosting"
        >
          <BlogHeader />
          <section 
            aria-label="Blog Posts"
            role="region"
          >
            <BlogGrid posts={posts} isLoading={isLoading} />
          </section>
        </article>
        
        <Footer />
      </main>
    </>
  );
};

export default Blog;