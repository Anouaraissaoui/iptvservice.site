import { formatDistanceToNow } from "date-fns";
import { CalendarDays, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

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

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Card className="bg-navy-light border-white/10 hover:border-primary/50 transition-all duration-300 group">
      <CardHeader>
        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            {isLoading && (
              <div className="absolute inset-0 bg-navy animate-pulse rounded-t-lg" />
            )}
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              className={`object-cover w-full h-full group-hover:scale-105 transition-all duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setError(true);
                setIsLoading(false);
              }}
            />
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-navy rounded-t-lg">
                <p className="text-gray-400">Failed to load image</p>
              </div>
            )}
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
  );
};