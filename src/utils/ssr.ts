import { QueryClient } from "@tanstack/react-query";
import { BlogPost } from "@/types/components";
import { ApiResponse, QueryConfig } from "@/types/api";
import { PreloadResource } from "@/types/seo";

export const getQueryClient = (config?: QueryConfig): QueryClient => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: config?.staleTime || 1000 * 60 * 5,
      refetchOnWindowFocus: config?.refetchOnWindowFocus || false,
      refetchOnMount: config?.refetchOnMount || false,
      suspense: true // Enable suspense mode for SSR
    }
  }
});

export const prefetchData = async (queryClient: QueryClient): Promise<QueryClient> => {
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: async (): Promise<ApiResponse<BlogPost[]>> => {
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

export const generatePreloadTags = (resources: PreloadResource[]): string => {
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

export const generateMetaTags = (url: string, title: string, description: string): string => {
  return `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${url}">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
  `;
};

export const generateSitemapXML = async (): Promise<string> => {
  const pages = await getAllPages();
  const currentDate = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>${page.changeFreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;
};

const getAllPages = async () => {
  // Implementation would depend on your content management system
  return [];
};