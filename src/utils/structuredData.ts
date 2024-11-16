interface StructuredDataProps {
  title: string;
  description: string;
  canonical: string;
  type: 'website' | 'article' | 'product';
}

export const generateStructuredData = ({
  title,
  description,
  canonical,
  type
}: StructuredDataProps) => ({
  "@context": "https://schema.org",
  "@type": type,
  "@id": `${canonical}#content`,
  "url": canonical,
  "name": title,
  "description": description,
  "publisher": {
    "@type": "Organization",
    "name": "IPTV Service",
    "@id": "https://www.iptvservice.site/#organization"
  }
});