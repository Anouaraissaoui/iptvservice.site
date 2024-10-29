import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();

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
  );
};