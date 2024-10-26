import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-navy">
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
            <form className="space-y-6">
              <div className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-navy border-white/10 text-white placeholder:text-gray-500"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-navy border-white/10 text-white placeholder:text-gray-500"
                />
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-navy border-white/10 text-white placeholder:text-gray-500 min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-primary text-navy hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;