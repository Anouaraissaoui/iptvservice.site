import { QueryClient } from "@tanstack/react-query";

export const prefetchBlogPosts = async () => {
  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
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
  });

  return queryClient;
};

export const dehydrate = (queryClient: QueryClient) => {
  return queryClient.getQueryData(["posts"]);
};