import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Globe, Award } from "lucide-react";

const regions = [
  {
    flag: "🇺🇸",
    name: "United States",
    formats: 11,
    standard: "FDA 21 CFR 101.36",
    features: ["Standard Vertical", "Dual Column", "Simplified", "Infant", "Children", "Bilingual"],
    gradient: "from-blue-500 to-red-500"
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    formats: 2,
    standard: "UK Nutrition Labelling",
    features: ["Back of Pack", "Traffic Light Front"],
    gradient: "from-blue-600 to-red-600"
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    formats: 2,
    standard: "Health Canada",
    features: ["Standard", "Dual Column"],
    gradient: "from-red-500 to-red-600"
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    formats: 1,
    standard: "FSANZ Food Standards",
    features: ["Standard Label"],
    gradient: "from-blue-500 to-blue-600"
  },
  {
    flag: "🇪🇺",
    name: "European Union",
    formats: 1,
    standard: "EU Regulation 1169/2011",
    features: ["Standard Declaration"],
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    flag: "🇲🇽",
    name: "Mexico",
    formats: 2,
    standard: "COFEPRIS Standards",
    features: ["Standard", "Dual Language"],
    gradient: "from-green-600 to-red-600"
  },
  {
    flag: "🇮🇳",
    name: "India",
    formats: 1,
    standard: "FSSAI Regulations",
    features: ["Standard Label"],
    gradient: "from-orange-500 to-green-600"
  },
];

export const Compliance = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Dynamic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10 animate-[gradient_8s_ease_infinite]" style={{ backgroundSize: '400% 400%' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.15),transparent_60%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-[float_11s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-[float_13s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-[fadeInUp_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-xl border-2 border-blue-500/30 rounded-full mb-6">
            <Globe className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-white text-sm uppercase tracking-wider">Global Compliance</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite] text-7xl md:text-8xl" style={{ backgroundSize: '200% 200%' }}>
              25+
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Regional Label Formats
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet regulatory requirements across major markets with pre-configured, compliant label templates
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {regions.map((region, index) => (
            <div
              key={index}
              className="group relative animate-[fadeInUp_0.8s_ease-out_both]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${region.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500`} />
              
              {/* Card */}
              <Card className="relative h-full border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-white/30 hover:bg-slate-800/80 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]">
                <CardContent className="pt-6 pb-6 px-6">
                  {/* Header with flag and name */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {region.flag}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {region.name}
                        </h3>
                        <Badge className={`mt-2 bg-gradient-to-r ${region.gradient} text-white border-0 text-xs font-bold`}>
                          {region.formats} {region.formats === 1 ? 'Format' : 'Formats'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Compliance standard box */}
                  <div className="mb-5 p-4 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-xl border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-center gap-2 mb-1 relative z-10">
                      <Award className="w-4 h-4 text-cyan-400" />
                      <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Compliance Standard</p>
                    </div>
                    <p className="text-sm font-bold text-white relative z-10">{region.standard}</p>
                  </div>
                  
                  {/* Features list */}
                  <div className="space-y-2.5">
                    {region.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 group/item animate-[fadeInUp_0.5s_ease-out_both]"
                        style={{ animationDelay: `${(index * 0.1) + (i * 0.05)}s` }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="text-center space-y-6 animate-[fadeInUp_0.8s_ease-out_1s_both]">
          <div className="inline-block p-6 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 backdrop-blur-xl border-2 border-blue-500/20 rounded-2xl">
            <p className="text-gray-300 mb-4 text-lg">
              <span className="font-bold text-white">Coming soon:</span> Brazil, Japan, South Korea, GCC countries
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 font-bold uppercase tracking-wider">
                Constantly Updated with Latest Regulations
              </Badge>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-white">Auto-Updated Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-white">7 Countries Supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
