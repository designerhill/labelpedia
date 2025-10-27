import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { BookOpen, FileQuestion, Video, Download, Search, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpCenter = () => {
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
              <span className="text-base font-bold text-white">Help Center</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Everything you need to know</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-6">
              Get answers on documentation, tutorials, FAQs, and resources.
            </p>
            {/* Search */}
            {/* <div className="max-w-2xl mx-auto flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input placeholder="Search help topics..." className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-cyan-400" />
              </div>
              <Button className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-400 font-bold">
                Search
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-24">
        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {[
            { icon: BookOpen, title: 'Documentation', desc: 'Comprehensive guides and tutorials', gradient: 'from-blue-500 to-cyan-500' },
            { icon: Video, title: 'Video Tutorials', desc: 'Step-by-step video guides', gradient: 'from-cyan-400 to-blue-400' },
            { icon: FileQuestion, title: 'FAQs', desc: 'Quick answers to common questions', gradient: 'from-blue-600 to-cyan-600' },
            { icon: Download, title: 'Resources', desc: 'Templates and guides to download', gradient: 'from-green-500 to-emerald-600' },
          ].map((item, i) => (
            <div key={i} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`} />
              <Card className="relative border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-white/30 hover:bg-slate-800/80 transition-all duration-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient}/20 relative`}>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} blur-md opacity-0 group-hover:opacity-40 transition-opacity`} />
                      <item.icon className="w-8 h-8 text-white relative z-10" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 text-center">
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 font-bold uppercase tracking-wider">FAQs</Badge>
          </div>
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-white/10 px-2">
                  <AccordionTrigger className="text-white hover:no-underline">How do I create my first label?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Start by entering your supplement facts, including ingredients, serving sizes, and nutritional information. Our system will automatically format it according to FDA and global regulations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-white/10 px-2">
                  <AccordionTrigger className="text-white hover:no-underline">What formats are supported?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    We support 25+ global formats including FDA (USA), EFSA (EU), Health Canada, TGA (Australia), and many more. Each format is automatically compliant with regional regulations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-white/10 px-2">
                  <AccordionTrigger className="text-white hover:no-underline">Can I export my labels?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes! Free users can export to PDF. Pro and Business users can export to both PDF and PNG formats at print-ready resolution.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-white/10 px-2">
                  <AccordionTrigger className="text-white hover:no-underline">How do I ensure my label is compliant?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Our platform automatically applies regulatory requirements for each region. We regularly update our system to reflect the latest guidelines from FDA, EFSA, and other regulatory bodies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-white/10 px-2">
                  <AccordionTrigger className="text-white hover:no-underline">What's included in team collaboration?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Business plan includes team collaboration for up to 5 users, with shared label libraries, comment features, and role-based permissions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <span className="text-sm">Continuously updated to reflect the latest regulations</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
