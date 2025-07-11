import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Removed navbar-related imports as the Navbar component now handles them.

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
      {/* Navbar moved out to separate component */}

      {/* Bento Grid Layout */}
      <div className="flex-1 grid grid-cols-12 gap-4 min-h-0 overflow-hidden">
        {/* LEFT COLUMN - 3 cards stacked */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 h-full min-h-0">
          {/* Each card gets 1/3 of the column height */}
          <div className="hero-card flex-[2] min-h-0 bg-white border border-border rounded-3xl overflow-hidden">
            <img
              src="/images/marketplace-phone.png"
              alt="Token Marketplace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Merged the previous second card into the first by removing it */}

          <div className="hero-card bg-white border border-border rounded-3xl overflow-hidden">
            <img
              src="/images//hero-did-scanner-cropped.png"
              alt="COPYm Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-4 h-full min-h-0">
          <div className="hero-card flex-[2] min-h-0 bg-white border border-border rounded-3xl overflow-hidden">
            <img
              src="/images/poster-board.png"
              alt="COPYm Pack"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="hero-card bg-white border border-border rounded-3xl overflow-hidden">
              <img
                src="/images/hero-nft-green.jpg"
                alt="Credential Verify"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hero-card bg-green-500 rounded-3xl flex flex-col items-center justify-center text-white p-6">
              <div className="text-xl font-bold">
                <img
                src="/assets/copym/png/Copym-02-1.png"
                alt="COPYM"
                className="h-10 w-auto sm:h-16 md:h-16 object-cover"
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
