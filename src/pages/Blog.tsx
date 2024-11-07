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
    posts(first: 9) {
      nodes {
        id
        date
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        link
      }
    }
  }
`;

const Blog = () => {
  const { data, loading: isLoading } = useQuery(GET_POSTS, {
    client,
  });

  const posts = data?.posts?.nodes?.map((post: any) => ({
    id: post.id,
    date: post.date,
    title: { rendered: post.title },
    excerpt: { rendered: post.excerpt },
    _embedded: post.featuredImage ? {
      "wp:featuredmedia": [{
        source_url: post.featuredImage.node.sourceUrl,
        alt_text: post.featuredImage.node.altText
      }]
    } : undefined,
    featuredImage: post.featuredImage,
    link: post.link
  }));

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