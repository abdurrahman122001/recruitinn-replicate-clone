import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Brain, Filter, UserCheck, Clock, Target, Award, TrendingUp } from "lucide-react";

export default function Process() {
  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Share your hiring needs with our intelligent system",
      icon: Upload,
      features: ["Role specifications", "Skills matrix", "Culture fit", "Timeline planning"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: "AI-Powered Matching",
      description: "Advanced algorithms find your perfect candidates",
      icon: Brain,
      features: ["Deep skill analysis", "Experience mapping", "Behavioral patterns", "Success predictions"],
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Smart Filtering",
      description: "Automated screening saves time and improves quality",
      icon: Filter,
      features: ["Technical assessments", "Soft skills evaluation", "Portfolio review", "Background verification"],
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Final Selection",
      description: "Make confident decisions with comprehensive insights",
      icon: UserCheck,
      features: ["Detailed profiles", "Interview coordination", "Reference checks", "Onboarding support"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    { icon: Clock, title: "85% Faster", subtitle: "Hiring Speed", description: "Reduce time-to-hire significantly" },
    { icon: Target, title: "95% Accuracy", subtitle: "Match Quality", description: "Higher candidate success rates" },
    { icon: TrendingUp, title: "70% Savings", subtitle: "Cost Reduction", description: "Lower recruitment expenses" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8">
              How We Transform
              <br />Recruitment
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Experience our revolutionary 4-step process that connects exceptional talent with forward-thinking companies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary text-white">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Flow */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The RecruitInn Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Four powerful steps that revolutionize how you find, evaluate, and hire top talent
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`group relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}
                >
                  {/* Step Card */}
                  <div className="relative bg-card rounded-3xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 ml-12`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg">
                          <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}></div>
                          <span className="text-sm font-medium text-card-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 lg:right-4">
                      <ArrowRight className={`w-8 h-8 ${index % 2 === 0 ? 'text-primary' : 'text-accent'} opacity-30`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our clients consistently achieve better hiring outcomes with measurable improvements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group relative">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative bg-card/90 backdrop-blur-sm p-10 rounded-3xl shadow-elegant hover:shadow-2xl transition-all duration-300 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Stats */}
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                      {benefit.title}
                    </div>
                    <div className="text-lg font-semibold text-card-foreground mb-4">
                      {benefit.subtitle}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-elegant overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative text-center">
                <Award className="w-16 h-16 text-primary mx-auto mb-8" />
                <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
                  Ready to Transform Your Hiring?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of companies already using our AI-powered process to find exceptional talent faster than ever before.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-primary text-white shadow-lg hover:shadow-xl">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}