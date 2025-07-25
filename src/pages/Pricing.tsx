import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses starting their recruitment journey",
      features: [
        "Up to 5 job postings",
        "AI candidate matching",
        "Basic skill assessments",
        "Email support",
        "Standard reporting",
        "30-day trial"
      ],
      limitations: [
        "No advanced analytics",
        "No custom branding",
        "No API access"
      ],
      popular: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing companies with regular hiring needs",
      features: [
        "Up to 25 job postings",
        "Advanced AI matching",
        "Comprehensive assessments",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Integration support",
        "Bulk candidate actions"
      ],
      limitations: [
        "No API access",
        "Limited integrations"
      ],
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with complex needs",
      features: [
        "Unlimited job postings",
        "Enterprise AI features",
        "Custom assessments",
        "Dedicated support",
        "White-label solution",
        "Full API access",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "Training & onboarding"
      ],
      limitations: [],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms]">
              Choose the plan that fits your hiring needs. All plans include our core AI-powered recruitment features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-3xl shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in hover-scale ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
                style={{animationDelay: `${index * 200}ms`}}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3">
                        <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground/70">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-primary hover:opacity-90'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about our pricing and features
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-2xl shadow-card animate-fade-in hover-scale" style={{animationDelay: '100ms'}}>
                <h3 className="font-bold text-card-foreground mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-card animate-fade-in hover-scale" style={{animationDelay: '200ms'}}>
                <h3 className="font-bold text-card-foreground mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-sm text-muted-foreground">
                  All plans come with a 30-day free trial. No credit card required to start.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-card animate-fade-in hover-scale" style={{animationDelay: '300ms'}}>
                <h3 className="font-bold text-card-foreground mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We accept all major credit cards, PayPal, and offer annual billing with discounts.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-card animate-fade-in hover-scale" style={{animationDelay: '400ms'}}>
                <h3 className="font-bold text-card-foreground mb-2">
                  Do you offer custom solutions?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes, our Enterprise plan includes custom features, integrations, and dedicated support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already transforming their recruitment with RecruitInn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}