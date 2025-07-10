import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Laptop, ShoppingBag, Shirt, Package, Store, Sun, Moon } from "lucide-react";
import { AnimatedDock } from "./animated-dock";
import React from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on load
      gsap.fromTo(
        ".hero-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Floating animation for logo
  const floatingLogoStyle = {
    animation: "floatLogo 3s ease-in-out infinite",
  };

  // Add keyframes for floating animation
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes floatLogo {
    0% { transform: translateY(0); }
    50% { transform: translateY(-24px); }
    100% { transform: translateY(0); }
  }`;
  if (
    typeof window !== "undefined" &&
    !document.getElementById("float-logo-keyframes")
  ) {
    style.id = "float-logo-keyframes";
    document.head.appendChild(style);
  }

  // Theme toggle component
  const ThemeToggle = () => {
    const [dark, setDark] = React.useState(() =>
      document.documentElement.classList.contains("dark")
    );

    const handleToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      const html = document.documentElement;
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        setDark(false);
      } else {
        html.classList.add("dark");
        setDark(true);
      }
    };

    const Icon = dark ? Sun : Moon;
    return <Icon className="h-4 w-4" onClick={handleToggle} />;
  };

  return (
    <section
      ref={sectionRef}
      className="h-screen overflow-hidden bg-background p-4 flex flex-col"
    >
      {/* Header */}
      <header className="flex items-center justify-between mb-6 flex-shrink-0 z-10 relative">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="COPYm" className="h-12 w-12 object-contain" />
        </div>

        <h1 className="text-2xl font-bold text-foreground">COPYm</h1>

        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span>Tokenize Physical Assets in Minutes — Secure, Compliant, Global.</span>
          <AnimatedDock
            items={[
              { link: "#", Icon: <Laptop className="h-4 w-4" /> },
              { link: "#", Icon: <ShoppingBag className="h-4 w-4" /> },
              { link: "#", Icon: <Shirt className="h-4 w-4" /> },
              { link: "#", Icon: <Package className="h-4 w-4" /> },
              { link: "#", Icon: <Store className="h-4 w-4" /> },
              { link: "#", Icon: <ThemeToggle /> },
            ]}
          />
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="flex-1 grid grid-cols-12 gap-4 min-h-0 overflow-hidden">
        {/* LEFT COLUMN - 3 cards stacked */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 h-full min-h-0">
          {/* Each card gets 1/3 of the column height */}
          <div className="hero-card flex-1 min-h-0 bg-white border border-border rounded-3xl overflow-hidden">
            <img
              src="/images/token-marketplace.png"
              alt="Token Marketplace"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hero-card flex-1 min-h-0 bg-white border border-border rounded-3xl overflow-hidden">
            <img
              src="/images/tokenization.png"
              alt="Tokenization"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hero-card flex-1 min-h-0 bg-white border border-border rounded-3xl flex items-center justify-center p-6">
            <img
              src="/images/logoUcopym.png"
              alt="COPYm Logo"
              style={floatingLogoStyle}
              className="h-16 w-16 md:h-24 md:w-24 object-contain"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-4 h-full min-h-0">
          <div className="hero-card flex-[2] min-h-0 bg-white border border-border rounded-3xl overflow-hidden">
            <img
              src="/images/copym-pack.png"
              alt="COPYm Pack"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="hero-card bg-white border border-border rounded-3xl overflow-hidden">
              <img
                src="/images/credential-verify.png"
                alt="Credential Verify"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hero-card bg-green-500 rounded-3xl flex flex-col items-center justify-center text-white p-6">
              <div className="text-xl font-bold">COPYm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
