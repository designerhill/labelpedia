import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Globe2, 
  Download, 
  Shield, 
  Sparkles, 
  Users,
  Database,
  BarChart3,
  Lock,
  Zap
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "25+ Label Formats",
    description: "Support for USA, UK, Canada, Australia, EU, Mexico, India, and more regional formats",
    badge: "Multi-Regional",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Shield,
    title: "FDA Compliant",
    description: "Automatic validation against FDA 21 CFR 101.36 and international regulations",
    badge: "Certified",
    gradient: "from-green-500 to-emerald-500",
    iconBg: "from-green-500/20 to-emerald-500/10",
  },
  {
    icon: Sparkles,
    title: "3 Design Styles",
    description: "Choose from Standard, Modern, or Minimal aesthetics for your brand",
    badge: "Professional",
    gradient: "from-cyan-400 to-blue-400",
    iconBg: "from-cyan-400/20 to-blue-400/10",
  },
  {
    icon: Download,
    title: "High-Quality Export",
    description: "Download labels in PNG or PDF format ready for printing and distribution",
    badge: "Print-Ready",
    gradient: "from-blue-600 to-cyan-600",
    iconBg: "from-blue-600/20 to-cyan-600/10",
  },
  {
    icon: Database,
    title: "Recipe Management",
    description: "Save unlimited recipes with visual indicators and smart organization",
    badge: "Unlimited",
    gradient: "from-cyan-500 to-blue-500",
    iconBg: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track usage, compliance, and generate reports for your products",
    badge: "Premium",
    gradient: "from-blue-400 to-cyan-400",
    iconBg: "from-blue-400/20 to-cyan-400/10",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Invite team members and manage projects together with role-based access",
    badge: "Enterprise",
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "from-blue-500/20 to-cyan-400/10",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Bank-level encryption with GDPR compliance and data privacy protection",
    badge: "Protected",
    gradient: "from-cyan-600 to-blue-600",
    iconBg: "from-cyan-600/20 to-blue-600/10",
  },
];

export const Features = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Dynamic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10 animate-[gradient_8s_ease_infinite]" style={{ backgroundSize: '400% 400%' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.15),transparent_50%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-[fadeInUp_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-xl border-2 border-blue-500/30 rounded-full mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-white text-sm uppercase tracking-wider">Powerful Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Everything You Need for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite]" style={{ backgroundSize: '200% 200%' }}>
              Compliant Labels
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional-grade tools designed for supplement manufacturers and regulatory compliance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-[fadeInUp_0.8s_ease-out_both]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`} />
              
              {/* Card */}
              <Card className="relative h-full border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-white/30 hover:bg-slate-800/80 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]">
                <CardContent className="pt-8 pb-6 px-6 flex flex-col h-full">
                  {/* Icon with gradient background */}
                  <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${feature.iconBg} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 self-start relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    <feature.icon className="w-8 h-8 text-white relative z-10" />
                  </div>
                  
                  {/* Badge */}
                  <Badge variant="secondary" className={`mb-4 bg-gradient-to-r ${feature.gradient} text-white border-0 text-xs font-bold uppercase tracking-wider self-start`}>
                    {feature.badge}
                  </Badge>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-[fadeInUp_0.8s_ease-out_1s_both]">
          <p className="text-gray-400 text-lg mb-4">
            <span className="text-cyan-400 font-bold text-2xl">100%</span> compliant with global regulations
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Shield className="w-5 h-5 text-green-500" />
            <span>Trusted by industry leaders worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};
