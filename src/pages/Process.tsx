import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Brain, Filter, UserCheck } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Submit Requirements",
      description: "Tell us your hiring needs and we'll take care of the rest",
      icon: Upload,
    },
    {
      number: "02", 
      title: "AI Matching",
      description: "Our AI finds the perfect candidates from our talent pool",
      icon: Brain,
    },
    {
      number: "03",
      title: "Smart Screening",
      description: "Automated assessments filter top-quality candidates",
      icon: Filter,
    },
    {
      number: "04",
      title: "Final Selection",
      description: "Review candidates and make confident hiring decisions",
      icon: UserCheck,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Simple. Smart. 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Effective.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Our 4-step process connects you with top talent in record time
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 transform translate-x-12">
                      <ArrowRight className="w-6 h-6 text-muted-foreground/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-16">Why It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="text-5xl font-bold text-primary mb-4">85%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Faster</div>
                <p className="text-muted-foreground">Reduce hiring time significantly</p>
              </div>
              
              <div>
                <div className="text-5xl font-bold text-primary mb-4">95%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Accurate</div>
                <p className="text-muted-foreground">Better candidate matches</p>
              </div>
              
              <div>
                <div className="text-5xl font-bold text-primary mb-4">70%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Savings</div>
                <p className="text-muted-foreground">Lower recruitment costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join hundreds of companies already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}