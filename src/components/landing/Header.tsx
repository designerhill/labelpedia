import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/90 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-500/5 pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.jpg" 
              alt="labelpedia" 
              className="h-14 group-hover:scale-105 transition-transform duration-300"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#compliance" className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group">
              Compliance
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group">
              Documentation
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-white/10 font-semibold transition-all duration-300"
              asChild
            >
              <a href="https://supplement-labels.netlify.app/" target="_blank" rel="noopener noreferrer">
                Sign In
              </a>
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <a href="https://supplement-labels.netlify.app/" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-white/10 animate-[fadeInDown_0.3s_ease-out]">
            <a 
              href="#features" 
              className="block py-3 px-4 text-base font-semibold text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#compliance" 
              className="block py-3 px-4 text-base font-semibold text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Compliance
            </a>
            <a 
              href="#pricing" 
              className="block py-3 px-4 text-base font-semibold text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="block py-3 px-4 text-base font-semibold text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <Button 
                variant="ghost" 
                className="w-full text-gray-300 hover:text-white hover:bg-white/10 font-semibold justify-center"
                asChild
              >
                <a href="https://supplement-labels.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Sign In
                </a>
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all group"
                asChild
              >
                <a href="https://supplement-labels.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
