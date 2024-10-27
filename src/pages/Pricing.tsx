import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Subscription Plans & Pricing 2024 | Premium IPTV Service</title>
        <meta name="description" content="Choose from our flexible IPTV subscription plans starting at $11/month. All plans include 18,000+ channels, HD/4K quality, VOD content, multi-device support, and 24/7 customer service. 24-hour money-back guarantee." />
        <meta name="keywords" content="IPTV subscription plans, IPTV pricing, buy IPTV subscription, IPTV packages, cheap IPTV service, IPTV deals, best IPTV plans" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="IPTV Subscription Plans & Pricing 2024 | From $11/month" />
        <meta property="og:description" content="Premium IPTV plans with 18,000+ channels, HD/4K quality, VOD content. 24/7 support and money-back guarantee included!" />
        <meta property="og:url" content="https://www.iptvservice.site/pricing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Subscription Plans & Pricing 2024" />
        <meta name="twitter:description" content="Get premium IPTV access from $11/month. 18,000+ channels, HD/4K quality, 24/7 support!" />
        <link rel="canonical" href="https://www.iptvservice.site/pricing" />
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