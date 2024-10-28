import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Page Non Trouvée
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild className="bg-primary text-navy hover:bg-primary/90">
          <Link to="/fr">
            <Home className="mr-2 h-5 w-5" />
            Retour à l'accueil
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;