import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent",
          description: "We'll get back to you as soon as possible.",
        });
        e.currentTarget.reset();
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
    <div className="bg-navy-light/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
      <form 
        onSubmit={handleSubmit}
        className="space-y-6"
      >
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
  );
};

export default ContactForm;