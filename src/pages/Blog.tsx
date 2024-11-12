import { useQuery } from "@tanstack/react-query";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { SEO } from "@/components/SEO";
import { prefetchData } from "@/utils/ssr";

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
    "https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&per_page=9"
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
  });

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
        title="IPTV Blog | Latest Streaming News & Expert Tips 2024"
        description="Stay informed with expert IPTV guides, streaming tips, industry news, and technical tutorials. Learn about new features, channel updates, and maximize your streaming experience."
        keywords="IPTV blog, streaming news, IPTV guides, streaming tips, IPTV tutorials, IPTV updates 2024, streaming guides"
        canonical="https://www.iptvservice.site/blog"
        structuredData={JSON.stringify(structuredData)}
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

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await prefetchData(queryClient);
  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Blog;
