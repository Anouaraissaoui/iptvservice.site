import { Helmet } from "react-helmet-async";
import Navbar from "@/components/fr/Navbar";
import Footer from "@/components/fr/Footer";

const Blog = () => {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Blog IPTV | Actualités et Guides sur le Streaming TV 2024</title>
        <meta name="description" content="Découvrez les dernières actualités, guides et conseils sur l'IPTV. Restez informé des nouvelles fonctionnalités, mises à jour des chaînes et des meilleures pratiques pour optimiser votre expérience de streaming." />
        <meta name="keywords" content="blog IPTV, actualités IPTV, guides IPTV, conseils streaming, IPTV France, tutoriels IPTV, streaming TV" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="Blog IPTV - Actualités et Guides 2024" />
        <meta property="og:description" content="Explorez nos guides experts IPTV et conseils de streaming. Restez à jour avec les dernières technologies IPTV!" />
        <meta property="og:url" content="https://www.iptvservice.site/fr/blog" />
        <meta property="og:site_name" content="Service IPTV Premium" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://ideogram.ai/assets/progressive-image/balanced/response/C55t2k-_Qr-ZTxrcVHRZDA" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Blog IPTV Premium - Actualités et Guides" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog IPTV - Actualités et Guides 2024" />
        <meta name="twitter:description" content="Guides experts IPTV et conseils de streaming. Restez informé des dernières nouveautés!" />
        <meta name="twitter:image" content="https://ideogram.ai/assets/progressive-image/balanced/response/C55t2k-_Qr-ZTxrcVHRZDA" />
        <meta name="twitter:image:alt" content="Blog IPTV Premium" />
        <link rel="canonical" href="https://www.iptvservice.site/fr/blog" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr/blog" />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iptvservice.site/blog" />
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Blog IPTV
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Contenu à venir prochainement...
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Blog;