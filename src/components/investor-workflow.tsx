import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambledText from "@/components/ui/scramble";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Step {
  title: string;
  description: string;
  visualSrc: string;
}

export function InvestorWorkflow({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.set(imageRefs.current, { opacity: 0 });
        gsap.set(imageRefs.current[0], { opacity: 1 });
        // Start image container on the right for the first section and keep hidden until workflow starts
        const containerWidth = 400;
        const computeRightOffset = () => window.innerWidth - window.innerWidth * 0.08 - containerWidth; // positive value moves right
        const computeLeftOffset = () => window.innerWidth * 0.08;

        gsap.set(containerRef.current, { x: computeRightOffset(), autoAlpha: 0 });

        // Show container when first section enters, hide when leaving back above hero
        ScrollTrigger.create({
          trigger: sectionRefs.current[0]!,
          start: "top 70%", // when first section approaches viewport
          onEnter: () => gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.3 }),
          onEnterBack: () => gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.3 }),
          onLeaveBack: () => gsap.to(containerRef.current, { autoAlpha: 0, duration: 0.3 })
        });

        // Hide container when scrolling past the last section
        const lastIdx = steps.length - 1;
        ScrollTrigger.create({
          trigger: sectionRefs.current[lastIdx]!,
          start: "top center",
          end: "bottom center",
          onLeave: () => gsap.to(containerRef.current, { autoAlpha: 0, duration: 0.3 }),
          onLeaveBack: () => gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.3 }),
        });

        // Helper to show specific image index
        const show = (idx: number) => {
          imageRefs.current.forEach((img, i) => {
            gsap.set(img, { opacity: i === idx ? 1 : 0 });
          });
        };

        steps.forEach((_, index) => {
          const isTextRight = index % 2 === 1;

          // Scrubbed horizontal movement across the section
          const destX = isTextRight ? computeLeftOffset() : computeRightOffset();

          gsap.to(containerRef.current, {
            x: destX,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: sectionRefs.current[index]!,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          });

          // Swap image only after slide completes (when section bottom crosses center)
          ScrollTrigger.create({
            trigger: sectionRefs.current[index]!,
            start: "bottom center",
            onEnter: () => {
              const next = index + 1 < steps.length ? index + 1 : index;
              show(next);
            },
            onEnterBack: () => {
              // going upward restores current section image
              show(index);
            },
          });
        });
      });
      return () => mm.revert();
    });
    return () => ctx.revert();
  }, [steps]);

  return (
    <div className="relative">
      {/* Fixed image container for large screens */}
      <div
        ref={containerRef}
        className="hidden lg:block fixed -translate-y-1/2 w-[400px] h-[400px] z-20 pointer-events-none"
        style={{ top: '25%' }}
      >
        {steps.map((step, i) => (
          <img
            key={i}
            ref={(el) => {
              if (el) imageRefs.current[i] = el as HTMLImageElement;
            }}
            src={step.visualSrc}
            alt={step.title}
            className="absolute inset-0 w-full h-full object-contain select-none"
          />
        ))}
      </div>

      {/* Scroll sections */}
      {steps.map((step, i) => {
        const isTextRight = i % 2 === 1;
        return (
          <section
            key={i}
            ref={(el) => {
              if (el) sectionRefs.current[i] = el as HTMLDivElement;
            }}
            className="flex items-center py-24 lg:py-32"
          >
            <div className="container mx-auto px-6">
              <div
                className={`lg:grid lg:grid-cols-2 gap-16 items-center`}
              >
                {/* Text block */}
                <div className={`space-y-6 max-w-xl text-left ${isTextRight ? "lg:col-start-2 ml-auto" : ""}`}>
                  <div className={`flex items-center space-x-4 ${isTextRight ? "lg:justify-end" : ""}`}>
                    <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-lg">
                      {i + 1}
                    </div>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <ScrambledText
                    className="text-4xl lg:text-5xl font-bold text-foreground"
                    radius={120}
                    duration={1.2}
                    speed={0.5}
                    scrambleChars={".:"}
                  >
                    {step.title}
                  </ScrambledText>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Fallback image for small screens */}
                <div className={`lg:hidden mt-10 ${isTextRight ? "order-first" : ""}`}>
                  <img
                    src={step.visualSrc}
                    alt={step.title}
                    className="w-full max-w-md mx-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}