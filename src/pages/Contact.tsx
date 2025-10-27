import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Mail, MessageSquare, Clock, Phone, MapPin, ShieldCheck, Send, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/15 to-blue-500/20 animate-[gradient_8s_ease_infinite]" style={{ backgroundSize: '400% 400%' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.2),transparent_55%)]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-xl px-8 py-4 rounded-full border-2 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.3)] mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-base font-bold text-white">We're here to help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Contact Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Have questions? Reach out and our team will get back within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-24 ">
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Info column */}
          <div className="md:col-span-2 space-y-6">
            {[ 
              { icon: Mail, title: 'Email Us', desc: 'hello@labelpedia.pro' },
              { icon: MessageSquare, title: 'Live Chat', desc: 'Available on Pro & Business plans' },
              { icon: Clock, title: 'Response Time', desc: 'Within 24 hours (Mon–Fri)' },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500" />
                <Card className="relative border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-white/30 hover:bg-slate-800/80 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 relative">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
                        <item.icon className="w-6 h-6 text-white relative z-10" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* Extra info */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500" />
              <Card className="relative border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Compliance-first Support</h4>
                      <p className="text-gray-300 text-sm">Our regulatory experts review complex compliance questions to guide you to the right template.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-3">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500" />
              <Card className="relative border-2 border-white/10 bg-slate-900/90 backdrop-blur-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl font-black mb-6 text-white">Send us a message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                        <Input placeholder="Your name" className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-cyan-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                        <Input type="email" placeholder="your@email.com" className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Subject</label>
                      <Input placeholder="How can we help?" className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-cyan-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                      <Textarea placeholder="Tell us more about your question or concern..." rows={6} className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-cyan-400" />
                    </div>
                    <Button type="submit" size="lg" className="w-full text-base font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:shadow-[0_0_70px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300">
                      <Send className="w-5 h-5 mr-2" /> Send Message
                    </Button>
                    <p className="text-xs text-gray-400 text-center">
                      By submitting, you agree to our privacy policy and terms.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
