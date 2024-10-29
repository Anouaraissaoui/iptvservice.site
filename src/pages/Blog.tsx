import { Helmet } from "react-helmet-async";
import { useQuery, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { getQueryClient, prefetchData } from "@/utils/ssr";

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
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://www.iptvservice.site/blog/#blog",
        "name": "IPTV Blog",
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
      },
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/blog/#webpage",
        "url": "https://www.iptvservice.site/blog",
        "name": "IPTV Blog | Latest Streaming News & Updates 2024",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Stay informed with expert IPTV guides, streaming tips, industry news, and technical tutorials.",
        "breadcrumb": { "@id": "https://www.iptvservice.site/blog/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.iptvservice.site/blog/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "https://www.iptvservice.site",
              "url": "https://www.iptvservice.site",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebPage",
              "@id": "https://www.iptvservice.site/blog",
              "url": "https://www.iptvservice.site/blog",
              "name": "Blog"
            }
          }
        ]
      }
    ]
  };

  return (
    <HydrationBoundary>
      <Helmet>
        <title>IPTV Blog | Latest Streaming News, Guides & Updates 2024</title>
        <meta name="description" content="Stay informed with expert IPTV guides, streaming tips, industry news, and technical tutorials. Learn about new features, channel updates, and maximize your streaming experience." />
        <meta name="keywords" content="IPTV blog, streaming news, IPTV guides, streaming tips, IPTV tutorials, IPTV updates 2024, streaming guides" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Premium IPTV Service" />
        
        <link rel="canonical" href="https://www.iptvservice.site/blog" />
        
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="IPTV Blog - Latest Streaming News & Guides 2024" />
        <meta property="og:description" content="Expert IPTV guides, streaming tips, and industry updates. Stay informed about the latest in IPTV technology!" />
        <meta property="og:url" content="https://www.iptvservice.site/blog" />
        <meta property="og:site_name" content="Premium IPTV Service" />
        <meta property="og:image" content="https://www.iptvservice.site/blog-overview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="article:publisher" content="https://www.iptvservice.site" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iptvservice" />
        <meta name="twitter:title" content="IPTV Blog - Latest News & Updates 2024" />
        <meta name="twitter:description" content="Expert IPTV guides & streaming tips. Stay updated with the latest IPTV technology!" />
        <meta name="twitter:image" content="https://www.iptvservice.site/blog-overview.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
    </HydrationBoundary>
  );
};

// Server-side rendering setup
export const getServerSideProps = async () => {
  const queryClient = getQueryClient();
  await prefetchData(queryClient);
  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Blog;