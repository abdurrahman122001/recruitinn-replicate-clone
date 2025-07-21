import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Head of Talent at Google with 10+ years in recruitment technology.",
      image: "/placeholder-team-1.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "AI researcher from Stanford, specialized in machine learning for HR applications.",
      image: "/placeholder-team-2.jpg"
    },
    {
      name: "Emma Johnson",
      role: "Head of Product",
      bio: "Previously led product teams at LinkedIn and Microsoft, passionate about user experience.",
      image: "/placeholder-team-3.jpg"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Former senior engineer at Facebook, expert in scalable systems and AI infrastructure.",
      image: "/placeholder-team-4.jpg"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible in recruitment technology, leveraging cutting-edge AI to solve real problems."
    },
    {
      icon: Heart,
      title: "Human-Centric",
      description: "While we use AI to enhance efficiency, we never lose sight of the human element that makes great hiring decisions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering exceptional results for our clients and candidates, exceeding expectations every time."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We believe great talent exists everywhere, and our platform makes it accessible to companies of all sizes."
    },
    {
      icon: Lightbulb,
      title: "Transparency",
      description: "We operate with complete transparency in our processes, pricing, and the way our AI makes decisions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as true partners with our clients, understanding their unique needs and adapting our solutions accordingly."
    }
  ];

  const stats = [
    { number: "2019", label: "Founded" },
    { number: "500+", label: "Companies Served" },
    { number: "50,000+", label: "Candidates Placed" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                RecruitInn
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing recruitment through AI-powered solutions that connect exceptional talent 
              with forward-thinking companies. Our mission is to make hiring faster, smarter, and more successful for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">
                  Our Mission
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                  Traditional recruitment is broken. It's slow, biased, and inefficient. We're building the future 
                  where AI augments human decision-making to create better matches between candidates and companies.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                  Our platform doesn't just find candidates - it finds the right candidates. Through advanced AI 
                  algorithms, comprehensive assessments, and data-driven insights, we help companies build stronger 
                  teams while giving candidates access to opportunities that truly match their skills and aspirations.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90" size="lg">
                  Join Our Mission
                </Button>
              </div>
              <div className="bg-gradient-primary rounded-2xl lg:rounded-3xl p-6 lg:p-12 text-white">
                <div className="grid grid-cols-2 gap-4 lg:gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl lg:text-3xl font-bold">85%</div>
                    <div className="text-sm lg:text-base text-white/80">Faster Hiring</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl lg:text-3xl font-bold">95%</div>
                    <div className="text-sm lg:text-base text-white/80">Match Accuracy</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl lg:text-3xl font-bold">70%</div>
                    <div className="text-sm lg:text-base text-white/80">Cost Reduction</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl lg:text-3xl font-bold">99%</div>
                    <div className="text-sm lg:text-base text-white/80">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group"
                >
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

      {/* Team Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate people building the future of recruitment technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 text-center group"
                >
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

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-primary rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-base lg:text-lg text-white/90 mb-6 lg:mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using RecruitInn to build amazing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}