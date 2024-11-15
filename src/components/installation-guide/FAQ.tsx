import { Card, CardContent } from "@/components/ui/card";

export const FAQ = () => {
  return (
    <section className="mt-16 space-y-8">
      <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
      <div className="grid gap-6">
        <Card className="bg-navy-light border-white/10">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">What is IPTV?</h3>
            <p className="text-gray-300">
              IPTV (Internet Protocol Television) is a digital television broadcasting protocol that uses the internet to deliver TV programs and videos, either live or on-demand.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-navy-light border-white/10">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Is IPTV legal?</h3>
            <p className="text-gray-300">
              Yes, IPTV is legal when using authorized service providers with proper licensing for content distribution.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-navy-light border-white/10">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Can I use IPTV on multiple devices?</h3>
            <p className="text-gray-300">
              Yes, most IPTV services allow multiple device connections. Check your subscription plan for specific device limits.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};