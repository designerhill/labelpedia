import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles, Zap, Shield, Crown } from "lucide-react";
import { loadRazorpayScript, openRazorpayCheckout } from "@/lib/razorpay";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "month",
    description: "Perfect for getting started",
    badge: null,
    icon: Zap,
    features: [
      "3 supplement labels per month",
      "Basic label templates",
      "PDF export",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-gray-500 to-gray-600",
    glowColor: "rgba(107,114,128,0.3)",
  },
  {
    name: "Pro",
    price: "19",
    period: "month",
    description: "For serious supplement creators",
    badge: "Most Popular",
    icon: Sparkles,
    features: [
      "Unlimited supplement labels",
      "All label templates",
      "PDF & PNG export",
      "Save & manage recipes",
      "Priority email support",
      "Advanced nutrition database",
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.4)",
  },
  {
    name: "Business",
    price: "49",
    period: "month",
    description: "For teams and growing businesses",
    badge: "Enterprise",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Team collaboration (up to 5 users)",
      "Custom branding",
      "Batch label generation",
      "API access",
      "Dedicated onboarding",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgba(168,85,247,0.3)",
  },
];

export const Pricing = () => {
  const handleBuy = async (plan: (typeof plans)[number]) => {
    const price = Number(plan.price || 0);
    // Free plan -> route to app/signup or no-op
    if (!price) {
      window.open("https://supplement-labels.netlify.app/", "_blank", "noopener,noreferrer");
      return;
    }

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Unable to load Razorpay. Please check your connection and try again.");
      return;
    }

    try {
      // Create order on server (amount in smallest currency unit)
      const amount = Math.round(price * 100); // assuming USD display, smallest unit = cents
      const path = (import.meta.env.VITE_ORDER_API_PATH as string | undefined) || "/api/create-order"; // Netlify: "/.netlify/functions/create-order"
      const base = (import.meta.env.VITE_API_BASE_URL as string | undefined) || '';
      const endpoint = base
        ? `${base.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`
        : path;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "USD", receipt: `labelpedia_${plan.name}_${Date.now()}` }),
      });
      const contentType = res.headers.get('content-type') || '';
      let order: any = null;
      if (contentType.includes('application/json')) {
        order = await res.json();
      } else {
        const text = await res.text();
        throw new Error(text || `Empty response from server at ${endpoint}`);
      }
      if (!res.ok || !order?.id) throw new Error(order?.error || "Failed to initialize payment");

      const key = import.meta.env.VITE_RAZORPAY_KEY_ID as string | undefined;
      if (!key) {
        alert("Razorpay public key not configured. Set VITE_RAZORPAY_KEY_ID in your environment.");
        return;
      }

      openRazorpayCheckout({
        key,
        amount: order.amount,
        currency: order.currency,
        name: "Labelpedia",
        description: `${plan.name} Plan`,
        order_id: order.id,
        notes: { plan: plan.name },
        theme: { color: "#06B6D4" },
        handler: (response) => {
          // You can verify the payment on the server using response.razorpay_payment_id etc.
          // For now, show a simple confirmation and optional redirect.
          alert("Payment successful! Transaction: " + response.razorpay_payment_id);
        },
      });
    } catch (err: any) {
      alert(err?.message || "Unable to start payment. Please try again.");
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Dynamic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10 animate-[gradient_8s_ease_infinite]" style={{ backgroundSize: '400% 400%' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.15),transparent_60%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-[float_9s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-[float_11s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-[fadeInUp_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-xl border-2 border-blue-500/30 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-white text-sm uppercase tracking-wider">Pricing Plans</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite]" style={{ backgroundSize: '200% 200%' }}>
              Pricing
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your business needs. 
            <span className="block mt-2 text-cyan-400 font-bold">All plans include 14-day free trial.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative animate-[fadeInUp_0.8s_ease-out_both] ${
                plan.popular ? 'md:scale-110 z-10' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <Badge 
                    className={`bg-gradient-to-r ${plan.gradient} text-white border-0 px-6 py-2 text-sm font-bold animate-[pulse_2s_ease-in-out_infinite]`}
                    style={{ boxShadow: `0 0 30px ${plan.glowColor}` }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 ${
                plan.popular ? 'opacity-40' : ''
              }`} />
              
              {/* Card */}
              <Card className={`relative h-full border-2 bg-slate-900/90 backdrop-blur-xl transition-all duration-500 group-hover:bg-slate-800/90 ${
                plan.popular 
                  ? 'border-blue-500/50 shadow-[0_0_60px_rgba(59,130,246,0.3)]' 
                  : 'border-white/10 group-hover:border-white/30'
              } group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)]`}>
                
                <CardHeader className="pb-8 pt-10">
                  {/* Icon */}
                  <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${plan.gradient}/20 rounded-2xl self-start group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    <plan.icon className="w-8 h-8 text-white relative z-10" />
                  </div>
                  
                  <CardTitle className="text-3xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-400 text-base mt-2 group-hover:text-gray-300 transition-colors">
                    {plan.description}
                  </p>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-6xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        ${plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-400 text-lg">/{plan.period}</span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    size="lg"
                    className={`w-full mb-8 group/btn font-bold text-base py-6 transition-all duration-300 bg-gradient-to-r ${plan.gradient} hover:scale-105 border-2 border-white/20`}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 40px ${plan.glowColor}`}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
                    onClick={() => handleBuy(plan)}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3 animate-[fadeInUp_0.5s_ease-out_both]"
                        style={{ animationDelay: `${(index * 0.15) + (i * 0.05)}s` }}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="text-center space-y-6 animate-[fadeInUp_0.8s_ease-out_1s_both]">
          <div className="inline-block p-6 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 backdrop-blur-xl border-2 border-blue-500/20 rounded-2xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-green-500" />
              <p className="text-white text-lg font-bold">
                All plans include automatic regulatory updates
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              Stay compliant with continuously updated FDA and international standards
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-white font-semibold">14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-white font-semibold">Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-white font-semibold">No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
