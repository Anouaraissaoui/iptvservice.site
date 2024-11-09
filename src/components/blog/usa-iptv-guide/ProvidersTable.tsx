import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Provider {
  name: string;
  channels: string;
  devices: string;
  features: string;
  pricing: string;
}

export const ProvidersTable = ({ providers }: { providers: Provider[] }) => (
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