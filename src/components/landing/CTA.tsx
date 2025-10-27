import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles, Rocket, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Dynamic animated gradient meshes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/15 to-blue-500/20 animate-[gradient_6s_ease_infinite] opacity-50" 
           style={{ backgroundSize: '400% 400%' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%)] animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.25),transparent_50%)] animate-[pulse_5s_ease-in-out_infinite]" 
           style={{ animationDelay: '1.5s' }} />
      
      {/* Bold floating orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-10 w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full blur-3xl opacity-30 animate-[float_12s_ease-in-out_infinite]" 
           style={{ animationDelay: '2s' }} />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] animate-[pulse_8s_ease-in-out_infinite]" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust badge */}
          <div className="mb-10 flex justify-center animate-[fadeInDown_0.8s_ease-out]">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-xl px-8 py-4 rounded-full border-2 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-300 group cursor-pointer">
              <Shield className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
              <span className="text-base font-bold text-white">14-Day Free Trial • No Credit Card Required</span>
              <Sparkles className="w-5 h-5 text-cyan-400 animate-[spin_3s_linear_infinite]" />
            </div>
          </div>
          
          {/* Main headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[1.1] animate-[fadeInUp_0.8s_ease-out] tracking-tight">
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Create
            </span>
            <span className="block mt-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite] drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                  style={{ backgroundSize: '200% 200%' }}>
              Compliant Labels?
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            Join <span className="text-cyan-400 font-bold">500+ supplement manufacturers</span> creating professional, FDA-compliant labels in minutes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
            <Button 
              size="lg" 
              className="text-xl px-14 py-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-400 shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:shadow-[0_0_100px_rgba(59,130,246,0.9)] hover:scale-110 transition-all duration-300 group font-bold border-2 border-white/20 animate-[pulse_3s_ease-in-out_infinite]"
            >
              <Rocket className="mr-3 w-7 h-7 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300" />
              Start Your Free Trial
              <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-14 py-8 border-2 border-white/30 backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-bold text-white hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Schedule Demo
              <Sparkles className="ml-3 w-6 h-6" />
            </Button>
          </div>
          
          {/* Social proof stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10 animate-[fadeInUp_0.8s_ease-out_0.7s_both]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-slate-900" />
                ))}
              </div>
              <span className="text-base font-semibold text-white ml-2">500+ Companies Trust Us</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-500" />
              <span className="text-base font-semibold text-white">100% FDA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className="text-base font-semibold text-white">4.9/5 Rating</span>
            </div>
          </div>
          
          {/* Contact */}
          <div className="inline-block p-6 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 backdrop-blur-xl border-2 border-blue-500/20 rounded-2xl animate-[fadeInUp_0.8s_ease-out_0.9s_both]">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-base">Questions? Contact us at</span>
              <a 
                href="mailto:hello@supplementlabelpro.com" 
                className="text-cyan-400 hover:text-cyan-300 font-bold hover:underline transition-colors"
              >
                hello@labelpedia.pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
