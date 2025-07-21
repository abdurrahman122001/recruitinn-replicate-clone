import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Brain, Target, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Users,
      title: "Submit Requirements",
      description: "Tell us about your ideal candidate, required skills, and company culture preferences.",
      details: [
        "Define role specifications",
        "Set skill requirements", 
        "Cultural fit criteria",
        "Timeline expectations"
      ]
    },
    {
      icon: Brain,
      title: "AI Candidate Matching",
      description: "Our AI analyzes thousands of profiles to find candidates that match your exact needs.",
      details: [
        "Advanced skill assessment",
        "Experience verification",
        "Cultural compatibility",
        "Performance predictions"
      ]
    },
    {
      icon: Target,
      title: "Smart Screening",
      description: "Automated technical and behavioral assessments filter the best candidates.",
      details: [
        "Technical skill tests",
        "Behavioral interviews",
        "Portfolio reviews",
        "Reference checks"
      ]
    },
    {
      icon: Rocket,
      title: "Final Selection",
      description: "Review top candidates with detailed insights and make confident hiring decisions.",
      details: [
        "Detailed candidate reports",
        "Interview scheduling",
        "Decision support tools",
        "Onboarding assistance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Recruitment Process
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A streamlined, AI-powered approach that transforms how you discover and hire top talent.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Step Number and Icon */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-card p-8 rounded-2xl shadow-card">
                      <h3 className="text-2xl font-bold text-card-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-16 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Our Process Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Data-driven results that speak for themselves
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-card p-8 rounded-2xl shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground mb-2">Faster Hiring</div>
                <p className="text-xs text-muted-foreground">
                  Reduce time-to-hire from months to weeks
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground mb-2">Match Accuracy</div>
                <p className="text-xs text-muted-foreground">
                  Higher candidate-role compatibility rates
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">70%</div>
                <div className="text-sm text-muted-foreground mb-2">Cost Reduction</div>
                <p className="text-xs text-muted-foreground">
                  Lower recruitment costs and overhead
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
              Ready to Experience Our Process?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let us show you how our AI-powered recruitment process can transform your hiring.
            </p>
            <Button size="lg" variant="secondary" className="text-primary">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}