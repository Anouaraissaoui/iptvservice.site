import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
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

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/fr')) {
      i18n.changeLanguage('fr');
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  return <>{children}</>;
};

const App = ({ dehydratedState }: { dehydratedState?: unknown }) => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <LanguageWrapper>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/fr" element={<Index />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/fr/blog" element={<Blog />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/fr/pricing" element={<Pricing />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/fr/features" element={<Features />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/fr/contact" element={<Contact />} />
                  <Route path="/troubleshooting" element={<TroubleshootingGuide />} />
                  <Route path="/fr/troubleshooting" element={<TroubleshootingGuide />} />
                  <Route path="/blog/usa-iptv-guide" element={<Navigate to="/blog/usa-iptv-guide/" replace />} />
                  <Route path="/blog/usa-iptv-guide/" element={<UsaIptvGuide />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </LanguageWrapper>
            </BrowserRouter>
            <Analytics />
          </TooltipProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;