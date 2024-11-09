import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const UsaIptvGuide = () => {
  const providers = [
    {
      name: "IFLEX IPTV",
      channels: "28,000+",
      devices: "Android, iOS, Firestick, Smart TVs",
      features: "4K quality, VOD, Multi-device",
      pricing: "Starts at $34.99/3 months"
    },
    {
      name: "CalmaHUB",
      channels: "20,000+",
      devices: "Fire TV, Apple TV, Android, Windows",
      features: "Multi-screen, on-demand",
      pricing: "Starts at £24.99/3 months"
    },
    {
      name: "FLOKI TV",
      channels: "65,000+",
      devices: "Android, Firestick, Windows, iOS",
      features: "VOD in 4K, HD quality",
      pricing: "$38.13/3 months"
    },
    {
      name: "Fubo IPTV",
      channels: "22,000+",
      devices: "TV box, smartphone, tablet",
      features: "Variety of live content",
      pricing: "$10.99/month"
    },
    {
      name: "Sync IPTV",
      channels: "32,000+",
      devices: "Smart TVs, Firestick, Android",
      features: "150,000 VOD, HD & 4K quality",
      pricing: "$34.99/3 months"
    }
  ];

  const faqs = [
    {
      question: "Which IPTV services are legal in the USA?",
      answer: "IPTV itself is not illegal. The legality depends on whether the IPTV service has proper licensing agreements. Services with apps in major app stores are generally considered legal."
    },
    {
      question: "Do I need a VPN for IPTV in the USA?",
      answer: "A VPN isn't required if you're using a legitimate IPTV provider. However, it may add a layer of privacy or help access geo-restricted content."
    },
    {
      question: "How can I watch Indian TV channels legally in the USA?",
      answer: "Services like IFLEX and CalmaHUB offer Indian content. You can also explore apps from Indian broadcasters or services like Sling TV."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best USA IPTV Service Providers (2024): A Complete Guide</title>
        <meta name="description" content="Comprehensive guide to the best IPTV service providers in the USA for 2024. Compare features, pricing, and find the perfect streaming solution." />
      </Helmet>

      <div className="min-h-screen bg-navy">
        <Navbar />
        
        <main className="container mx-auto px-4 py-20 text-white">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8">Best USA IPTV Service Providers (2024): A Complete Guide</h1>
            
            <section className="mb-12">
              <p className="text-lg mb-6">
                In today's streaming-focused world, traditional cable TV is becoming a thing of the past. 
                Many in the USA are turning to IPTV (Internet Protocol Television) as an alternative that 
                offers a vast array of live TV channels, movies, and on-demand content.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What is IPTV?</h2>
              <Card className="p-6 bg-navy-light border-white/10">
                <p>
                  IPTV delivers television content over the internet, unlike traditional broadcast or cable 
                  TV services. Through IPTV, viewers can access live TV, on-demand content, and time-shifted 
                  media, often with more flexibility and at a lower cost than conventional options.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Top IPTV Service Providers in the USA for 2024</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>IPTV Provider</TableHead>
                      <TableHead>Channels</TableHead>
                      <TableHead>Supported Devices</TableHead>
                      <TableHead>Key Features</TableHead>
                      <TableHead>Pricing</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {providers.map((provider) => (
                      <TableRow key={provider.name}>
                        <TableCell className="font-medium">{provider.name}</TableCell>
                        <TableCell>{provider.channels}</TableCell>
                        <TableCell>{provider.devices}</TableCell>
                        <TableCell>{provider.features}</TableCell>
                        <TableCell>{provider.pricing}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Requirements for Optimal IPTV Performance</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>High-Speed Internet: Recommended speeds are 25 Mbps for HD and 75 Mbps or higher for 4K.</li>
                <li>Compatible Device: Use Smart TVs, streaming devices, or smartphones that support the IPTV app.</li>
                <li>Subscription: Most IPTV providers offer subscription-based access.</li>
                <li>VPN (Optional): While not necessary for legal IPTV, a VPN can enhance privacy.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UsaIptvGuide;