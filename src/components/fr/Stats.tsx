import { Users, Tv, Radio, Film } from "lucide-react";

const Stats = () => {
  const stats = [
    { number: "+50K", label: "Clients Satisfaits", icon: <Users className="w-8 h-8" /> },
    { number: "+40K", label: "Chaînes", icon: <Tv className="w-8 h-8" /> },
    { number: "+1,500", label: "Chaînes Sport", icon: <Radio className="w-8 h-8" /> },
    { number: "+50K", label: "VOD & Films", icon: <Film className="w-8 h-8" /> }
  ];

  return (
    <div className="py-16 md:py-24 bg-navy-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-2 backdrop-blur-xl text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white">Pourquoi Nous Choisir?</span>
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Pourquoi Nous Choisir Pour Votre{" "}
            <span className="text-primary relative inline-block">
              Abonnement IPTV
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
            </span>
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-8 animate-pulse" />
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez une qualité et une fiabilité inégalées avec notre service IPTV premium, 
            choisi par des milliers d'utilisateurs dans le monde.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group transform hover:scale-105 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-primary/5 blur-xl rounded-3xl group-hover:bg-primary/10 transition-all duration-300" />
              
              <div className="relative bg-navy-light/80 border border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {stat.icon}
                </div>
                
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                
                <p className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;