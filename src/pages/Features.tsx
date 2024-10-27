import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Features & Benefits | Premium Streaming Service</title>
        <meta name="description" content="Explore our premium IPTV features: 18,000+ channels worldwide, HD/4K streaming, catch-up TV, multi-device support, EPG guide, and VOD library. Experience seamless streaming with 99.9% server uptime and anti-freeze technology." />
        <meta name="keywords" content="IPTV features, IPTV benefits, streaming quality, VOD content, live TV channels" />
        <link rel="canonical" href="https://iptvservice.site/features" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "18,000+ Live Channels",
                "description": "Access to over 18,000 live TV channels worldwide"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "HD/4K Quality",
                "description": "Crystal clear streaming quality in HD and 4K"
              }
            ]
          })}
        </script>
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
