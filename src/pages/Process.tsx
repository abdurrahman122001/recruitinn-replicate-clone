import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Brain, Filter, UserCheck, ChevronDown } from "lucide-react";
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
      <section className="py-24 bg-background">
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center group relative">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
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
                <div className="text-5xl font-bold text-primary mb-4">80%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Time Efficiency</div>
                <p className="text-muted-foreground">Reduce hiring timelines with our optimized process</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-4">90%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Candidate Fit</div>
                <p className="text-muted-foreground">High-quality matches for your requirements</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-4">75%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Cost Savings</div>
                <p className="text-muted-foreground">Minimize recruitment expenses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-muted-foreground/20">
                  <button
                    className="w-full flex justify-between items-center py-4 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="pb-4 text-muted-foreground text-sm">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Partner with us to find the best talent for your organization
            </p>
            <Button size="lg" className="bg-gradient-primary text-white">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}