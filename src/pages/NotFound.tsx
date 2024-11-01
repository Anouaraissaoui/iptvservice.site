import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Report 404s to analytics
  useEffect(() => {
    // Send 404 data to analytics
    const reportTo = "https://www.iptvservice.site/api/analytics/404";
    fetch(reportTo, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: location.pathname,
        timestamp: new Date().toISOString(),
        referrer: document.referrer
      })
    }).catch(() => {
      // Silently fail if analytics reporting fails
    });
  }, [location.pathname]);

  const suggestedPages = [
    { name: "Pricing Plans", path: "/pricing" },
    { name: "Features", path: "/features" },
    { name: "Contact Support", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found | Error 404 | Premium IPTV Service</title>
        <meta name="description" content="Sorry, the page you're looking for cannot be found. Browse our IPTV service features, pricing plans, or contact our 24/7 support team for assistance." />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://www.iptvservice.site/404" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Page Not Found | 404 Error" />
        <meta property="og:description" content="Sorry, this page doesn't exist. Browse our IPTV features or contact support for help." />
        <meta property="og:url" content="https://www.iptvservice.site/404" />
        
        {/* Additional HTTP Headers */}
        <meta httpEquiv="Status" content="404 Not Found" />
      </Helmet>

      <main className="min-h-screen bg-navy">
        <Navbar />
        <section aria-labelledby="error-heading" className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h1 id="error-heading" className="text-7xl md:text-9xl font-bold text-primary">404</h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Oops! Page Not Found
              </h2>
              <p className="text-gray-400">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
              </p>
            </div>
            
            {/* Suggested Pages */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-4">Popular Pages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                {suggestedPages.map((page) => (
                  <Button
                    key={page.path}
                    variant="outline"
                    className="w-full border-primary/20 hover:border-primary text-primary hover:text-primary"
                    onClick={() => navigate(page.path)}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    {page.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
        </section>
        <Footer />
      </main>
    </>
  );
};

export default NotFound;