import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeft } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'status';
    meta.content = '404';
    document.head.appendChild(meta);
  }, []);

  return (
    <>
      <Helmet>
        <title>404: Page Not Found | IPTV Service</title>
        <meta name="robots" content="noindex,follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "404 - Page Not Found",
            "description": "The requested page could not be found.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.iptvservice.site"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "404 Not Found",
                  "item": "https://www.iptvservice.site/404"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-navy flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
          {/* Background Grid Animation */}
          <div 
            className="absolute inset-0 bg-grid-white bg-[size:50px_50px] opacity-[0.2]"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, 20%, white, 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, 20%, white, 80%, transparent)'
            }}
          />
          <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] opacity-[0.2] animate-grid" />

          {/* Content */}
          <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto bg-navy-light/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Page not found</h2>
              <p className="text-gray-400 max-w-md mx-auto text-base md:text-lg">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/" className="inline-flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto">
                <Link to="/" className="inline-flex items-center gap-2">
                  <HomeIcon className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;