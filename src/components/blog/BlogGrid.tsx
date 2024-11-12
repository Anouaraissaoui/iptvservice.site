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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
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
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};
