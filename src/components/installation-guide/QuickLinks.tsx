import { Link } from "react-router-dom";

export const QuickLinks = () => {
  return (
    <div className="bg-navy-light border border-white/10 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li>
          <Link to="/features" className="text-primary hover:underline">View Available Channels</Link>
        </li>
        <li>
          <Link to="/pricing" className="text-primary hover:underline">Compare Subscription Plans</Link>
        </li>
        <li>
          <Link to="/blog/usa-iptv-guide" className="text-primary hover:underline">USA IPTV Guide</Link>
        </li>
        <li>
          <Link to="/free-trial" className="text-primary hover:underline">Try Our Free Trial</Link>
        </li>
      </ul>
    </div>
  );
};