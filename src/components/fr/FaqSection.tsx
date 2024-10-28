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
      question: "Quels appareils sont compatibles avec votre service IPTV?",
      answer: "Notre service IPTV est compatible avec les Smart TV (Samsung, LG, Android TV), les appareils mobiles (iOS/Android), les appareils de streaming (Amazon Fire Stick, Roku, Apple TV) et les box MAG. Vous pouvez regarder sur n'importe quel appareil avec une connexion internet.",
      id: "devices-compatibility"
    },
    {
      question: "Proposez-vous un support client?",
      answer: "Oui, nous fournissons un support client 24/7 via chat en direct, WhatsApp et email. Notre équipe technique est toujours prête à vous aider pour la configuration, le dépannage ou toute question que vous pourriez avoir.",
      id: "customer-support"
    },
    {
      question: "Quelles chaînes sont incluses dans l'abonnement?",
      answer: "Notre service comprend plus de 18 000 chaînes du monde entier, incluant sports, films, actualités, divertissement et programmes pour enfants. Nous mettons régulièrement à jour notre liste de chaînes pour garantir le meilleur contenu.",
      id: "channel-list"
    },
    {
      question: "Y a-t-il une garantie de remboursement?",
      answer: "Oui, nous offrons une garantie de satisfaction à 100%. Si vous n'êtes pas entièrement satisfait de notre service dans les premières 24 heures, nous vous rembourserons intégralement.",
      id: "money-back-guarantee"
    }
  ];

  return (
    <div className="py-24 bg-navy relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container mx-auto max-w-3xl relative">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-xl text-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white">Des Questions?</span>
          </span>
          
          <h2 
            id="faq-section"
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Questions{" "}
            <span className="text-primary relative inline-block">
              Fréquentes
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-xl mx-auto">
            Trouvez les réponses aux questions courantes sur notre service IPTV
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/0 to-primary/5 rounded-3xl blur-xl" />
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                id={faq.id}
                data-fraggle={faq.id}
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