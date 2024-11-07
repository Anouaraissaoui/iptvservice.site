import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tv } from "lucide-react";

interface CountrySectionProps {
  name: string;
  channels: string;
  languages: string[];
  popular: string[];
  icon: string;
}

const CountrySection = ({ name, channels, languages, popular, icon }: CountrySectionProps) => {
  return (
    <Card className="bg-navy-light border-primary/20 hover:border-primary/40 transition-colors">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <div>
            <CardTitle className="text-white text-2xl">{name}</CardTitle>
            <CardDescription className="text-gray-400 flex items-center gap-2">
              <Tv className="w-4 h-4" />
              {channels} channels
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Badge key={lang} variant="secondary" className="bg-primary/10">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">Popular Channels</h3>
            <div className="grid grid-cols-2 gap-2">
              {popular.map((channel) => (
                <span key={channel} className="text-white text-sm">
                  {channel}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountrySection;