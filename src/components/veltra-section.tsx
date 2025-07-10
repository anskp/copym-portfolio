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
      {/* No navigation */}

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div ref={textRef} className="space-y-8">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              Welcome to COPYm
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              COPYm RWA Tokenization
              <br />
              Platform
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              COPYm turns real-world assets into blockchain tokens, unlocking liquidity with secure, compliant, and seamless user experience.
            </p>
            
            <div className="flex space-x-4">
              <EnhancedButton variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </EnhancedButton>
            </div>
            
            {/* No partner logos */}
          </div>

          {/* Right side - COPYm Logo */}
          <div ref={visualRef} className="flex items-center justify-center h-[500px]">
            <img src="/images/logo.png" alt="COPYm" className="h-80 w-80 lg:h-96 lg:w-96 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}