import { BlogCard } from "./BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BlogPost } from "@/types/components";

interface BlogGridProps {
  posts?: BlogPost[];
  isLoading: boolean;
}

export const BlogGrid = ({ posts, isLoading }: BlogGridProps): JSX.Element => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="bg-navy-light border-white/10">
            <CardHeader>
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4 mt-4" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!posts?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
      {posts.map((post, index) => (
        <div 
          key={post.id}
          className="opacity-0 animate-[fade-in_0.5s_ease-in-out_forwards]"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
};