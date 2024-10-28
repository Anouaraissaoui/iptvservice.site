import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// English routes
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// French routes
import FrenchIndex from "./pages/fr/Index";
import FrenchBlog from "./pages/fr/Blog";
import FrenchPricing from "./pages/fr/Pricing";
import FrenchFeatures from "./pages/fr/Features";
import FrenchContact from "./pages/fr/Contact";
import FrenchNotFound from "./pages/fr/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* English routes */}
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* French routes */}
            <Route path="/fr" element={<FrenchIndex />} />
            <Route path="/fr/blog" element={<FrenchBlog />} />
            <Route path="/fr/pricing" element={<FrenchPricing />} />
            <Route path="/fr/features" element={<FrenchFeatures />} />
            <Route path="/fr/contact" element={<FrenchContact />} />
            
            {/* 404 routes */}
            <Route path="/fr/*" element={<FrenchNotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;