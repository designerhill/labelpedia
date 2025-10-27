import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, FileText, Globe, Twitter, Linkedin, Github, Heart } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Label Formats", href: "#compliance" },
    { label: "Documentation", href: "#" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    // { label: "Blog", href: "#" },
    // { label: "Careers", href: "#" },
  ],
  resources: [
    { label: "Help Center", href: "/help" },
    // { label: "API Documentation", href: "#" },
    { label: "Compliance Guide", href: "/compliance-guide" },
    // { label: "Label Templates", href: "/label-templates" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container px-4 mx-auto py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              {/* Logo */}
              <a href="/" className="inline-block group">
                <img 
                  src="/logo.jpg" 
                  alt="labelpedia" 
                  className="h-14 group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Professional supplement label creation with global regulatory compliance.
            </p>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 text-xs font-bold mb-4">
              <Shield className="w-3 h-3 mr-1" />
              FDA Compliant
            </Badge>
            
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-300 group hover:scale-110"
              >
                <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-300 group hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-300 group hover:scale-110"
              >
                <Github className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Product links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8 bg-white/10" />
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            © 2025 Labelpedia. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> for compliance.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:hello@supplementlabelpro.com" 
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">Contact</span>
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-300">
                <FileText className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">Docs</span>
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-300">
                <Globe className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">Regions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
