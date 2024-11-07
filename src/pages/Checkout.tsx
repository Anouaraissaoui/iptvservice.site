import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulated payment processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Payment Successful",
        description: "Thank you for your purchase! You will receive an email confirmation shortly.",
      });
      
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: "Please try again or contact support if the problem persists.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Checkout - IPTV Service</title>
        <meta name="description" content="Complete your IPTV subscription purchase securely" />
      </Helmet>

      <div className="min-h-screen bg-navy py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-navy-light rounded-lg shadow-xl p-8 border border-white/10">
          <h1 className="text-2xl font-bold text-white mb-6">Checkout</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-navy border-white/10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="card">Card Number</Label>
              <Input
                id="card"
                type="text"
                placeholder="4242 4242 4242 4242"
                required
                className="bg-navy border-white/10"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  type="text"
                  placeholder="MM/YY"
                  required
                  className="bg-navy border-white/10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  type="text"
                  placeholder="123"
                  required
                  className="bg-navy border-white/10"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay Now"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;