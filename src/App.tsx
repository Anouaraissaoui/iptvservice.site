import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ErrorBoundary from "./components/ErrorBoundary";
import { getQueryClient } from "./utils/ssr";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Features = lazy(() => import("./pages/Features"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TroubleshootingGuide = lazy(() => import("./pages/TroubleshootingGuide"));
const UsaIptvGuide = lazy(() => import("./pages/blog/UsaIptvGuide"));
const InstallationGuide = lazy(() => import("./pages/blog/InstallationGuide"));
const FreeTrial = lazy(() => import("./pages/FreeTrial"));

console.log('[App] Initializing application');
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
              <Suspense fallback={
                <div className="min-h-screen bg-navy flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
                </div>
              }>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<Index />} />
                  
                  {/* Service Pages */}
                  <Route path="/features" element={<Features />} />
                  <Route path="/iptv-features" element={<Navigate to="/features" replace />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/iptv-pricing" element={<Navigate to="/pricing" replace />} />
                  <Route path="/free-trial" element={<FreeTrial />} />
                  <Route path="/iptv-free-trial" element={<Navigate to="/free-trial" replace />} />
                  
                  {/* Support Pages */}
                  <Route path="/troubleshooting" element={<TroubleshootingGuide />} />
                  <Route path="/iptv-troubleshooting" element={<Navigate to="/troubleshooting" replace />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/iptv-contact" element={<Navigate to="/contact" replace />} />
                  
                  {/* Blog Section */}
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/usa-iptv-guide" element={<Navigate to="/blog/usa-iptv-guide/" replace />} />
                  <Route path="/blog/usa-iptv-guide/" element={<UsaIptvGuide />} />
                  <Route path="/blog/installation-guide" element={<Navigate to="/blog/iptv-installation-guide/" replace />} />
                  <Route path="/blog/iptv-installation-guide/" element={<InstallationGuide />} />
                  
                  {/* Catch-all for 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
            <Analytics />
            <SpeedInsights debug={process.env.NODE_ENV === 'development'} />
          </TooltipProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;