import { QueryClient } from "@tanstack/react-query";

export const getQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
});

export const prefetchData = async (queryClient: QueryClient) => {
  await Promise.all([
    // Prefetch blog posts
    queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: async () => {
        const response = await fetch(
          "https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&per_page=9"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      },
    })
  ]);

  return queryClient;
};