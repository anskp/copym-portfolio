import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Shield, Zap, Globe } from "lucide-react";
import ScrambledText from "@/components/ui/scramble";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SplitContentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split content animation
      gsap.fromTo([textRef.current, imageRef.current], 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-full">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div ref={textRef} className="space-y-8">
            <div className="space-y-4">
              <ScrambledText
                className="text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                style={{ margin: 0 }}
                radius={120}
                duration={1.2}
                speed={0.5}
                scrambleChars={".:"}
              >
                Revolutionary
                <br />
                Asset 
                <br />
                Tokenization
              </ScrambledText>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform traditional assets into digital tokens with complete regulatory compliance, 
                instant liquidity, and global accessibility. Our platform bridges the gap between 
                physical and digital economies.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-full p-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Regulatory Compliant</h3>
                  <p className="text-muted-foreground">Full KYC/AML integration with smart contract automation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="glass rounded-full p-3">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Instant Settlement</h3>
                  <p className="text-muted-foreground">24/7 trading with immediate blockchain settlement</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="glass rounded-full p-3">
                  <Globe className="w-6 h-6 text-tertiary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Global Access</h3>
                  <p className="text-muted-foreground">Worldwide investor base with multi-currency support</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <EnhancedButton variant="cyber" size="lg">
                Explore Features
              </EnhancedButton>
            </div>
          </div>

          {/* 3D Model Embed */}
          <div ref={imageRef} className="relative">
            <div className="glass-card p-0 overflow-hidden rounded-2xl aspect-video">
              <video
                src="/video/animated-3d.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}