import { memo } from "react";

const HeroTitle = memo(() => (
  <h1 
    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
    itemProp="headline"
  >
    Experience Premium{" "}
    <span className="text-primary relative inline-block">
      IPTV Service
      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
    </span>
    {" "}with 18,000+ Channels
  </h1>
));

HeroTitle.displayName = "HeroTitle";

export default HeroTitle;