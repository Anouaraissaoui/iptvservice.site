import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, ChevronRight, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (error) {
    return (
      <div className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="text-center text-red-500">
            Error loading blog posts. Please try again later.
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="bg-navy-light border-white/10">
                  <CardHeader>
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-6 w-3/4 mt-4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mt-2" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                  </CardContent>
                </Card>
              ))
            : posts?.map((post) => (
                <Card 
                  key={post.id} 
                  className="bg-navy-light border-white/10 hover:border-primary/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post.title.rendered}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardTitle className="text-white group-hover:text-primary transition-colors line-clamp-2">
                      <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      <div 
                        className="line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                      />
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>
                          {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>5 min read</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:text-primary group-hover:bg-primary/10"
                      asChild
                    >
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Read More
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;