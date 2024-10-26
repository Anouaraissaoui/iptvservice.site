const Benefits = () => {
  return (
    <div className="py-20 bg-navy-light">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img 
              src="https://ideogram.ai/assets/progressive-image/balanced/response/rjBDn08hT6OtKawxA6EQPg" 
              alt="Family watching TV" 
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Benefits of <span className="text-primary">IPTV</span>
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost-Effective</h3>
                <p className="text-gray-400">More affordable than traditional cable or satellite TV packages.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">High-Quality Streaming</h3>
                <p className="text-gray-400">Enjoy crisp, high-definition video and audio.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Flexible Viewing</h3>
                <p className="text-gray-400">Watch your favorite content anytime, anywhere with an internet connection.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                <p className="text-gray-400">Access a wide range of international channels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;