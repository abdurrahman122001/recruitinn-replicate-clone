import { Button } from "@/components/ui/button";
import { Users, Search, Briefcase, Users as UsersIcon } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "Specialized recruitment for top-tier executive positions, ensuring the best talent for leadership roles."
    },
    {
      icon: Briefcase,
      title: "Senior and Mid Level Hiring",
      description: "Comprehensive hiring solutions for senior and mid-level professionals to meet diverse organizational needs."
    },
    {
      icon: UsersIcon,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "End-to-end outsourcing of recruitment processes to streamline and enhance hiring efficiency."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
              Zillions Connect offers innovative HR solutions to engage, develop, and retain talent through specialized services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored HR solutions to empower your organization.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
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

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-primary rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Hiring?
            </h2>
            <p className="text-base lg:text-lg text-white/90 mb-6 lg:mb-8 max-w-2xl mx-auto">
              Let Zillions Connect transform your recruitment process today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}