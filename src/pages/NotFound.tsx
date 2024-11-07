import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    // Set HTTP status code to 404
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
        <main className="flex-grow flex items-center justify-center px-4 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">404</h1>
            <p className="text-xl md:text-2xl text-gray-400">Page not found</p>
            <p className="text-gray-500 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="mt-8">
              <Link to="/" className="inline-flex items-center gap-2">
                <HomeIcon className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;