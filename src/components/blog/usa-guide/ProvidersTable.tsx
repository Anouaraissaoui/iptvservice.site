import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

export const ProvidersTable = () => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-navy-light/50 hover:bg-navy-light/70">
            <TableHead className="text-white">IPTV Provider</TableHead>
            <TableHead className="text-white">Channels</TableHead>
            <TableHead className="text-white">Supported Devices</TableHead>
            <TableHead className="text-white">Key Features</TableHead>
            <TableHead className="text-white">Pricing</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {providers.map((provider) => (
            <TableRow key={provider.name} className="bg-navy-light/30 hover:bg-navy-light/50">
              <TableCell className="font-medium text-white">{provider.name}</TableCell>
              <TableCell className="text-gray-300">{provider.channels}</TableCell>
              <TableCell className="text-gray-300">{provider.devices}</TableCell>
              <TableCell className="text-gray-300">{provider.features}</TableCell>
              <TableCell className="text-gray-300">{provider.pricing}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};