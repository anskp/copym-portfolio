import { EnhancedButton } from "@/components/ui/enhanced-button";
import { useEffect } from "react";

const Tokenization = () => {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-foreground relative z-10 pt-20">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">Tokenize Real-World Assets in Minutes</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          COPYm’s end-to-end tokenization platform transforms physical and financial assets into compliant, tradable blockchain tokens.
        </p>
        <EnhancedButton variant="default" size="lg" className="px-8 py-6 text-base">
          Start Tokenizing
        </EnhancedButton>
      </section>

      {/* Steps / Features */}
      <section className="container mx-auto px-6 py-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "KYB / KYC Onboarding",
            description: "Automated compliance checks onboard issuers & investors in minutes with verifiable credentials.",
            icon: "✅",
          },
          {
            title: "Asset Due Diligence",
            description: "Upload legal docs, valuations, and audits to create a transparent data room for each asset.",
            icon: "📄",
          },
          {
            title: "Smart Contract Issuance",
            description: "Generate audited ERC-1400 / ERC-3643 or custom token standards with built-in compliance rules.",
            icon: "📜",
          },
          {
            title: "Fractionalization & Pricing",
            description: "Define share classes, supply, and pricing models to open assets to a global investor base.",
            icon: "💲",
          },
          {
            title: "Regulated Custody",
            description: "Store underlying assets with licensed custodians and link proof-of-reserve on-chain.",
            icon: "🏦",
          },
          {
            title: "Secondary Trading Ready",
            description: "Seamless listing on COPYm Marketplace or other ATS venues with instant settlement.",
            icon: "⚡",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="bg-white/10 backdrop-blur-md border border-border/20 rounded-3xl p-8 flex flex-col gap-4"
          >
            <div className="text-4xl">{f.icon}</div>
            <h3 className="text-2xl font-bold text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-32 text-center">
        <h3 className="text-3xl font-bold mb-4">Get your assets on-chain today</h3>
        <EnhancedButton variant="default" size="lg">Request Demo</EnhancedButton>
      </section>
    </div>
  );
};

export default Tokenization; 