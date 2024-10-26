const Stats = () => {
  return (
    <div className="py-20 bg-navy-light">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Why Choose Us For Your <span className="text-primary">IPTV Subscription</span>?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">+50K</p>
            <p className="text-gray-400 mt-2">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">+40K</p>
            <p className="text-gray-400 mt-2">Channels</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">+1,500</p>
            <p className="text-gray-400 mt-2">Sport Channels</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">+50K</p>
            <p className="text-gray-400 mt-2">VOD & Movies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;