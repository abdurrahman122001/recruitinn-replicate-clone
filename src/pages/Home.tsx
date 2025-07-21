import { Button } from "@/components/ui/button";
import { CandidateCard } from "@/components/candidate-card";
import { TrustedLogos } from "@/components/trusted-logos";
import { ArrowRight, Sparkles, Target, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating candidate cards */}
            <div className="absolute top-10 left-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CandidateCard
                name="Ethan Parker"
                role="iOS Developer"
                status="not-eligible"
                className="transform rotate-3"
              />
            </div>
            
            <div className="absolute top-20 right-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CandidateCard
                name="Amina Farah"
                role="Full-Stack Developer"
                status="recommended"
                className="transform -rotate-2"
              />
            </div>

            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
                Welcome to the Future of{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Recruitment
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Transform your hiring process with RecruitInn's AI-powered solutions. 
                Discover, assess, and onboard top talent faster, smarter, and with unmatched efficiency.
              </p>

              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <Button className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 rounded-xl">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* Trusted Companies */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <TrustedLogos />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose RecruitInn?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform revolutionizes recruitment with smart automation and data-driven insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">AI-Powered Matching</h3>
              <p className="text-muted-foreground">
                Our advanced AI algorithms analyze candidate profiles and match them with your exact requirements for perfect hiring decisions.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Smart Assessment</h3>
              <p className="text-muted-foreground">
                Comprehensive skill assessments and behavioral analysis to ensure candidates not only fit the role but your company culture.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Reduce your hiring time from months to days with our streamlined process and automated candidate screening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using RecruitInn to find and hire the best talent faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Book A Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}