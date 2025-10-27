import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FileText, Scale, UserCheck, CreditCard, AlertTriangle, XCircle, RefreshCw, Mail, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
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
              <Scale className="w-5 h-5 text-blue-400" />
              <span className="text-base font-bold text-white">Legal Agreement</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Terms of Service
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
          {/* Agreement to Terms */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">Agreement to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing or using Supplement Label Pro, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">Service Description</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Supplement Label Pro provides a platform for creating, managing, and exporting supplement product labels that comply with various regulatory standards. We provide tools and templates but do not guarantee regulatory approval of your specific products.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10">
                  <UserCheck className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-black text-white">User Responsibilities</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Account Security</h3>
                  <ul className="space-y-2 pl-4">
                    {[
                      'You are responsible for maintaining the security of your account',
                      'You must not share your account credentials',
                      'You must notify us immediately of any unauthorized access',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Compliance</h3>
                  <ul className="space-y-2 pl-4">
                    {[
                      'You are solely responsible for ensuring your labels comply with applicable regulations',
                      'You must verify all information before using labels for commercial purposes',
                      'You should consult with regulatory experts for your specific products and markets',
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

          {/* Intellectual Property */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10">
                  <Scale className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Intellectual Property</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Your Content</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You retain all rights to the content you create using our service, including supplement formulations and label designs. By using our service, you grant us a limited license to host and process your content.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Platform</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The Supplement Label Pro platform, including all software, templates, and documentation, is protected by copyright and other intellectual property rights. You may not copy, modify, or distribute our platform.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription and Payments */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                  <CreditCard className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Subscription and Payments</h2>
              </div>
              
              <ul className="space-y-2 pl-4">
                {[
                  'Subscriptions are billed on a recurring basis',
                  'You can cancel your subscription at any time',
                  'Refunds are provided according to our refund policy',
                  'We reserve the right to change pricing with 30 days notice',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Limitation of Liability</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                Supplement Label Pro provides tools to help create compliant labels, but we:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  'Do not guarantee regulatory approval of your products',
                  'Are not responsible for any regulatory violations or penalties',
                  'Provide the service "as is" without warranties of any kind',
                  'Limit our liability to the amount you paid for the service',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/10">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">Termination</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10">
                  <RefreshCw className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">Changes to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform.
                  </p>
                </div>
              </div>
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
                  <h2 className="text-3xl font-black text-white mb-3">Contact</h2>
                  <p className="text-gray-300">
                    For questions about these Terms of Service, contact us at{" "}
                    <a href="mailto:legal@labelpedia.pro" className="text-cyan-400 hover:text-cyan-300 font-semibold underline">
                      legal@labelpedia.pro
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

export default Terms;
