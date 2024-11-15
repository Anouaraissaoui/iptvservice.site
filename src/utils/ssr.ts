import { QueryClient } from "@tanstack/react-query";
import { BlogPost } from "@/types/components";
import { ApiResponse, QueryConfig } from "@/types/api";

export const getQueryClient = (config?: QueryConfig): QueryClient => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: config?.staleTime || 1000 * 60 * 5, // 5 minutes stale time
      gcTime: config?.gcTime || 1000 * 60 * 30, // 30 minutes cache time
      refetchOnWindowFocus: config?.refetchOnWindowFocus || false,
      refetchOnMount: config?.refetchOnMount || false,
      retry: 2,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      networkMode: 'offlineFirst'
    },
    mutations: {
      retry: 2,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      networkMode: 'offlineFirst'
    }
  }
});

export const prefetchData = async (queryClient: QueryClient): Promise<QueryClient> => {
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: async (): Promise<ApiResponse<BlogPost[]>> => {
        const cachedData = queryClient.getQueryData<ApiResponse<BlogPost[]>>(["posts"]);
        const response = await fetch(
          "https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&per_page=9",
          {
            headers: {
              'Cache-Control': 'max-age=3600',
              'If-None-Match': cachedData?.etag || ''
            }
          }
        );
        
        if (response.status === 304 && cachedData) {
          return cachedData;
        }
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        return {
          data,
          status: response.status,
          etag: response.headers.get('ETag') || undefined
        };
      }
    })
  ]);

  return queryClient;
};

export const generatePreloadTags = (resources: Array<{ href: string; as: string; type?: string; crossOrigin?: boolean }> = []) => {
  return resources
    .map(({ href, as, type, crossOrigin }) => {
      let tag = `<link rel="preload" href="${href}" as="${as}"`;
      if (type) tag += ` type="${type}"`;
      if (crossOrigin) tag += ` crossorigin`;
      tag += '>';
      return tag;
    })
    .join('\n');
};

export const generateMetaTags = (url: string, title: string, description: string, lastModified?: string) => {
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large">`,
    `<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large">`,
    `<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large">`
  ];

  if (lastModified) {
    tags.push(`<meta property="article:modified_time" content="${lastModified}">`);
    tags.push(`<meta http-equiv="last-modified" content="${lastModified}">`);
  }

  return tags.join('\n');
};
