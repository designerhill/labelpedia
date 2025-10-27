import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Shield, Globe, Zap, Sparkles, Trophy, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Dynamic animated gradient meshes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-blue-500/30 animate-[gradient_6s_ease_infinite] opacity-40" 
           style={{ backgroundSize: '400% 400%' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(217,91%,60%,0.4),transparent_40%)] animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(189,94%,43%,0.3),transparent_50%)] animate-[pulse_5s_ease-in-out_infinite]" 
           style={{ animationDelay: '1.5s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(200,100%,50%,0.3),transparent_60%)] animate-[pulse_6s_ease-in-out_infinite]" 
           style={{ animationDelay: '3s' }} />
      
      {/* Bold floating orbs with stronger colors */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite]" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 animate-[float_12s_ease-in-out_infinite]" 
           style={{ animationDelay: '4s' }} />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] animate-[pulse_8s_ease-in-out_infinite]" />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          {/* Dynamic trust badge with glow */}
          <div className="mb-8 flex justify-center animate-[fadeInDown_0.8s_ease-out]">
            <Badge variant="secondary" className="px-8 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 text-base shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] group cursor-pointer">
              <Sparkles className="w-5 h-5 mr-2 text-cyan-400 animate-[spin_3s_linear_infinite] group-hover:animate-[spin_1s_linear_infinite]" />
              <span className="font-bold text-white">FDA Compliant • 25+ Global Formats • Instant Generation</span>
            </Badge>
          </div>
          
          {/* Bold headline with explosive gradients */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[1.1] animate-[fadeInUp_0.8s_ease-out] tracking-tight">
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite] drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                  style={{ backgroundSize: '200% 200%' }}>
              Create Stunning
            </span>
            <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent mt-2">
              Nutrition Labels
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite]"
                  style={{ backgroundSize: '200% 200%', animationDelay: '1s' }}>
              In Seconds, Not Hours
            </span>
          </h1>
          
          {/* Power subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            The most powerful FDA-compliant nutrition label generator. 
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
              Professional results. Zero complexity.
            </span>
          </p>
          
          {/* Dynamic feature badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
            {[
              { icon: Shield, text: "FDA Compliant", color: "from-green-500 to-emerald-600" },
              { icon: Globe, text: "25+ Regions", color: "from-blue-500 to-cyan-500" },
              { icon: Zap, text: "Instant Export", color: "from-cyan-400 to-blue-400" },
              { icon: Trophy, text: "Pro Quality", color: "from-blue-600 to-cyan-600" },
            ].map((item, i) => (
              <div key={i} className="group relative animate-[fadeInUp_0.8s_ease-out_both]" 
                   style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                <div className="relative flex items-center gap-3 px-6 py-3 bg-slate-900/80 backdrop-blur-xl rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                  <item.icon className="w-6 h-6 text-white" />
                  <span className="font-bold text-white text-lg">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bold CTA section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-[fadeInUp_0.8s_ease-out_0.7s_both]">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:shadow-[0_0_80px_rgba(59,130,246,0.8)] hover:scale-110 transition-all duration-300 group font-bold border-2 border-white/20 animate-[pulse_3s_ease-in-out_infinite]"
            >
              <Rocket className="mr-3 w-7 h-7 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300" />
              Start Free Trial Now
              <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-12 py-8 border-2 border-white/30 backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-bold text-white hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Watch Demo
              <Sparkles className="ml-3 w-6 h-6" />
            </Button>
          </div>
          
          {/* Social proof with stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 animate-[fadeInUp_0.8s_ease-out_0.9s_both]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-slate-900" />
                ))}
              </div>
              <span className="text-lg font-semibold text-white ml-2">500+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="text-lg font-semibold text-white">10,000+ Labels Created</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span className="text-lg font-semibold text-white">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
