import { Card } from "@/components/ui/card";

export const WhatIsIptv = () => {
  return (
    <section className="mb-16 animate-fade-in">
      <Card className="bg-navy-light/50 border border-white/10 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4">What is IPTV?</h2>
        <p className="text-gray-400">
          IPTV (Internet Protocol Television) delivers television content over the internet, 
          unlike traditional broadcast or cable TV services. Through IPTV, viewers can access:
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
          <li>Live TV channels from around the world</li>
          <li>On-demand movies and TV shows</li>
          <li>Time-shifted media and catch-up TV</li>
          <li>Interactive features and program guides</li>
        </ul>
      </Card>
    </section>
  );
};