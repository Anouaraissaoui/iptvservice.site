import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Subscription Plans & Pricing | Premium IPTV Service</title>
        <meta name="description" content="Choose from our flexible IPTV subscription plans starting at $11/month. All plans include 18,000+ channels, HD/4K quality, VOD content, multi-device support, and 24/7 customer service. 3-day money-back guarantee." />
        <meta name="keywords" content="IPTV subscription plans, IPTV pricing, buy IPTV subscription, IPTV packages, cheap IPTV service" />
        <link rel="canonical" href="https://iptvservice.site/pricing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "IPTV Subscription Plans",
            "description": "Premium IPTV subscription plans with 18,000+ channels",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "11",
              "highPrice": "90",
              "priceCurrency": "USD",
              "offerCount": "4"
            }
          })}
        </script>
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="pt-20">
          <PricingCards />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Pricing;
