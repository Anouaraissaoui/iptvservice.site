import { MessageCircle, Mail, Phone } from "lucide-react";

const ContactInfo = () => (
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
      <ContactMethod
        icon={<MessageCircle className="w-6 h-6" />}
        title="WhatsApp"
        description="Quick response via WhatsApp"
      />
      <ContactMethod
        icon={<Mail className="w-6 h-6" />}
        title="Email"
        description="support@iptvservice.site"
      />
      <ContactMethod
        icon={<Phone className="w-6 h-6" />}
        title="Phone"
        description="24/7 Support Line"
      />
    </div>
  </div>
);

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ContactMethod = ({ icon, title, description }: ContactMethodProps) => (
  <div className="flex items-center gap-4 text-gray-300">
    <div className="p-3 rounded-lg bg-primary/10 text-primary">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-white">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ContactInfo;