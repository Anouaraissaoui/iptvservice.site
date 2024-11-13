import { Helmet } from "react-helmet-async";
import { SEOData } from "@/types/seo";
import { generateMetaInfo, generateStructuredData } from "@/utils/metaGenerator";

export const SEO = ({
  title,
  description,
  canonical = "/",
  ogImage,
  noindex = false,
  keywords,
  author,
  publishedTime,
  modifiedTime,
  type = "website",
  structuredData,
  alternates,
  breadcrumbs,
}: SEOData) => {
  const baseUrl = "https://www.iptvservice.site";
  const canonicalUrl = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;
  
  const metaInfo = generateMetaInfo({
    title,
    description,
    canonical: canonicalUrl,
    ogImage,
    keywords,
    author,
    publishedTime,
    modifiedTime,
    type
  });

  const schema = structuredData || generateStructuredData({
    title,
    description,
    canonical: canonicalUrl,
    ogImage,
    type,
    publishedTime,
    modifiedTime
  });

  return (
    <Helmet prioritizeSeoTags={true}>
      <title>{metaInfo.title}</title>
      {metaInfo.meta.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {metaInfo.link.map((link, index) => (
        <link key={index} {...link} />
      ))}
      
      {noindex && <meta name="robots" content="noindex,follow" />}
      
      {alternates && Object.entries(alternates).map(([lang, url]) => (
        <link key={lang} rel="alternate" href={`${baseUrl}${url}`} hrefLang={lang} />
      ))}

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};