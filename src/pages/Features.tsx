import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Features & Benefits 2024 | Premium Streaming Service</title>
        <meta name="description" content="Explore our premium IPTV features: 18,000+ channels worldwide, HD/4K streaming, catch-up TV, multi-device support, EPG guide, and extensive VOD library. Experience seamless streaming with 99.9% server uptime and anti-freeze technology." />
        <meta name="keywords" content="IPTV features, IPTV benefits, streaming quality, VOD content, live TV channels, HD IPTV, 4K streaming, EPG guide" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Premium IPTV Features & Benefits 2024" />
        <meta property="og:description" content="Discover our advanced IPTV features: 18,000+ channels, HD/4K quality, catch-up TV, EPG, VOD library, and more!" />
        <meta property="og:url" content="https://www.iptvservice.site/features" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium IPTV Features & Benefits 2024" />
        <meta name="twitter:description" content="Experience next-level streaming with our premium IPTV features. HD/4K quality, 18,000+ channels, and more!" />
        <link rel="canonical" href="https://www.iptvservice.site/features" />
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
