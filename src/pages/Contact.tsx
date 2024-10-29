import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.iptvservice.site/contact/#webpage",
        "url": "https://www.iptvservice.site/contact",
        "name": "24/7 IPTV Support & Customer Service",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Get instant support for your IPTV service. Our 24/7 customer support team provides technical assistance and setup guidance.",
        "breadcrumb": { "@id": "https://www.iptvservice.site/contact/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.iptvservice.site/contact/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "https://www.iptvservice.site",
              "url": "https://www.iptvservice.site",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebPage",
              "@id": "https://www.iptvservice.site/contact",
              "url": "https://www.iptvservice.site/contact",
              "name": "Contact"
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.iptvservice.site/contact/#organization",
        "name": "Premium IPTV Service",
        "url": "https://www.iptvservice.site",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-234-567-8900",
          "contactType": "customer service",
          "availableLanguage": ["English"],
          "contactOption": "TollFree",
          "areaServed": "Worldwide"
        }
      }
    ]
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form) as any).toString(),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>24/7 IPTV Support & Customer Service | Premium IPTV Help</title>
        <meta name="description" content="Get instant support for your IPTV service. Our 24/7 customer support team provides technical assistance, subscription help, and setup guidance. Reach us via live chat, WhatsApp, or email." />
        <meta name="keywords" content="IPTV support, IPTV customer service, IPTV help, IPTV technical support, IPTV setup help, contact IPTV service 2024" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="IPTV Service" />
        
        <link rel="canonical" href="https://www.iptvservice.site/contact" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="24/7 IPTV Customer Support & Technical Help 2024" />
        <meta property="og:description" content="Need help? Our 24/7 support team is ready to assist with technical issues, subscription inquiries, and setup guidance." />
        <meta property="og:url" content="https://www.iptvservice.site/contact" />
        <meta property="og:site_name" content="IPTV Service" />
        <meta property="og:image" content="https://www.iptvservice.site/contact-support.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iptvservice" />
        <meta name="twitter:title" content="24/7 IPTV Support & Customer Service" />
        <meta name="twitter:description" content="Get instant IPTV support via live chat, WhatsApp, or email. Available 24/7!" />
        <meta name="twitter:image" content="https://www.iptvservice.site/contact-support.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Get in <span className="text-primary">Touch</span>
                </h1>
                <p className="text-gray-400 text-lg">
                  Have questions about our IPTV service? We're here to help 24/7.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">WhatsApp</h3>
                    <p>Quick response via WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p>support@iptvservice.site</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p>24/7 Support Line</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-light/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              {/* Hidden form for Netlify form detection */}
              <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
              </form>
              
              {/* Actual form */}
              <form 
                name="contact" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <div className="space-y-4">
                  <Input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="bg-navy border-white/10 text-white placeholder:text-gray-500"
                  />
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    required
                    className="bg-navy border-white/10 text-white placeholder:text-gray-500"
                  />
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    required
                    className="bg-navy border-white/10 text-white placeholder:text-gray-500 min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-navy hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
