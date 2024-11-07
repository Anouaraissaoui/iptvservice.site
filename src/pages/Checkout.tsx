import { Helmet } from "react-helmet-async";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  cardNumber: z.string().regex(/^\d{16}$/, "Invalid card number"),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, "Invalid expiry date (MM/YY)"),
  cvv: z.string().regex(/^\d{3,4}$/, "Invalid CVV"),
});

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlan = location.state?.plan;

  if (!selectedPlan) {
    navigate('/pricing');
    return null;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Here you would typically process the payment and create the order
      console.log("Form submitted:", values);
      toast.success("Order placed successfully!");
      navigate('/');
    } catch (error) {
      toast.error("Failed to process order. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Checkout | IPTV Service</title>
        <meta
          name="description"
          content="Complete your IPTV subscription purchase securely."
        />
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-navy-light/80 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
            
            <div className="mb-8 p-4 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
              <div className="flex justify-between items-center text-gray-300 mb-2">
                <span>Plan Duration:</span>
                <span>{selectedPlan.duration}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300 mb-2">
                <span>Price:</span>
                <span>${selectedPlan.price}{selectedPlan.period}</span>
              </div>
              <div className="border-t border-white/10 mt-4 pt-4">
                <div className="flex justify-between items-center text-white">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">${selectedPlan.price}</span>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123 Main St, City, Country"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1234 5678 9012 3456"
                          maxLength={16}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" maxLength={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="123"
                            maxLength={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Place Order
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Checkout;