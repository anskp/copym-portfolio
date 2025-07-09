import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Github, Twitter, Youtube, Linkedin, Mail } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-border/20">
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center space-y-8 mb-16">
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

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 border-t border-border/20 pt-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-foreground rounded-full"></div>
              <span className="text-xl font-bold text-foreground">COPYm</span>
            </div>
            <p className="text-muted-foreground">
              Leading the future of real-world asset tokenization with innovative blockchain solutions.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Platform</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border/20">
          <p className="text-muted-foreground">
            © 2025 COPYm Technologies. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="w-10 h-10 bg-muted hover:bg-foreground hover:text-background rounded-full flex items-center justify-center transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-muted hover:bg-foreground hover:text-background rounded-full flex items-center justify-center transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-muted hover:bg-foreground hover:text-background rounded-full flex items-center justify-center transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-muted hover:bg-foreground hover:text-background rounded-full flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-muted hover:bg-foreground hover:text-background rounded-full flex items-center justify-center transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}