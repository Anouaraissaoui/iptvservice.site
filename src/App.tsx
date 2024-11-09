import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TroubleshootingGuide from "./pages/TroubleshootingGuide";
import UsaIptvGuide from "./pages/blog/UsaIptvGuide";
import { getQueryClient } from "./utils/ssr";

const queryClient = getQueryClient();

const App = ({ dehydratedState }: { dehydratedState?: unknown }) => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/troubleshooting" element={<TroubleshootingGuide />} />
                <Route path="/blog/usa-iptv-guide" element={<UsaIptvGuide />} />
                
                {/* Redirects for old/alternative paths */}
                <Route path="/about" element={<Navigate to="/features" replace />} />
                <Route path="/support" element={<Navigate to="/contact" replace />} />
                <Route path="/help" element={<Navigate to="/contact" replace />} />
                <Route path="/packages" element={<Navigate to="/pricing" replace />} />
                <Route path="/services" element={<Navigate to="/features" replace />} />
                <Route path="/news" element={<Navigate to="/blog" replace />} />
                <Route path="/channels" element={<Navigate to="/features" replace />} />
                <Route path="/guide" element={<Navigate to="/features" replace />} />
                <Route path="/setup-guide" element={<Navigate to="/features" replace />} />
                <Route path="/faq" element={<Navigate to="/features#faq" replace />} />
                
                {/* Catch all 404 route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <Analytics />
          </TooltipProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;