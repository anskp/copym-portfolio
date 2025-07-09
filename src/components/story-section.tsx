import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StorySectionProps {
  title: string;
  description: string;
  visualType: 'png' | 'webm' | 'glb' | 'spline';
  visualSrc?: string;
  index: number;
}

export function StorySection({ title, description, visualType, visualSrc, index }: StorySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const isTextLeft = index % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(textRef.current,
        { opacity: 0, x: isTextLeft ? -100 : 100 },
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

      // Visual animation - different effects based on type
      const visualAnimation = visualType === 'webm' || visualType === 'glb' ? 
        { opacity: 0, scale: 0.8, rotationY: 45 } :
        { opacity: 0, y: 50, scale: 0.9 };

      gsap.fromTo(visualRef.current,
        visualAnimation,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
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

      // Parallax effect for visual
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(visualRef.current, {
            y: progress * -50,
            duration: 0.3
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [visualType, isTextLeft]);

  const renderVisual = () => {
    return (
      <div className="glass-card min-h-[400px] flex items-center justify-center bg-white border border-border">
        {visualSrc ? (
          <img 
            src={visualSrc} 
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <div className="text-center space-y-4">
            <div className="w-32 h-32 bg-muted rounded-2xl mx-auto"></div>
            <p className="text-muted-foreground">Visualization Placeholder</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef} 
      className="section-full bg-background border-b border-border"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conditional rendering based on text placement */}
          {isTextLeft ? (
            <>
              {/* Text content on left */}
              <div ref={textRef} className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                    {title}
                  </h2>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Visual content on right */}
              <div ref={visualRef} className="relative">
                {renderVisual()}
              </div>
            </>
          ) : (
            <>
              {/* Visual content on left */}
              <div ref={visualRef} className="relative">
                {renderVisual()}
              </div>

              {/* Text content on right */}
              <div ref={textRef} className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                    {title}
                  </h2>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}