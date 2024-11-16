import { useQuery } from "@tanstack/react-query";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { SEO } from "@/components/SEO";
import { prefetchData } from "@/utils/ssr";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

interface Post {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
  link: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    "https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&per_page=9",
    {
      headers: {
        'Cache-Control': 'max-age=300', // Cache for 5 minutes
      }
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
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
        keywords="IPTV blog, streaming news, IPTV guides, streaming tips, IPTV tutorials, IPTV updates 2024, streaming guides"
        canonical="https://www.iptvservice.site/blog"
        structuredData={JSON.stringify(structuredData)}
      />

      <div className="min-h-screen bg-navy">
        <Navbar />
        <main className="relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container mx-auto px-4 py-24 relative">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-invert max-w-none"
            >
              <div className="text-center mb-16 space-y-4">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-xl text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-white">Latest IPTV Updates</span>
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                  IPTV{" "}
                  <span className="text-primary relative inline-block">
                    News & Guides
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 max-w-2xl mx-auto text-lg"
                >
                  Stay updated with the latest news, guides, and insights about IPTV streaming
                </motion.p>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Skeleton className="h-64 w-full rounded-xl" />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <BlogGrid posts={posts} isLoading={isLoading} />
                </motion.div>
              )}
            </motion.article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;