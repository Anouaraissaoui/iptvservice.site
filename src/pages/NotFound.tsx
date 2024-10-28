import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found | 404 Error | Premium IPTV Service</title>
        <meta name="description" content="Sorry, the page you're looking for cannot be found. Browse our IPTV service features, pricing plans, or contact our 24/7 support team for assistance. Get back to streaming 18,000+ channels in HD/4K quality." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Page Not Found | 404 Error" />
        <meta property="og:description" content="Sorry, this page doesn't exist. Browse our IPTV features or contact support for help." />
        <meta property="og:url" content="https://www.iptvservice.site/404" />
        <link rel="canonical" href="https://www.iptvservice.site/404" />
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h1 className="text-7xl md:text-9xl font-bold text-primary">404</h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Oops! Page Not Found
              </h2>
              <p className="text-gray-400">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-navy"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
              <Button
                className="bg-primary text-navy hover:bg-primary/90"
                onClick={() => navigate('/')}
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default NotFound;
