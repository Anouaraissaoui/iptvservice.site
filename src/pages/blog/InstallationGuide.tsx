import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const InstallationGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Install IPTV on Firestick, Android, and Apple TV",
    "description": "Complete guide for installing IPTV on Firestick, Android devices, and Apple TV. Step-by-step instructions for easy setup and configuration.",
    "image": "https://www.iptvservice.site/images/IPTV-troubleshooting.webp",
    "author": {
      "@type": "Organization",
      "name": "IPTV Service"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iptvservice.site/logo.svg"
      }
    },
    "datePublished": "2024-02-26",
    "dateModified": new Date().toISOString()
  };

  return (
    <>
      <SEO
        title="How to Install IPTV on Firestick, Android, and Apple TV | Complete Guide 2024"
        description="Learn how to install IPTV on Firestick, Android devices, and Apple TV with our comprehensive guide. Step-by-step instructions for easy setup and configuration."
        canonical="https://www.iptvservice.site/blog/installation-guide/"
        type="article"
        structuredData={structuredData}
        keywords="IPTV installation, Firestick IPTV setup, Android IPTV guide, Apple TV IPTV, IPTV apps, IPTV configuration, streaming setup, IPTV Smarters, TiviMate, GSE Smart IPTV, M3U URL setup, Xtream codes"
      />
      
      <main className="min-h-screen bg-navy">
        <Navbar />
        
        <article className="container mx-auto px-4 py-24">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How to Install IPTV on{" "}
              <span className="text-primary">Different Devices</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Complete guide for setting up IPTV on Firestick, Android, and Apple TV. Need help? Check our{" "}
              <Link to="/troubleshooting" className="text-primary hover:underline">troubleshooting guide</Link> or{" "}
              <Link to="/contact" className="text-primary hover:underline">contact our support team</Link>.
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="bg-navy-light border border-white/10 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li>
                  <Link to="/features" className="text-primary hover:underline">View Available Channels</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-primary hover:underline">Compare Subscription Plans</Link>
                </li>
                <li>
                  <Link to="/blog/usa-iptv-guide" className="text-primary hover:underline">USA IPTV Guide</Link>
                </li>
                <li>
                  <Link to="/free-trial" className="text-primary hover:underline">Try Our Free Trial</Link>
                </li>
              </ul>
            </div>

            <Tabs defaultValue="firestick" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="firestick">Firestick</TabsTrigger>
                <TabsTrigger value="android">Android</TabsTrigger>
                <TabsTrigger value="appletv">Apple TV</TabsTrigger>
              </TabsList>

              <TabsContent value="firestick">
                <Card className="bg-navy-light border-white/10">
                  <CardContent className="space-y-6 p-6">
                    <h2 className="text-2xl font-bold text-white">Installing IPTV on Firestick</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Step 1: Enable Apps from Unknown Sources</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>Go to the Firestick Home Screen</li>
                          <li>Navigate to Settings {'->'} My Fire TV {'->'} Developer Options</li>
                          <li>Enable Apps from Unknown Sources</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Step 2: Install Downloader App</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>From the Home Screen, search for "Downloader"</li>
                          <li>Select and download the Downloader app</li>
                          <li>Open the Downloader app</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Step 3: Download and Install IPTV App</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>Enter the URL of your preferred IPTV app</li>
                          <li>Download and install the APK file</li>
                          <li>Launch the IPTV app</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="android">
                <Card className="bg-navy-light border-white/10">
                  <CardContent className="space-y-6 p-6">
                    <h2 className="text-2xl font-bold text-white">Installing IPTV on Android</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Step 1: Enable Unknown Sources</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>Go to Settings {'->'} Security</li>
                          <li>Enable Unknown Sources option</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Step 2: Download IPTV App</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>Open your web browser</li>
                          <li>Download your preferred IPTV app APK</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Step 3: Install and Setup</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>Locate and install the downloaded APK</li>
                          <li>Open the app and enter your service credentials</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appletv">
                <Card className="bg-navy-light border-white/10">
                  <CardContent className="space-y-6 p-6">
                    <h2 className="text-2xl font-bold text-white">Installing IPTV on Apple TV</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Step 1: Install IPTV App</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>Open the Apple App Store</li>
                          <li>Search for IPTV apps</li>
                          <li>Download and install your preferred app</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Step 2: Configure the App</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>Launch the installed IPTV app</li>
                          <li>Enter your M3U URL or credentials</li>
                          <li>Start streaming your channels</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <div className="mt-8 p-6 bg-navy-light border border-white/10 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-gray-400 mb-4">
                  Now that you know how to set up IPTV on your device, get access to our premium channels and content.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/pricing" 
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    View Plans
                  </Link>
                  <Link 
                    to="/free-trial" 
                    className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </Tabs>

            <section className="mt-16 space-y-8">
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="grid gap-6">
                <Card className="bg-navy-light border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">What is IPTV?</h3>
                    <p className="text-gray-300">
                      IPTV (Internet Protocol Television) is a digital television broadcasting protocol that uses the internet to deliver TV programs and videos, either live or on-demand.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-navy-light border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">Is IPTV legal?</h3>
                    <p className="text-gray-300">
                      Yes, IPTV is legal when using authorized service providers with proper licensing for content distribution.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-navy-light border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">Can I use IPTV on multiple devices?</h3>
                    <p className="text-gray-300">
                      Yes, most IPTV services allow multiple device connections. Check your subscription plan for specific device limits.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </article>
        
        <Footer />
      </main>
    </>
  );
};

export default InstallationGuide;
