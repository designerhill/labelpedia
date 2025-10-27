import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Shield, CheckCircle2, Lock, Database, Globe, FileText, UserCheck, Mail, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const GDPR = () => {
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
              <span className="text-base font-bold text-white">European Union Regulation</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                GDPR Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              How LabelPedia Pro complies with the General Data Protection Regulation.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Commitment Card */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">Our Commitment to GDPR</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Labelpedia Pro is committed to protecting the privacy and security of your personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Your Rights Under GDPR */}
            <section>
              <h2 className="text-4xl font-black text-white mb-8">Your Rights Under GDPR</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Right to Access", desc: "You have the right to request a copy of the personal data we hold about you." },
                  { title: "Right to Rectification", desc: "You can request correction of inaccurate or incomplete personal data." },
                  { title: "Right to Erasure", desc: "You can request deletion of your personal data in certain circumstances." },
                  { title: "Right to Data Portability", desc: "You can request your data in a machine-readable format to transfer to another service." },
                  { title: "Right to Restriction", desc: "You can request restriction of processing of your personal data in certain situations." },
                  { title: "Right to Object", desc: "You have the right to object to certain types of processing of your data." },
                ].map((right, i) => (
                  <Card key={i} className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-4">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{right.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {right.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* How We Protect Your Data */}
            <section>
              <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                      <Lock className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-black text-white">How We Protect Your Data</h2>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { title: "Encryption", desc: "All data is encrypted in transit and at rest using industry-standard protocols" },
                      { title: "Access Controls", desc: "Strict access controls ensure only authorized personnel can access data" },
                      { title: "Data Minimization", desc: "We only collect data necessary for providing our services" },
                      { title: "Regular Audits", desc: "We conduct regular security audits and assessments" },
                      { title: "Staff Training", desc: "All staff receive training on data protection and GDPR compliance" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">
                          <strong className="text-white">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Legal Basis for Processing */}
            <section>
              <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10">
                      <FileText className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-3xl font-black text-white">Legal Basis for Processing</h2>
                  </div>
                  <p className="text-gray-300 mb-4">We process your personal data under the following legal bases:</p>
                  <ul className="space-y-2 pl-4">
                    {[
                      { title: "Contract Performance", desc: "To provide you with our services" },
                      { title: "Legitimate Interests", desc: "To improve our services and prevent fraud" },
                      { title: "Legal Compliance", desc: "To comply with applicable laws and regulations" },
                      { title: "Consent", desc: "For marketing communications (where required)" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span><strong className="text-white">{item.title}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Data Retention */}
            <section>
              <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10">
                      <Database className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h2 className="text-3xl font-black text-white">Data Retention</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    We retain your personal data only for as long as necessary to:
                  </p>
                  <ul className="space-y-2 pl-4 mb-4">
                    {[
                      'Provide you with our services',
                      'Comply with legal obligations',
                      'Resolve disputes and enforce agreements',
                      'Maintain business records as required by law',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-300">
                    Once data is no longer needed, it is securely deleted or anonymized.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* International Data Transfers */}
            <section>
              <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10">
                      <Globe className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h2 className="text-3xl font-black text-white">International Data Transfers</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    When we transfer data outside the EEA, we ensure appropriate safeguards are in place, such as:
                  </p>
                  <ul className="space-y-2 pl-4">
                    {[
                      'Standard Contractual Clauses (SCCs)',
                      'Adequacy decisions by the European Commission',
                      'Other legally approved transfer mechanisms',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Exercising Your Rights */}
            <section>
              <Card className="border-2 border-blue-500/30 bg-slate-900/90 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                      <UserCheck className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-black text-white">Exercising Your Rights</h2>
                  </div>
                  <p className="text-gray-300 mb-6">
                    To exercise any of your GDPR rights or if you have questions about how we process your data, please contact our Data Protection Officer:
                  </p>
                  <div className="flex flex-col gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-950/50 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="w-4 h-4 text-cyan-400" />
                          <p className="font-bold text-white">Email:</p>
                        </div>
                        <p className="text-cyan-400">dpo@labelpedia.pro</p>
                      </div>
                      <div className="bg-slate-950/50 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-4 h-4 text-cyan-400" />
                          <p className="font-bold text-white">Response Time:</p>
                        </div>
                        <p className="text-gray-300">We will respond within 30 days</p>
                      </div>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Supervisory Authority */}
            <section>
              <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10">
                      <Shield className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-white mb-3">Supervisory Authority</h2>
                      <p className="text-gray-300 leading-relaxed">
                        If you believe we have not handled your data in accordance with GDPR, you have the right to lodge a complaint with your local supervisory authority.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
