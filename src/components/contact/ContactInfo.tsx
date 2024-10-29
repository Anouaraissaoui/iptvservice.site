import { MessageCircle, Mail, Phone } from "lucide-react";

export const ContactInfo = () => {
  return (
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
  );
};