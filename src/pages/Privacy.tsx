import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Shield, Lock, Eye, Database, UserCheck, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
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
              <Lock className="w-5 h-5 text-green-500" />
              <span className="text-base font-bold text-white">Your Privacy Matters</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Supplement Label Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Personal Information</h3>
                  <p className="text-gray-300 mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="space-y-2 pl-4">
                    {[
                      'Name and email address',
                      'Company name and business information',
                      'Payment and billing information',
                      'Supplement formulation data and label content',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 pl-4">
                    {[
                      'Log data (IP address, browser type, pages visited)',
                      'Device information',
                      'Usage data and analytics',
                      'Cookies and similar tracking technologies',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-black text-white">How We Use Your Information</h2>
              </div>
              
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 pl-4">
                {[
                  'Provide, maintain, and improve our services',
                  'Process your transactions and manage your account',
                  'Send you technical notices and support messages',
                  'Respond to your comments and questions',
                  'Analyze usage patterns and optimize our platform',
                  'Detect, prevent, and address technical issues and fraud',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Data Sharing and Disclosure</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  'With your consent or at your direction',
                  'With service providers who perform services on our behalf',
                  'To comply with legal obligations',
                  'To protect our rights, privacy, safety, or property',
                  'In connection with a business transfer or acquisition',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10">
                  <Lock className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10">
                  <UserCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Your Rights</h2>
              </div>
              
              <p className="text-gray-300 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="space-y-2 pl-4">
                {[
                  'Access to your personal information',
                  'Correction of inaccurate data',
                  'Deletion of your data',
                  'Data portability',
                  'Opt-out of marketing communications',
                  'Restriction of processing',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-2 border-blue-500/30 bg-slate-900/90 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">Contact Us</h2>
                  <p className="text-gray-300">
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@supplementlabelpro.com" className="text-cyan-400 hover:text-cyan-300 font-semibold underline">
                      privacy@labelpedia.pro
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
