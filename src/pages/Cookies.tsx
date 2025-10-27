import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Cookie, Shield, BarChart3, Settings, Target, Globe, Sliders, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Cookies = () => {
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
              <Cookie className="w-5 h-5 text-orange-400" />
              <span className="text-base font-bold text-white">Data & Tracking Policy</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Cookie Policy
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
          {/* What Are Cookies */}
          <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/10">
                  <Cookie className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-3">What Are Cookies</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Cookies */}
          <section>
            <h2 className="text-4xl font-black text-white mb-8">How We Use Cookies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Essential Cookies */}
              <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 mb-3">
                    Essential
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and session management.
                  </p>
                  <ul className="space-y-2">
                    {['Authentication and account access', 'Security and fraud prevention', 'Session management'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Performance Cookies */}
              <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-400" />
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0 mb-3">
                    Performance
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-3">Performance Cookies</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="space-y-2">
                    {['Usage analytics', 'Error tracking', 'Performance monitoring'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Functionality Cookies */}
              <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 mb-4">
                    <Settings className="w-6 h-6 text-purple-400" />
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 mb-3">
                    Functionality
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-3">Functionality Cookies</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    These cookies enable enhanced functionality and personalization based on your preferences.
                  </p>
                  <ul className="space-y-2">
                    {['Language preferences', 'User interface customization', 'Saved templates and recipes'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Marketing Cookies */}
              <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/10 mb-4">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 mb-3">
                    Marketing
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-3">Marketing Cookies</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                  <ul className="space-y-2">
                    {['Advertising personalization', 'Campaign tracking', 'Conversion measurement'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-black text-white">Third-Party Cookies</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  We may use third-party services that set cookies on your device. These include:
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    'Google Analytics for usage analysis',
                    'Payment processors for transaction security',
                    'Customer support tools for help and chat features',
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

          {/* Managing Cookies */}
          <section>
            <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10">
                    <Sliders className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-black text-white">Managing Cookies</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    'Most browsers allow you to refuse or accept cookies',
                    'You can delete cookies that have already been set',
                    'You can set your browser to notify you when cookies are being sent',
                    'Note that disabling cookies may affect the functionality of our service',
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

          {/* Changes to This Policy */}
          <section>
            <Card className="border-2 border-white/10 bg-slate-900/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-white mb-3">Changes to This Policy</h2>
                    <p className="text-gray-300 leading-relaxed">
                      We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <section>
            <Card className="border-2 border-blue-500/30 bg-slate-900/90 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-white mb-3">Contact Us</h2>
                    <p className="text-gray-300">
                      If you have questions about our use of cookies, please contact us at{" "}
                      <a href="mailto:privacy@supplementlabelpro.com" className="text-cyan-400 hover:text-cyan-300 font-semibold underline">
                        privacy@supplementlabelpro.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
