import { Helmet } from "react-helmet-async";
import { SEOProps, getMetaTags, getStructuredData } from "@/utils/seo";

export const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  noindex,
  keywords,
  structuredData,
}: SEOProps) => {
  const metaTags = getMetaTags({
    title,
    description,
    canonical,
    ogImage,
    noindex,
    keywords,
  });

  return (
    <Helmet>
      <title>{title}</title>
      {metaTags.map((tag, index) => {
        const TagName = tag.rel ? "link" : "meta";
        return <TagName key={index} {...tag} />;
      })}
      {structuredData && (
        <script type="application/ld+json">
          {getStructuredData(structuredData)}
        </script>
      )}
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
    </Helmet>
  );
};