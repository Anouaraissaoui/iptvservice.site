import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { SEO } from "@/components/SEO";
import { client } from "@/lib/apollo-client";
import { BlogPost } from "@/types/components";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        date
        title
        excerpt
        slug
      }
    }
  }
`;

const STATIC_POSTS = [
  {
    id: '1',
    date: new Date().toISOString(),
    title: { rendered: "Getting Started with IPTV Streaming" },
    excerpt: { rendered: "Learn everything you need to know about setting up and enjoying IPTV streaming services." },
    _embedded: {
      "wp:featuredmedia": [{
        source_url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        alt_text: "Woman streaming content on laptop"
      }]
    },
    link: "/blog/getting-started-iptv-streaming"
  },
  {
    id: '2',
    date: new Date().toISOString(),
    title: { rendered: "Best Devices for IPTV Streaming" },
    excerpt: { rendered: "Discover the top devices and setups for optimal IPTV streaming experience." },
    _embedded: {
      "wp:featuredmedia": [{
        source_url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        alt_text: "Streaming devices setup"
      }]
    },
    link: "/blog/best-devices-iptv-streaming"
  },
  {
    id: '3',
    date: new Date().toISOString(),
    title: { rendered: "Understanding IPTV Technology" },
    excerpt: { rendered: "Deep dive into how IPTV technology works and what makes it different from traditional TV." },
    _embedded: {
      "wp:featuredmedia": [{
        source_url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        alt_text: "Technical infrastructure visualization"
      }]
    },
    link: "/blog/understanding-iptv-technology"
  }
];

const Blog = () => {
  const { loading: isLoading } = useQuery(GET_POSTS, {
    client,
  });

  const posts = STATIC_POSTS;

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
    },
    "blogPost": posts?.map((post: BlogPost) => ({
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