import { Helmet } from "react-helmet-async";
import Navbar from "@/components/fr/Navbar";
import Footer from "@/components/fr/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contactez-nous | Support IPTV 24/7</title>
        <meta name="description" content="Besoin d'aide ? Notre équipe de support est disponible 24/7 pour répondre à vos questions sur notre service IPTV. Contactez-nous pour une assistance rapide et professionnelle." />
        <meta name="keywords" content="contact IPTV, support IPTV, aide IPTV, assistance IPTV, service client IPTV" />
        <link rel="canonical" href="https://www.iptvservice.site/fr/contact" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr/contact" />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/contact" />
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contactez-nous
              </h1>
              <p className="text-gray-400">
                Notre équipe est disponible 24/7 pour vous aider
              </p>
            </div>
            
            <form className="space-y-6 bg-navy-light/50 p-8 rounded-2xl border border-white/10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white">Nom</label>
                <Input id="name" placeholder="Votre nom" className="bg-navy-light" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-white">Email</label>
                <Input id="email" type="email" placeholder="votre@email.com" className="bg-navy-light" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white">Message</label>
                <Textarea id="message" placeholder="Comment pouvons-nous vous aider ?" className="bg-navy-light min-h-[150px]" />
              </div>
              
              <Button className="w-full bg-primary text-navy hover:bg-primary/90">
                <MessageCircle className="mr-2 h-5 w-5" />
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;