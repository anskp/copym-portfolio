import { useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { VeltraSection } from "@/components/veltra-section";
import { SplitContentSection } from "@/components/split-content-section";
import { StorySection } from "@/components/story-section";
import { FooterSection } from "@/components/footer-section";

const Index = () => {
  // Set light mode by default
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const storyData = [
    {
      title: "Asset Vaulting",
      description: "Secure physical assets in certified vaults with real-time monitoring, insurance coverage, and professional custody services. Each asset is verified, catalogued, and protected with institutional-grade security protocols.",
      visualType: "png" as const,
      visualSrc: "/lovable-uploads/d9589fd4-bb94-4dcc-bd43-6efde54fb1d6.png"
    },
    {
      title: "Legalization & Smart Contracts",
      description: "Automated legal compliance through smart contracts that handle KYC/AML verification, regulatory reporting, and investor accreditation. Built-in legal frameworks ensure full regulatory compliance across jurisdictions.",
      visualType: "png" as const,
      visualSrc: "/lovable-uploads/63b682ec-359f-4c17-a8fc-06b35e75014c.png"
    },
    {
      title: "Token Minting on Blockchain",
      description: "Mint digital tokens representing fractional ownership of real-world assets. Each token is backed by verifiable assets with transparent on-chain records and immutable ownership proofs.",
      visualType: "png" as const,
      visualSrc: "/lovable-uploads/d84384b6-e85d-4611-a372-a3e0280a6b15.png"
    },
    {
      title: "Marketplace Liquidity",
      description: "Trade tokenized assets 24/7 on our global marketplace with instant settlement, competitive spreads, and deep liquidity pools. Connect with institutional and retail investors worldwide.",
      visualType: "png" as const,
      visualSrc: "/lovable-uploads/26439204-e9f6-4f86-8730-e52ce0f0442e.png"
    },
    {
      title: "Investor Onboarding",
      description: "Streamlined investor onboarding with automated KYC, digital wallet integration, and educational resources. Get started in minutes with bank-grade security and user-friendly interfaces.",
      visualType: "png" as const,
      visualSrc: "/lovable-uploads/ec8e930e-072d-4f02-8687-e048bedf2d94.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Veltra Section */}
      <VeltraSection />
      
      {/* Split Content Section */}
      <SplitContentSection />
      
      {/* Story Sections */}
      {storyData.map((story, index) => (
        <StorySection
          key={index}
          title={story.title}
          description={story.description}
          visualType={story.visualType}
          visualSrc={story.visualSrc}
          index={index}
        />
      ))}
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
