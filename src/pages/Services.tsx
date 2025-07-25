import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, Users as UsersIcon, Lightbulb } from "lucide-react";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Services() {
  const [activeTab, setActiveTab] = useState("All");

  const services = [
    {
      category: "Executive Search",
      icon: Search,
      title: "Executive Search",
      description: "Specialized recruitment for top-tier executive positions, ensuring the best talent for leadership roles."
    },
    {
      category: "Mid-Level Hiring",
      icon: Briefcase,
      title: "Senior and Mid Level Hiring",
      description: "Comprehensive hiring solutions for senior and mid-level professionals to meet diverse organizational needs."
    },
    {
      category: "RPO Services",
      icon: UsersIcon,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "End-to-end outsourcing of recruitment processes to streamline and enhance hiring efficiency."
    },
    {
      category: "Consulting",
      icon: Lightbulb,
      title: "HR Consulting",
      description: "Expert guidance to optimize HR strategies and improve organizational performance."
    }
  ];

  const filteredServices = activeTab === "All" 
    ? services 
    : services.filter(service => service.category === activeTab);

  const tabs = ["All", "Executive Search", "Mid-Level Hiring", "RPO Services", "Consulting"];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6 animate-fade-in">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
              Zillions Connect offers innovative HR solutions to engage, develop, and retain talent through specialized services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Services Menu Navigation */}
            <div className="flex justify-center mb-12 lg:mb-16">
              <div className="bg-card rounded-2xl p-2 shadow-card">
                <div className="flex flex-wrap justify-center gap-2">
                  {tabs.map((tab) => (
                    <Button
                      key={tab}
                      variant={activeTab === tab ? "default" : "ghost"}
                      className={
                        activeTab === tab
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored HR solutions to empower your organization.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group animate-scale-in hover-scale"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-card-foreground mb-3 lg:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}