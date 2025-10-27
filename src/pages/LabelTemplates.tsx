import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Download, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    name: "Classic Protein",
    category: "Protein & Fitness",
    description: "Perfect for protein powders and fitness supplements",
    popular: true,
  },
  {
    name: "Vitamin Complex",
    category: "Vitamins & Minerals",
    description: "Ideal for multivitamins and mineral supplements",
    popular: true,
  },
  {
    name: "Herbal Blend",
    category: "Herbal & Natural",
    description: "Designed for herbal and botanical products",
    popular: false,
  },
  {
    name: "Pre-Workout",
    category: "Sports Nutrition",
    description: "Optimized for pre-workout and energy supplements",
    popular: true,
  },
  {
    name: "Joint Support",
    category: "Health & Wellness",
    description: "Great for joint health and mobility supplements",
    popular: false,
  },
  {
    name: "Omega-3",
    category: "Essential Fatty Acids",
    description: "Perfect for fish oil and omega supplements",
    popular: false,
  },
];

const LabelTemplates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Label Templates</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Professional templates designed for every supplement category.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{template.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  {template.popular && (
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{template.description}</p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Preview Template
                </Button>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-muted/50">
            <h2 className="text-2xl font-bold mb-4">Custom Templates</h2>
            <p className="text-muted-foreground mb-6">
              Need a custom template designed for your brand? Business plan users can request custom templates 
              tailored to their specific needs.
            </p>
            <Button>Request Custom Template</Button>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LabelTemplates;
