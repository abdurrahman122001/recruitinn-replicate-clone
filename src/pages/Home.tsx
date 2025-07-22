import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CandidateCard } from "@/components/candidate-card";
import { TrustedLogos } from "@/components/trusted-logos";
import { ArrowRight, Sparkles, Target, Users, Zap } from "lucide-react";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Strengths from "@/components/strength";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Floating candidate cards */}
            <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-fade-in hidden sm:block" style={{ animationDelay: '0.2s' }}>
              <CandidateCard
                name="Ethan Parker"
                role="iOS Developer"
                status="not-eligible"
                className="transform rotate-3 w-48 lg:w-56"
              />
            </div>

            <div className="absolute top-12 sm:top-20 right-4 sm:right-10 animate-fade-in hidden sm:block" style={{ animationDelay: '0.4s' }}>
              <CandidateCard
                name="Amina Farah"
                role="Full-Stack Developer"
                status="recommended"
                className="transform -rotate-2 w-48 lg:w-56"
              />
            </div>

            <div className="relative z-10 px-4 sm:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-slide-up leading-tight">
                Welcome to the Future of{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Recruitment
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
                Transform your hiring process with RecruitInn's AI-powered solutions.
                Discover, assess, and onboard top talent faster, smarter, and with unmatched efficiency.
              </p>

              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <Button className="bg-gradient-primary hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-10 sm:top-20 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* Trusted Companies */}
      <section className="py-8 sm:py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <TrustedLogos />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose RecruitInn?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform revolutionizes recruitment with smart automation and data-driven insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-card-foreground mb-3 lg:mb-4">AI-Powered Matching</h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                Our advanced AI algorithms analyze candidate profiles and match them with your exact requirements for perfect hiring decisions.
              </p>
            </div>

            <div className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-card-foreground mb-3 lg:mb-4">Smart Assessment</h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                Comprehensive skill assessments and behavioral analysis to ensure candidates not only fit the role but your company culture.
              </p>
            </div>

            <div className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-card-foreground mb-3 lg:mb-4">Lightning Fast</h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                Reduce your hiring time from months to days with our streamlined process and automated candidate screening.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Strengths/>

      {/* CTA Section */}
      <CTA />
      <Footer/>
    </div>
  );
}