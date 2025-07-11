import { useEffect } from "react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const Marketplace = () => {
  // Ensure the page starts in light mode (optional: adjust to your needs)
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-foreground relative z-10 pt-20">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">Discover & Trade Real-World Assets</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          COPYm’s regulated marketplace lets accredited investors access tokenized real-world assets with instant settlement and full transparency.
        </p>
        <EnhancedButton variant="default" size="lg" className="px-8 py-6 text-base">Start Investing</EnhancedButton>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Audited Smart Contracts",
            description: "Enterprise-grade smart contracts audited by leading security firms to protect your assets and ensure multi-chain compliance.",
            icon: "🛡️",
          },
          {
            title: "Institutional MPC Wallet",
            description: "Secure assets with institutional-grade MPC custody, eliminating single points of failure and enabling programmable compliance.",
            icon: "🔑",
          },
          {
            title: "Decentralized Identity",
            description: "DID & verifiable credentials guarantee investor identity and asset provenance across blockchains.",
            icon: "🆔",
          },
          {
            title: "AI Investment Consultant",
            description: "Leverage AI-powered analytics to optimize portfolio strategy and discover new asset classes.",
            icon: "🤖",
          },
          {
            title: "Qualified Custody Services",
            description: "Assets held with regulated custodians meeting SOC 2 Type II and ISO 27001 standards.",
            icon: "🏦",
          },
          {
            title: "24/7 Liquidity",
            description: "Trade anytime with real-time settlement, on-chain order books, and cross-chain support.",
            icon: "🌐",
          },
        ].map((f) => (
          <div key={f.title} className="bg-white/10 backdrop-blur-md border border-border/20 rounded-3xl p-8 flex flex-col gap-4">
            <div className="text-4xl">{f.icon}</div>
            <h3 className="text-2xl font-bold text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </section>

      {/* Inventory Categories */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Marketplace Inventory</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Real Estate", img: "/images/market-place-removebg-preview.png" },
            { label: "Commodities", img: "/images/asset-tokenization.png" },
            { label: "Carbon Credits", img: "/images/token-marketplace-removebg-preview.png" },
            { label: "Luxury Assets", img: "/images/hero-nft-green.jpg" },
            { label: "Gaming Securities", img: "/images/hero-market-chart.png" },
          ].map((c) => (
            <div key={c.label} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col">
              <img src={c.img} alt={c.label} className="object-cover w-full h-40" />
              <div className="p-4 flex-1 flex items-center justify-center">
                <span className="text-lg font-semibold">{c.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action reuse */}
      <section className="container mx-auto px-6 pb-32 text-center">
        <h3 className="text-3xl font-bold mb-4">Join the future of asset investing</h3>
        <EnhancedButton variant="default" size="lg">Create Account</EnhancedButton>
      </section>
       
    </div>
  );
};

export default Marketplace; 