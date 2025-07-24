import { Button } from "@/components/ui/button";
  import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";
  import Footer from "@/components/footer";

  export default function About() {
    const team = [
      {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        bio: "Former HR Lead with 10+ years in talent management.",
        image: "/placeholder-team-1.jpg"
      },
      {
        name: "Michael Rodriguez",
        role: "CTO & Co-Founder",
        bio: "AI expert focused on HR technology solutions.",
        image: "/placeholder-team-2.jpg"
      },
      {
        name: "Emma Johnson",
        role: "Head of Product",
        bio: "Experienced in user-focused product development.",
        image: "/placeholder-team-3.jpg"
      },
      {
        name: "David Kim",
        role: "VP of Engineering",
        bio: "Specialist in scalable systems for HR applications.",
        image: "/placeholder-team-4.jpg"
      }
    ];

    const values = [
      {
        icon: Target,
        title: "Innovation First",
        description: "Leveraging advanced solutions to enhance recruitment processes."
      },
      {
        icon: Heart,
        title: "Human-Centric",
        description: "Prioritizing human capital as the core of our services."
      },
      {
        icon: Award,
        title: "Excellence",
        description: "Committed to delivering top-tier HR solutions."
      },
      {
        icon: Globe,
        title: "Accessibility",
        description: "Making talent solutions available to all organizations."
      },
      {
        icon: Lightbulb,
        title: "Continuous Learning",
        description: "Emphasizing ongoing training and development."
      },
      {
        icon: Users,
        title: "Collaboration",
        description: "Partnering closely with clients for tailored solutions."
      }
    ];

    const stats = [
      { number: "2025", label: "Active Since" },
      { number: "200+", label: "Clients Served" },
      { number: "10,000+", label: "Talent Engaged" },
      { number: "90%", label: "Client Satisfaction" }
    ];

    const industries = [
      "Oil & Gas, Power and Energy",
      "FMCG, Consumer Duration, and Agri Commodity",
      "Metal, Mining, Heavy Engineering",
      "Construction, Infrastructure, Real Estate",
      "Manufacturing, Auto, and Auto Ancillary",
      "IT, ITeS, eCommerce",
      "Life Sciences, and Healthcare",
      "Banking, Insurance and NBFC",
      "Telecommunication, and Internet",
      "Startup, New Venture"
    ];

    return (
      <div className="min-h-screen bg-background">
        <section className="py-16 lg:py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6">
                About{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Zillions Connect
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
                We are an innovative Human Resource Accelerator committed to helping clients engage, develop, and retain talent, empowering their human capital.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">
                    Our Mission
                  </h2>
                  <p className="text-base lg:text-lg text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                    We aim to revolutionize HR by delivering solutions that enhance talent engagement and development.
                  </p>
                  <Button className="bg-gradient-primary hover:opacity-90" size="lg">
                    Join Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Our Values
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Guiding principles that shape our approach.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                      <value.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-card-foreground mb-3 lg:mb-4">
                      {value.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Industries Catered To
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  A wide range of industries we empower with our HR expertise.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg lg:text-xl">I</span>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-card-foreground mb-3 lg:mb-4">
                      {industry}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      Tailored HR solutions for {industry.toLowerCase()}.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Meet Our Team
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Dedicated professionals driving our success.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 text-center group">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="text-white font-bold text-lg lg:text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }