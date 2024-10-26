const Stats = () => {
  return (
    <div className="py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us For Your <span className="text-primary">IPTV Subscription</span>?
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400">Experience unmatched quality and reliability with our premium IPTV service.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "+50K", label: "Happy Customers" },
            { number: "+40K", label: "Channels" },
            { number: "+1,500", label: "Sport Channels" },
            { number: "+50K", label: "VOD & Movies" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-primary/5 blur-xl rounded-3xl group-hover:bg-primary/10 transition-all duration-300"></div>
              <div className="relative bg-navy-light border border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300">
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;