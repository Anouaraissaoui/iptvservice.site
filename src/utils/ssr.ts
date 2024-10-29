import { QueryClient } from "@tanstack/react-query";

export const getQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      suspense: true, // Enable suspense mode for automatic loading states
    }
  }
});

export const prefetchData = async (queryClient: QueryClient) => {
  try {
    await Promise.all([
      // Prefetch blog posts with a timeout
      Promise.race([
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
        }),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 5000)
        )
      ])
    ]);
  } catch (error) {
    console.error('Error prefetching data:', error);
    // Return empty data instead of failing
    return queryClient;
  }

  return queryClient;
};