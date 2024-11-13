const HeroTitle = () => (
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Experience The Best </span>
    <span className="text-primary relative inline-block hover:text-primary/90 transition-colors">
      IPTV Service Provider
      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm"></span>
    </span>{" "}
    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">in 2025!</span>
  </h1>
);

export default HeroTitle;