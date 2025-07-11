import { useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { VeltraSection } from "@/components/veltra-section";
import { SplitContentSection } from "@/components/split-content-section";
import {InvestorContentSection} from "@/components/investor-content-section";
import { WorkflowScrollSection } from "@/components/workflow-scroll-section";
import {InvestorWorkflow} from "@/components/investor-workflow";
import { CtaSection } from "@/components/cta-section";
import GallerySection from "@/components/gallery-section";

const Index = () => {
  // Set light mode by default
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const issuerworkflowSteps = [
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

  const investorworkflowSteps = [
    {
      title: "Investor Onboarding",
      description:
        "Investors begin their journey by creating an account and submitting the required details to activate their investing profile on COPYm.",
      visualSrc: "/images/investor-onboards-removebg-preview.png",
    },
    {
      title: "Wallet-Linked DID",
      description:
        "A decentralized identity (DID) is automatically generated and linked to the investor’s wallet, enabling secure cross-chain interactions.",
      visualSrc: "/images/wallets-removebg-preview.png",
    },
    {
      title: "VC as Soul-Bound Token",
      description:
        "Verifiable Credentials are minted as non-transferable Soul-Bound Tokens (SBT), giving investors immutable proof of identity and compliance.",
      visualSrc: "/images/SBT-investor.png",
    },
    {
      title: "Tokenized Assets Marketplace",
      description:
        "Investors can browse a curated catalog of tokenized real-world assets, each backed by transparent data and legal assurances.",
      visualSrc: "/images/tokens-marketplace-removebg-preview.png",
    },
    {
      title: "Token Trading Marketplace",
      description:
        "Purchase, sell, and trade selected tokens effortlessly in COPYm’s regulated marketplace with instant settlement and clear pricing.",
      visualSrc: "/images/token-marketplace-removebg-preview.png",
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
      <WorkflowScrollSection steps={issuerworkflowSteps} />

      <InvestorContentSection />

      <InvestorWorkflow steps={investorworkflowSteps} />

      {/* Circular Gallery Section */}
      <GallerySection />

      {/* CTA Section */}
      <CtaSection />
      
    </div>
  );
};

export default Index;
