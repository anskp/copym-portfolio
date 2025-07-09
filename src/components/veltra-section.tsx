import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EnhancedButton } from "@/components/ui/enhanced-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function VeltraSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(visualRef.current,
        { opacity: 0, x: 100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen bg-white py-20"
    >
      {/* Navigation */}
      <nav className="container mx-auto px-6 flex items-center justify-between mb-16">
        <div className="flex items-center space-x-8">
          <span className="text-foreground font-medium">Features</span>
          <span className="text-foreground font-medium">How It Works</span>
          <span className="text-foreground font-medium">Partners</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-xl font-bold text-foreground ml-2">Veltra.</span>
        </div>
        
        <EnhancedButton variant="default" size="sm">
          Get Started
        </EnhancedButton>
      </nav>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div ref={textRef} className="space-y-8">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              Welcome to Veltra
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Elevate Payments,
              <br />
              Experience the
              <br />
              Future
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Veltra transforms the way you pay, visualize, and connect combining cutting-edge fintech with seamless user experience.
            </p>
            
            <div className="flex space-x-4">
              <EnhancedButton variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Now
              </EnhancedButton>
              <EnhancedButton variant="outline" size="lg">
                Watch Demo
              </EnhancedButton>
            </div>
            
            {/* Partner logos */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-muted-foreground font-medium">pipedrive</div>
              <div className="text-muted-foreground font-medium">mailchimp</div>
              <div className="text-muted-foreground font-medium">snowflake</div>
            </div>
          </div>

          {/* Right side - 3D Isometric Illustration */}
          <div ref={visualRef} className="relative">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Isometric payment machine illustration */}
              <div className="relative">
                {/* Main payment terminal */}
                <div className="w-80 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg transform rotate-12 relative">
                  {/* Screen */}
                  <div className="absolute top-4 left-4 w-32 h-20 bg-blue-600 rounded"></div>
                  
                  {/* Keypad */}
                  <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                    ))}
                  </div>
                  
                  {/* Card slot */}
                  <div className="absolute top-1/2 right-2 w-16 h-2 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Receipt printer */}
                <div className="absolute -top-8 left-16 w-24 h-32 bg-white border-2 border-gray-300 rounded-lg transform -rotate-6">
                  <div className="p-2 space-y-1">
                    <div className="h-1 bg-gray-200 rounded"></div>
                    <div className="h-1 bg-gray-200 rounded"></div>
                    <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -top-12 -right-8 w-20 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg transform rotate-45 shadow-lg"></div>
                <div className="absolute -bottom-8 -left-12 w-16 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transform -rotate-12 shadow-lg"></div>
                
                {/* Small UI elements */}
                <div className="absolute top-0 right-16 w-8 h-8 bg-yellow-400 rounded-full"></div>
                <div className="absolute bottom-8 left-0 w-6 h-6 bg-pink-400 rounded"></div>
                
                {/* QR Code */}
                <div className="absolute -right-16 top-8 w-16 h-16 bg-white border border-gray-300 rounded p-1">
                  <div className="w-full h-full bg-black rounded grid grid-cols-4 gap-px">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} rounded-sm`}></div>
                    ))}
                  </div>
                </div>
                
                {/* Star ratings */}
                <div className="absolute -top-16 left-32 bg-white p-2 rounded-lg shadow-lg">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}