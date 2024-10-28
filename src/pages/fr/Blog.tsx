import { Helmet } from "react-helmet-async";
import Navbar from "@/components/fr/Navbar";
import Footer from "@/components/fr/Footer";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog Service IPTV | Actualités et Guides sur le Streaming TV</title>
        <meta name="description" content="Découvrez les dernières actualités, guides et conseils sur l'IPTV. Restez informé des nouvelles fonctionnalités et des meilleures pratiques pour profiter de votre service IPTV." />
        <meta name="keywords" content="blog IPTV, actualités IPTV, guides IPTV, conseils streaming, IPTV France" />
        <link rel="canonical" href="https://www.iptvservice.site/fr/blog" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr/blog" />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/blog" />
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Blog Service IPTV
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