import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const HeroTitle = () => {
  const location = useLocation();
  const isFrench = location.pathname.startsWith("/fr");

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
      <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
        {isFrench ? "Découvrez le N°1 des " : "Experience The #1 "}
      </span>
      <Link to={isFrench ? "/fr/pricing" : "/pricing"} className="text-primary relative inline-block hover:text-primary/90 transition-colors">
        {isFrench ? "Services IPTV" : "IPTV Subscription"}
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm"></span>
      </Link>{" "}
      <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
        {isFrench ? "Aujourd'hui !" : "Service Today!"}
      </span>
    </h1>
  );
};

export default HeroTitle;