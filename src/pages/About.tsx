import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Target, Award, Globe, CheckCircle2, Rocket, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/15 to-blue-500/20 animate-[gradient_8s_ease_infinite]" style={{ backgroundSize: '400% 400%' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.2),transparent_55%)]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-xl border-2 border-blue-500/30 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-white text-sm uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Built for</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite]" style={{ backgroundSize: '200% 200%' }}>
                Compliant Labels at Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We simplify supplement label creation with accuracy, speed, and global regulatory confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[ 
              { label: 'Companies', value: '500+' },
              { label: 'Labels Generated', value: '10k+' },
              { label: 'Countries', value: '25+' },
              { label: 'Avg. Rating', value: '4.9/5' },
            ].map((stat, i) => (
              <Card key={i} className="bg-slate-900/80 border-2 border-white/10 backdrop-blur-xl text-center p-6 hover:border-white/30 hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Team / Values */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: 'Our Mission', desc: 'Empower supplement brands of all sizes with professional, compliant labels that meet global regulatory standards.', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Target, title: 'Our Vision', desc: 'A world where creating compliant supplement labels is simple, fast, and accessible to everyone.', gradient: 'from-cyan-400 to-blue-400' },
              { icon: Users, title: 'Our Team', desc: 'Regulatory experts, designers, and developers passionate about supplement compliance and product quality.', gradient: 'from-blue-600 to-cyan-600' },
              { icon: Award, title: 'Our Values', desc: 'Accuracy, compliance, simplicity, and customer success drive everything we do.', gradient: 'from-green-500 to-emerald-600' },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                <Card className="relative h-full border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-white/30 hover:bg-slate-800/80 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]">
                  <CardContent className="p-8">
                    <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${item.gradient}/20 rounded-2xl self-start group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                      <item.icon className="w-8 h-8 text-white relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 font-bold uppercase tracking-wider">Our Story</Badge>
            </div>
            <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-4">
                  Founded by supplement industry veterans who experienced firsthand the complexity and frustration of creating compliant labels, Supplement Label Pro was born from a simple idea: there has to be a better way.
                </p>
                <p className="text-gray-300 mb-4">
                  After years of working with regulatory agencies worldwide and helping countless brands navigate the complex landscape of supplement labeling, we built the tool we wish we'd had from the start.
                </p>
                <p className="text-gray-300">
                  Today, we serve thousands of supplement brands across the globe, from startups to established manufacturers, helping them create compliant, professional labels in minutes instead of days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-xl border-2 border-blue-500/30 rounded-full mb-6">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="font-bold text-white text-sm">14-Day Free Trial • No Credit Card Required</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to make compliance your advantage?</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-lg px-10 py-7 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-400 text-white font-bold shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:shadow-[0_0_70px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300 group">
                <Rocket className="mr-2 w-5 h-5" /> Start Free Trial
              </Button>
              <Button variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:border-white/50 text-white font-bold transition-all duration-300">
                <Globe className="mr-2 w-5 h-5" /> Explore Formats
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
