import { useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { VeltraSection } from "@/components/veltra-section";
import { SplitContentSection } from "@/components/split-content-section";
import { WorkflowScrollSection } from "@/components/workflow-scroll-section";
import { FooterSection } from "@/components/footer-section";
import GallerySection from "@/components/gallery-section";

const Index = () => {
  // Set light mode by default
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const workflowSteps = [
    {
      title: "Issuer Onboarding",
      description:
        "Asset owners begin by submitting their organization details and required documents. COPYm runs automated KYB checks to approve trusted issuers in minutes.",
      visualSrc: "/images/onboard-an-issuer-removebg-preview.png",
    },
    {
      title: "Investor KYC",
      description:
        "Investors complete a quick KYC verification to access regulated offerings while meeting global compliance standards.",
      visualSrc: "/images/KYC-removebg-preview.png",
    },
    {
      title: "Decentralized Identity (DID)",
      description:
        "Approved users receive a DID that works across multiple blockchains — enabling seamless wallet connections and cross-chain asset management.",
      visualSrc: "/images/DID-removebg-preview.png",
    },
    {
      title: "Asset Tokenization",
      description:
        "Issuers mint blockchain-native tokens that represent their real-world assets. Smart contracts embed legal and ownership data on-chain.",
      visualSrc: "/images/asset-tokenization.png",
    },
    {
      title: "Credential Verification",
      description:
        "COPYm issues two types of Verifiable Credentials: KYC VC for investors and Asset VC for tokenized assets. Issuers can always see who holds their tokens.",
      visualSrc: "/images/credential-verify-removebg-preview.png",
    },
    {
      title: "Token Marketplace",
      description:
        "Verified investors buy, sell, and trade RWA tokens in our compliant marketplace with real-time settlement and transparent pricing.",
      visualSrc: "/images/market-place-removebg-preview.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Veltra Section */}
      <VeltraSection />
      
      {/* Split Content Section */}
      <SplitContentSection />
      
      {/* Scroll Workflow Sections */}
      <WorkflowScrollSection steps={workflowSteps} />

      {/* Circular Gallery Section */}
      <GallerySection />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
