import { EnhancedButton } from "@/components/ui/enhanced-button";

export const CtaSection = () => {
  return (
    <section className="bg-white/5 backdrop-blur-md py-20 border-t border-b border-border/20">
      <div className="container mx-auto px-6 text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
          Ready to tokenize the future?
          <br />
          <span className="text-muted-foreground">Join us.</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your assets into digital tokens and unlock new possibilities with our cutting-edge platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <EnhancedButton
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700 text-white"
          >
            Get Started Today
          </EnhancedButton>
          <EnhancedButton variant="outline" size="lg">
            Schedule Demo
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 