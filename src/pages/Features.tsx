import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>IPTV Features & Benefits 2024 | Premium Streaming Service</title>
        <meta name="description" content="Explore our premium IPTV features: 18,000+ channels worldwide, HD/4K streaming, catch-up TV, multi-device support, EPG guide, and extensive VOD library. Experience seamless streaming with 99.9% server uptime." />
        <meta name="keywords" content="IPTV features, IPTV benefits, streaming quality, VOD content, live TV channels, HD IPTV, 4K streaming, EPG guide, multi-device" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium IPTV Features & Benefits 2024" />
        <meta property="og:description" content="Discover our advanced IPTV features: 18,000+ channels, HD/4K quality, catch-up TV, EPG, VOD library, and more!" />
        <meta property="og:url" content="https://www.iptvservice.site/features" />
        <meta property="og:site_name" content="Premium IPTV Service" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://ideogram.ai/assets/progressive-image/balanced/response/C55t2k-_Qr-ZTxrcVHRZDA" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Premium IPTV Features" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium IPTV Features & Benefits 2024" />
        <meta name="twitter:description" content="Experience next-level streaming with our premium IPTV features!" />
        <meta name="twitter:image" content="https://ideogram.ai/assets/progressive-image/balanced/response/C55t2k-_Qr-ZTxrcVHRZDA" />
        <meta name="twitter:image:alt" content="IPTV Features" />
        <link rel="canonical" href="https://www.iptvservice.site/features" />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/features" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr/features" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iptvservice.site/features" />
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="pt-20">
          <Benefits />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Features;