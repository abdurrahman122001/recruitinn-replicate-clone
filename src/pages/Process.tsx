import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Brain, Filter, UserCheck, ChevronDown, Sparkles, Clock, Target, TrendingUp, CheckCircle, Users } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/footer";
export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Understanding Requirement",
      description: "Detailed analysis of client needs to ensure perfect alignment with expectations.",
      icon: Upload,
    },
    {
      number: "02",
      title: "Sourcing",
      description: "Leveraging our extensive database to identify top-tier candidates.",
      icon: Brain,
    },
    {
      number: "03",
      title: "Screening & Evaluation",
      description: "Rigorous assessment to shortlist candidates with the right skills.",
      icon: Filter,
    },
    {
      number: "04",
      title: "Selection & Onboarding",
      description: "Facilitating final interviews and seamless onboarding process.",
      icon: UserCheck,
    },
  ];

  const faqs = [
    {
      question: "How do you understand our hiring needs?",
      answer: "We conduct in-depth consultations to analyze your requirements, ensuring we target candidates who match your technical and cultural needs.",
    },
    {
      question: "What makes your sourcing effective?",
      answer: "Our proprietary database and AI-driven tools allow us to source candidates from a vast pool, ensuring high-quality matches.",
    },
    {
      question: "What does screening involve?",
      answer: "We use a combination of automated assessments and expert evaluations to filter candidates based on skills, experience, and fit.",
    },
    {
      question: "How do you support onboarding?",
      answer: "We assist with final interviews, negotiations, and onboarding to ensure a smooth transition for both clients and candidates.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Streamlined Process</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 animate-slide-up">
              Simple. Smart.
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Effective.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Our proven 4-step process connects you with top talent in record time, leveraging AI and human expertise
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-8 py-4 rounded-xl shadow-lg">
                Start Your Hiring Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 rounded-xl border-2">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-background relative">
        {/* Section Header */}
        <div className="container mx-auto px-6 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transform</span> Hiring
            </h2>
            <p className="text-lg text-muted-foreground">
              From understanding your needs to successful placements - our comprehensive approach delivers results
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200"></div>
              
              {steps.map((step, index) => (
                <div key={index} className="text-center group relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Step Card */}
                  <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-500 group-hover:-translate-y-2 border border-border">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-blue-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>

                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 z-20">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-blue-300 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-indigo-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-purple-300 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Process</span> Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proven results that speak for themselves - backed by data and client success stories
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">80%</div>
                <div className="text-lg font-semibold text-foreground mb-3">Faster Hiring</div>
                <p className="text-muted-foreground">Reduce time-to-hire with our optimized recruitment process</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">95%</div>
                <div className="text-lg font-semibold text-foreground mb-3">Perfect Match</div>
                <p className="text-muted-foreground">High-quality candidates that exceed expectations</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">75%</div>
                <div className="text-lg font-semibold text-foreground mb-3">Cost Reduction</div>
                <p className="text-muted-foreground">Significant savings on recruitment expenses</p>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Guaranteed Quality</h3>
                </div>
                <p className="text-muted-foreground">Every candidate goes through our rigorous screening process</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Dedicated Support</h3>
                </div>
                <p className="text-muted-foreground">Personal recruitment consultant assigned to your project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Frequently</span> Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our recruitment process
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-2xl border border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-l-4 border-blue-500">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
              <Sparkles className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Transform Your <span className="text-blue-200">Hiring Today</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of companies who've revolutionized their recruitment with our proven process
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 rounded-xl shadow-lg font-semibold">
                Start Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 px-8 py-4 rounded-xl">
                Download Process Guide
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 text-white/80">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">No Upfront Cost</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}