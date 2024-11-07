import React from 'react';
import { SEO } from '@/components/SEO';
import BlogPost from '@/components/blog/BlogPost';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="How to Easily Set Up IPTV on FireStick? - Complete Guide"
        description="Learn how to set up IPTV on your FireStick with our step-by-step guide. Includes installation tips, troubleshooting, and performance optimization."
        canonical="/blog"
        type="article"
        keywords="IPTV, FireStick, setup guide, streaming"
        structuredData={{
          "@type": "BlogPosting",
          "headline": "How to Easily Set Up IPTV on FireStick? - Complete Guide",
          "description": "Learn how to set up IPTV on your FireStick with our step-by-step guide. Includes installation tips, troubleshooting, and performance optimization."
        }}
      />
      <BlogPost />
    </div>
  );
};

export default Blog;