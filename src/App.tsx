import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getQueryClient } from "./utils/ssr";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Features = lazy(() => import("./pages/Features"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = getQueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-navy flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = ({ dehydratedState }: { dehydratedState?: unknown }) => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;