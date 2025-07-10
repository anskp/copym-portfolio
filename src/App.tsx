import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { useEffect } from "react";

declare global {
  interface Window {
    VANTA?: any;
    THREE?: any;
  }
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (!(window.VANTA && window.VANTA.CLOUDS && window.THREE)) return;

    const lightOpts = {
      skyColor: 0xa7efbe,
      cloudColor: 0x91b9f2,
    };

    const darkOpts = {
      skyColor: 0x556363,
      cloudColor: 0x4b4b56,
      cloudShadowColor: 0x1c9a9a,
      sunColor: 0x938686,
      sunGlareColor: 0x60301e,
      sunlightColor: 0xff7102,
    };

    let effect: any;

    const init = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const opts = isDark ? darkOpts : lightOpts;
      effect = window.VANTA.CLOUDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        speed: 1.3,
        THREE: window.THREE,
        ...opts,
      });
    };

    init();

    // observe theme changes
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      const opts = isDark ? darkOpts : lightOpts;
      if (effect && effect.setOptions) {
        effect.setOptions(opts);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
      if (effect && effect.destroy) effect.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
