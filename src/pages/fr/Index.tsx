import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Skeleton } from "@/components/ui/skeleton";

const Stats = lazy(() => import("@/components/Stats"));
const PricingCards = lazy(() => import("@/components/PricingCards"));
const Benefits = lazy(() => import("@/components/Benefits"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="w-full space-y-4 p-8">
    <Skeleton className="h-8 w-3/4 mx-auto" />
    <Skeleton className="h-4 w-1/2 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  </div>
);

const FrenchIndex = () => {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Service IPTV | Meilleur Abonnement IPTV France et International</title>
        <meta name="description" content="Achetez un abonnement IPTV avec plus de 18 000 chaînes en direct, VOD HD/4K et sports. Service IPTV premium avec 99,9% de disponibilité, activation instantanée et support 24/7." />
        <meta name="keywords" content="acheter IPTV, service IPTV, meilleur service IPTV, abonnement IPTV, acheter IPTV France, IPTV acheter, meilleur achat IPTV" />
        <meta property="og:title" content="Service IPTV Premium 2024 | Meilleure Expérience de Streaming" />
        <meta property="og:description" content="Accédez à plus de 18 000 chaînes en direct, VOD et sports. IPTV premium avec qualité HD/4K, activation instantanée et support 24/7. Essai sans risque avec garantie satisfait ou remboursé!" />
        <meta property="og:url" content="https://www.iptvservice.site/fr/" />
        <meta name="twitter:title" content="Service IPTV Premium 2024 | France" />
        <meta name="twitter:description" content="Plus de 18 000 chaînes, qualité HD/4K, activation instantanée et support 24/7. Essayez sans risque avec notre garantie!" />
        <link rel="canonical" href="https://www.iptvservice.site/fr/" />
        <link rel="alternate" hreflang="fr" href="https://www.iptvservice.site/fr/" />
        <link rel="alternate" hreflang="en" href="https://www.iptvservice.site/" />
        <link rel="alternate" hreflang="es" href="https://www.iptvservice.site/es/" />
        <link rel="alternate" hreflang="ar" href="https://www.iptvservice.site/ar/" />
        <link rel="alternate" hreflang="x-default" href="https://www.iptvservice.site/" />
      </Helmet>
      <div className="min-h-screen bg-navy">
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PricingCards />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default FrenchIndex;