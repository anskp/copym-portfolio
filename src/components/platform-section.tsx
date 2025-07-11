import { Server, ShieldCheck, Zap, Users, Layers, Globe } from "lucide-react";
import ScrambledText from "@/components/ui/scramble";

interface Feature {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "Modular Architecture",
    description:
      "Micro-service design allows rapid deployment of new asset classes and compliance modules.",
    Icon: Layers,
  },
  {
    title: "Battle-Tested Security",
    description:
      "Audited smart contracts, SOC 2 Type II infrastructure, and on-chain proof-of-reserve.",
    Icon: ShieldCheck,
  },
  {
    title: "Global Compliance Engine",
    description:
      "Dynamic rule sets for KYC, AML, transfer restrictions, and jurisdictional limitations.",
    Icon: Globe,
  },
  {
    title: "High-Throughput Settlement",
    description:
      "Layer-2 rollups and cross-chain bridges enable near-instant swaps and redemptions.",
    Icon: Zap,
  },
  {
    title: "Institutional Custody",
    description:
      "MPC wallets with multi-sig fallback and insurance coverage up to $250M.",
    Icon: Server,
  },
  {
    title: "Community Governance",
    description:
      "Token-weighted voting provides transparent upgrades and fee distribution.",
    Icon: Users,
  },
];

export const PlatformSection = () => {
  return (
    <section className="container mx-auto px-6 py-20 relative z-10">
      <ScrambledText
        className="text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground leading-tight mx-auto max-w-max"
        radius={120}
      >
        Platform Highlights
      </ScrambledText>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="bg-white/10 backdrop-blur-md border border-border/20 rounded-3xl p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow"
          >
            <Icon className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformSection; 