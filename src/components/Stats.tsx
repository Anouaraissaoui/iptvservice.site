const Stats = () => {
  return (
    <div className="py-24 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Why Choose Us For Your <span className="text-primary relative inline-block">IPTV Subscription
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm"></span></span>?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-8 animate-pulse"></div>
          <p className="text-gray-400 text-lg">Experience unmatched quality and reliability with our premium IPTV service.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "+50K", label: "Happy Customers" },
            { number: "+40K", label: "Channels" },
            { number: "+1,500", label: "Sport Channels" },
            { number: "+50K", label: "VOD & Movies" }
          ].map((stat, index) => (
            <div key={index} className="relative group transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-primary/5 blur-xl rounded-3xl group-hover:bg-primary/10 transition-all duration-300"></div>
              <div className="relative bg-navy-light/80 border border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">{stat.number}</p>
                <p className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;