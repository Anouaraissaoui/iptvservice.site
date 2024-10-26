import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FaqSection = () => {
  const faqs = [
    {
      question: "What devices are compatible with your IPTV service?",
      answer: "Our IPTV service is compatible with a wide range of devices, including Smart TVs, Android and iOS devices, as well as streaming devices like Amazon Fire Stick and Roku."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support to help with any issues or questions you may have."
    },
    {
      question: "Is there a trial period available?",
      answer: "Yes, we offer a free trial so you can test our IPTV service before purchasing a subscription."
    },
    {
      question: "Can I become a reseller of your IPTV services?",
      answer: "Absolutely! Join our IPTV reseller program and start earning profits by selling subscriptions to others."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-navy relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container mx-auto max-w-3xl px-4 relative">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-2 backdrop-blur-xl text-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white">Got Questions?</span>
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight px-4">
            Frequently Asked{" "}
            <span className="text-primary relative inline-block">
              Questions
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-xl mx-auto px-4">
            Find answers to common questions about our IPTV service
          </p>
        </div>

        <div className="relative px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/0 to-primary/5 rounded-3xl blur-xl" />
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="group data-[state=open]:bg-white/5 bg-navy-light/50 border border-white/10 rounded-xl px-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
              >
                <AccordionTrigger className="py-6 text-white group-hover:text-primary transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-data-[state=open]:bg-primary/20 transition-colors">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-left">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 pt-2 pl-14">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
