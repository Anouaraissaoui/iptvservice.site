import { Helmet } from 'react-helmet-async';
import { SEOConfig } from '@/types/seo';
import { createSEO } from '@/utils/seo';

export const SEO = (props: SEOConfig) => {
  const seo = createSEO(props);

  return (
    <Helmet>
      <title>{seo.title}</title>
      {seo.metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}
      
      {seo.alternateLanguages && 
        Object.entries(seo.alternateLanguages).map(([lang, url]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))
      }
      
      {Object.values(seo.structuredData).map((data, index) => 
        Object.keys(data).length > 0 && (
          <script key={index} type="application/ld+json">
            {JSON.stringify(data)}
          </script>
        )
      )}
    </Helmet>
  );
};