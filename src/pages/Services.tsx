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
      description: "At Zillions Connect, our Executive Search services are designed to identify and attract top-tier leadership talent that drives long-term business success. We understand that leaders shape strategy, culture, and performance—so finding the right fit goes far beyond matching qualifications.",
      details: "With deep expertise across industries such as Renewable Energy, Oil & Gas, Power, EV, Manufacturing, FMCG, Pharma, Food Processing, Steel, Metal, Mining, Infrastructure and Real Estate, our search specialists bring unparalleled market intelligence and an extensive network of high-impact leaders."
    },
    {
      category: "International Hiring",
      icon: Briefcase,
      title: "International Hiring",
      description: "In today's global economy, talent knows no boundaries—and neither do we. Zillions Connect offers specialized International Hiring services to help organizations access world-class talent across borders.",
      details: "Our global hiring capabilities span across regions including the Middle East, Africa, Southeast Asia, and Europe, with a strong focus on industries like Energy, Infrastructure, Engineering, Manufacturing, Oil & Gas, Renewable Energy, and EVs."
    },
    {
      category: "Permanent Recruitment",
      icon: UsersIcon,
      title: "Permanent Recruitment",
      description: "Finding the right permanent talent is critical to building a strong, stable, and scalable workforce. At Zillions Connect, we specialize in Permanent Recruitment solutions tailored to your long-term business goals.",
      details: "We bring deep domain expertise across industries such as Renewable Energy, Oil & Gas, Power, EV, Manufacturing, FMCG, Pharma, Food Processing, Steel, Metal, Mining, Infrastructure and Real Estate, enabling us to understand the unique talent demands of each sector."
    },
    {
      category: "Staffing Solutions",
      icon: Lightbulb,
      title: "Staffing Solutions",
      description: "In a fast-paced, project-driven world, workforce flexibility is a strategic advantage. At Zillions Connect, our Staffing Solutions are designed to help organizations stay agile, responsive, and fully resourced—without compromising on talent quality.",
      details: "We offer customized staffing services to meet short-term, project-based, and contract hiring needs across a wide range of industries."
    },
    {
      category: "RPO Services",
      icon: UsersIcon,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "For organizations seeking to streamline, scale, and strengthen their hiring function, Zillions Connect offers comprehensive Recruitment Process Outsourcing (RPO) solutions.",
      details: "Our RPO services are designed to act as a seamless extension of your internal HR team—managing part or all of your recruitment lifecycle with precision, agility, and accountability."
    }
  ];

  const filteredServices = activeTab === "All" 
    ? services 
    : services.filter(service => service.category === activeTab);

  const tabs = ["All", "Executive Search", "International Hiring", "Permanent Recruitment", "Staffing Solutions", "RPO Services"];

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

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.details && (
                    <p className="text-xs lg:text-sm text-muted-foreground/80 leading-relaxed">
                      {service.details}
                    </p>
                  )}
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