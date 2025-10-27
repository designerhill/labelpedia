import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Shield, CheckCircle2, AlertCircle, Sparkles, Globe, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ComplianceGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/15 to-blue-500/20 animate-[gradient_8s_ease_infinite]" style={{ backgroundSize: '400% 400%' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.2),transparent_55%)]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-xl px-8 py-4 rounded-full border-2 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.3)] mb-6">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-base font-bold text-white">Regulatory Compliance</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Compliance Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Understanding supplement label regulations across major markets.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Disclaimer Card */}
          <div className="mb-12 group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500" />
            <Card className="relative border-2 border-yellow-500/30 bg-slate-900/90 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10">
                    <AlertCircle className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Important Disclaimer</h3>
                    <p className="text-gray-300">
                      This guide provides general information about supplement labeling regulations. Always consult with regulatory experts or legal counsel for your specific products and markets.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            {/* USA Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-gradient-to-r from-blue-500 to-red-500 text-white border-0 font-bold text-sm px-4 py-1">USA</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-white">FDA Requirements</h2>
              </div>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500" />
                <Card className="relative border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-white/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Supplement Facts Panel:</strong> Required format with serving size, servings per container, and ingredient amounts</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Structure/Function Claims:</strong> Must include disclaimer stating claims have not been evaluated by FDA</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Ingredient Listing:</strong> Must be listed in descending order by weight</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Net Contents:</strong> Must display both metric and US units</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* EU Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 font-bold text-sm px-4 py-1">EU</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-white">EFSA Requirements</h2>
              </div>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500" />
                <Card className="relative border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-white/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Nutrition Declaration:</strong> Energy value and nutrients must be displayed per 100g/ml</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Health Claims:</strong> Only authorized health claims from EU Register can be used</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Warning Statements:</strong> Required for products exceeding recommended daily intake</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Storage Instructions:</strong> Must be clearly stated on label</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Canada Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 font-bold text-sm px-4 py-1">Canada</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-white">Health Canada Requirements</h2>
              </div>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500" />
                <Card className="relative border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-white/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Natural Product Number (NPN):</strong> Required for all natural health products</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Bilingual Labeling:</strong> All information must appear in both English and French</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Recommended Use:</strong> Must state the purpose and recommended dosage</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300"><strong className="text-white">Risk Information:</strong> Cautions, warnings, and contraindications required</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <div className="mb-8 text-center">
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 font-bold uppercase tracking-wider">Best Practices</Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-center text-white">General Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Label Placement', desc: 'Ensure principal display panel is clearly visible and all required information is legible under normal purchase conditions.', gradient: 'from-blue-500 to-cyan-500' },
                  { title: 'Font Requirements', desc: 'Minimum font sizes apply for different label areas. Typically 1/16 inch for required statements.', gradient: 'from-cyan-400 to-blue-400' },
                  { title: 'Allergen Information', desc: 'Major allergens must be clearly identified. Some regions require bold or highlighted formatting.', gradient: 'from-blue-600 to-cyan-600' },
                  { title: 'Expiration Dating', desc: 'Many jurisdictions require expiration dates or best-before dates for supplement products.', gradient: 'from-green-500 to-emerald-600' },
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                    <Card className="relative h-full border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-white/30 hover:bg-slate-800/80 transition-all duration-500">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                        <p className="text-gray-300">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComplianceGuide;
