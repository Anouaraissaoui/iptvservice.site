import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import type { BeforeSendMiddleware } from "@vercel/speed-insights/react";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TroubleshootingGuide from "./pages/TroubleshootingGuide";
import UsaIptvGuide from "./pages/blog/UsaIptvGuide";
import FreeTrial from "./pages/FreeTrial";
import { getQueryClient } from "./utils/ssr";

const queryClient = getQueryClient();

// Console logs for tracking Core Web Vitals
console.log('[Speed Insights] Initializing Core Web Vitals monitoring');

// Helper function to format metric values
const formatMetricValue = (value: number, metric: string) => {
  switch (metric) {
    case 'INP':
    case 'FID':
      return `${value}ms`;
    case 'CLS':
      return value.toFixed(3);
    case 'LCP':
      return `${(value / 1000).toFixed(2)}s`;
    default:
      return value;
  }
};

// Helper function to evaluate metric status
const getMetricStatus = (value: number, metric: string) => {
  switch (metric) {
    case 'INP':
      return value <= 200 ? 'Good' : value <= 500 ? 'Needs Improvement' : 'Poor';
    case 'FID':
      return value <= 100 ? 'Good' : value <= 300 ? 'Needs Improvement' : 'Poor';
    case 'CLS':
      return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor';
    case 'LCP':
      return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor';
    default:
      return 'Unknown';
  }
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
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Index />} />
                
                {/* Service Pages */}
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/free-trial" element={<FreeTrial />} />
                
                {/* Support Pages */}
                <Route path="/troubleshooting" element={<TroubleshootingGuide />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Blog Section */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/usa-iptv-guide" element={<Navigate to="/blog/usa-iptv-guide/" replace />} />
                <Route path="/blog/usa-iptv-guide/" element={<UsaIptvGuide />} />
                
                {/* Catch-all for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <Analytics />
            <SpeedInsights 
              debug={process.env.NODE_ENV === 'development'}
              sampleRate={100}
              beforeSend={(data) => {
                const formattedValue = formatMetricValue(data.value, data.name);
                const status = getMetricStatus(data.value, data.name);
                
                console.log(`[Speed Insights] Core Web Vital: ${data.name}`);
                console.log(`├─ Value: ${formattedValue}`);
                console.log(`├─ Status: ${status}`);
                console.log(`├─ Rating: ${data.rating}`);
                console.log(`├─ Navigation URL: ${data.navigationType}`);
                console.log(`└─ ID: ${data.id}`);

                // Log to console in development only
                if (process.env.NODE_ENV === 'development') {
                  console.table({
                    metric: data.name,
                    value: formattedValue,
                    status,
                    rating: data.rating,
                    navigation: data.navigationType
                  });
                }

                return data;
              }}
            />
          </TooltipProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;