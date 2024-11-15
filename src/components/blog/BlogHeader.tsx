import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export const BlogHeader = () => {
  return (
    <header className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-xl text-sm mb-6">
        <BookOpen className="w-4 h-4 text-primary" />
        <span className="text-white">Latest IPTV Guides & Updates</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Latest IPTV{" "}
        <span className="text-primary relative inline-block">
          News & Guides
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Stay updated with the latest news, guides, and insights about IPTV streaming. 
        Check our{" "}
        <Link to="/troubleshooting" className="text-primary hover:underline">
          troubleshooting guide
        </Link>{" "}
        for technical support.
      </p>
    </header>
  );
};