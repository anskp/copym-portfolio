import { useState } from "react";
import CircularGallery from "@/components/ui/CircularGallery";

interface Item {
  image: string;
  text: string;
}

const items: Item[] = [
  { image: "/images/dashboard.png", text: "Portfolio Dashboard" },
  { image: "/images/multiple-chain.png", text: "Cross-Chain Connectivity" },
  { image: "/images/NFT-market.png", text: "NFT / RWA Marketplace" },
  { image: "/images/wallets.png", text: "Multi-Wallet Support" },
  { image: "/images/mint-SBT.png", text: "Mint SBT Credentials" },
  { image: "/images/investor-onboards.png", text: "Investor Onboarding" },
  { image: "/images/token-marketplace.png", text: "Token Marketplace" },
];

export default function GallerySection() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <section className="py-20 border-b border-border relative">
      <div className="container mx-auto px-6">
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            items={items}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>

      {/* Overlay */}
      {active && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >
          <div className="bg-white dark:bg-muted rounded-2xl p-6 max-w-sm text-center space-y-4">
            <img src={active.image} alt={active.text} className="w-full rounded-xl" />
            <h3 className="text-2xl font-semibold text-foreground">{active.text}</h3>
            <p className="text-muted-foreground text-sm">Click anywhere to close</p>
          </div>
        </div>
      )}
    </section>
  );
} 