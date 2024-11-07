import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<{ name: string; price: number } | null>(null);

  useEffect(() => {
    const planData = location.state?.plan;
    if (!planData) {
      navigate("/pricing");
      return;
    }
    setPlan(planData);
  }, [location.state, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!plan) return;

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please sign in to complete your purchase",
          variant: "destructive",
        });
        navigate("/login");
        return;
      }

      const { error } = await supabase
        .from('orders')
        .insert([
          {
            user_id: user.id,
            plan_name: plan.name,
            price: plan.price,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      toast({
        title: "Order placed successfully",
        description: "You will be redirected to complete the payment",
      });

      // Here you would typically redirect to a payment processor
      // For now, we'll just redirect to a success page
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      toast({
        title: "Error processing order",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!plan) return null;

  return (
    <>
      <Helmet>
        <title>Checkout - IPTV Service</title>
        <meta name="description" content="Complete your IPTV subscription purchase" />
      </Helmet>
      
      <div className="min-h-screen bg-navy py-20 px-4">
        <div className="max-w-md mx-auto">
          <Card className="p-6 bg-navy-light/80 border-white/10">
            <h1 className="text-2xl font-bold text-white mb-6">Checkout</h1>
            
            <div className="mb-6 p-4 rounded-lg bg-white/5">
              <h2 className="text-lg font-semibold text-white mb-2">{plan.name}</h2>
              <p className="text-2xl font-bold text-primary">${plan.price}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input
                  id="name"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="card" className="text-white">Card Number</Label>
                <Input
                  id="card"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Enter card number"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry" className="text-white">Expiry Date</Label>
                  <Input
                    id="expiry"
                    required
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <Label htmlFor="cvc" className="text-white">CVC</Label>
                  <Input
                    id="cvc"
                    required
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="Enter CVC"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay $${plan.price}`
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Checkout;
