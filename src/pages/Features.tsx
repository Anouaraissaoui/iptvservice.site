import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Features & Benefits | Premium Streaming Service</title>
        <meta name="description" content="Discover our IPTV service features: 18,000+ channels, HD/4K quality, VOD content, multi-device support, and 24/7 customer service. Experience premium streaming." />
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