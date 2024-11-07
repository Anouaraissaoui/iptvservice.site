import { SEO } from "./SEO";
import { useLocation } from "react-router-dom";

interface LocalizedPageProps {
  country: string;
  languageCode: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const LocalizedPage = ({
  country,
  languageCode,
  title,
  description,
  children
}: LocalizedPageProps) => {
  const location = useLocation();
  
  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={`https://www.iptvservice.site${location.pathname}`}
        alternates={{
          "x-default": "/",
          "en": "/",
          "fr": "/fr",
          "de": "/de",
          "es": "/es",
          "en-GB": "/uk"
        }}
      />
      <html lang={languageCode}>
        {children}
      </html>
    </>
  );
};