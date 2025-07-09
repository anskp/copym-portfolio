import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { ChevronDown, ArrowRight } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on load
      gsap.fromTo(".hero-card", 
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-background p-6"
    >
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-foreground">AI-Powered</h1>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span>SYNTO PREDICTS WHAT YOU NEED — BEFORE YOU KNOW YOU NEED IT.</span>
          <div className="flex space-x-2">
            <div className="w-6 h-6 border border-border rounded"></div>
            <div className="w-6 h-6 border border-border rounded"></div>
            <div className="w-6 h-6 border border-border rounded"></div>
            <div className="w-6 h-6 border border-border rounded"></div>
            <div className="w-6 h-6 border border-border rounded"></div>
          </div>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[calc(100vh-120px)]">
        {/* Large card - top left */}
        <div className="hero-card col-span-4 row-span-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl p-6 flex flex-col justify-between text-white">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="w-8 h-8 border-2 border-white rounded-full"></div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-80">Your content here</div>
          </div>
        </div>

        {/* Large main card - center */}
        <div className="hero-card col-span-5 row-span-4 bg-white border border-border rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
          <div className="h-full flex items-center justify-center text-6xl font-bold text-muted-foreground">
            Your Main Content
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-1">
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
          </div>
        </div>

        {/* Top right card */}
        <div className="hero-card col-span-3 row-span-2 bg-white border border-border rounded-3xl p-6 flex flex-col justify-between">
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Your content</div>
          </div>
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-muted rounded-2xl"></div>
          </div>
        </div>

        {/* Price card - left */}
        <div className="hero-card col-span-3 row-span-2 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-3xl p-6 relative">
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 border border-muted rounded-lg"></div>
          </div>
          <div className="mt-8">
            <div className="bg-foreground text-background px-4 py-2 rounded-full text-lg font-bold inline-block">
              $1850
            </div>
          </div>
        </div>

        {/* Bottom left red card */}
        <div className="hero-card col-span-4 row-span-1 bg-red-500 rounded-3xl p-6 text-white flex items-center justify-between">
          <div>
            <div className="text-xs opacity-80">SPEED AND PRECISION,</div>
            <div className="text-xs opacity-80">REDEFINED.</div>
            <div className="text-lg font-bold mt-2">Smart Shopping</div>
          </div>
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border border-white rounded-full"></div>
          </div>
        </div>

        {/* Bottom center gradient */}
        <div className="hero-card col-span-4 row-span-2 bg-gradient-to-br from-pink-400 to-orange-400 rounded-3xl p-6 text-white flex items-center justify-center">
          <div className="text-center">
            <div className="flex justify-center space-x-1 mb-4">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="text-3xl font-bold">synto</div>
          </div>
        </div>

        {/* Bottom right card */}
        <div className="hero-card col-span-3 row-span-2 bg-white border border-border rounded-3xl p-6 relative">
          <div className="absolute top-4 right-4">
            <div className="text-xs text-muted-foreground">SPEED AND PRECISION,</div>
            <div className="text-xs text-muted-foreground">REDEFINED.</div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-pink-300 rounded-2xl transform rotate-12"></div>
          </div>
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
            SYNTO.COM
          </div>
        </div>

        {/* Small top right */}
        <div className="hero-card col-span-1 row-span-1 bg-muted rounded-2xl"></div>
      </div>
    </section>
  );
}