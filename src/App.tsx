import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";
import SEO from "@/components/SEO";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { lazy, Suspense } from "react";

// Lazy loading 
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Team = lazy(() => import("./components/Team"));


const HeavyComponent = () => <div></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SEO />
        <BrowserRouter>
          
            
            <Suspense>
              <Projects />
              <Skills />
              <Team />
              <HeavyComponent />
            </Suspense>
          
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
