const Footer = () => {
  return (
    <footer className="bg-navy-light py-12 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <img src="/logo.svg" alt="BuyIPTV" className="h-8" />
        </div>
        
        <p className="text-center text-gray-400 text-sm">
          © 2024 Buy IPTV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;