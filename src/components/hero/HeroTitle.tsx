import { memo } from "react";

const HeroTitle = memo(() => {
  return (
    <h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
      itemProp="headline"
    >
      Experience The Best{" "}
      <span className="text-primary relative inline-block">
        IPTV Service Provider
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
      </span>{" "}
      Today!
      <br />
      <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
        Trusted by 50,000+ Users
      </span>
    </h1>
  );
});

HeroTitle.displayName = "HeroTitle";

export default HeroTitle;