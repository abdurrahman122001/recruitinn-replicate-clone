import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";
import Footer from "@/components/footer";
import TeamSection from "@/components/TeamSection";

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
      description: "We continuously evolve our strategies, tools, and processes to stay ahead in a dynamic talent landscape. By embracing new technologies, data-driven insights, and creative problem-solving, we deliver smarter, faster, and more effective recruitment solutions."
    },
    {
      icon: Heart,
      title: "Human-Centric",
      description: "People are at the heart of everything we do. We believe in building genuine, long-lasting relationships—with our clients, candidates, and team members. We listen with empathy, act with integrity, and create experiences that prioritize trust, transparency, and mutual respect."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Excellence is our standard, not a goal. We are committed to delivering the highest quality in every engagement. We set the bar high, continually refine our approach, and hold ourselves accountable to consistently exceed expectations."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We believe true partnerships are built on openness and approachability. We ensure clear communication, quick turnarounds, and a supportive experience at every step. Our inclusive and transparent culture makes collaboration effortless and effective."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "We thrive in a culture of curiosity, growth, and ongoing improvement. Continuous learning fuels our ability to adapt, innovate, and lead in an ever-changing recruitment landscape. We invest in upskilling our team, staying updated with industry trends."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe that the best results come from working together. Collaboration is more than teamwork—it's about aligning goals, sharing knowledge, and co-creating success with our clients, candidates, and colleagues."
    }
  ];

  const stats = [
    { number: "2021", label: "Active Since" },
    { number: "200+", label: "Clients Served" },
    { number: "500+", label: "Talent Engaged" },
    { number: "10+", label: "Global Reach - Countries" }
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
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6 animate-fade-in">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Zillions Connect
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
              We are among the fastest-growing HR and talent acquisition firms, dedicated to building long-term, strategic partnerships with our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2 animate-scale-in hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
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
                <div className="space-y-4 text-base lg:text-lg text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                  <p>
                    By delivering agile, scalable, and result-driven workforce solutions, we enable businesses to stay focused on their core operations while we take care of their evolving human capital needs.
                  </p>
                  <p>
                    Backed by strong industry expertise and a robust delivery framework, Zillions Connect empowers organizations through customized recruitment and HR services. Our client-centric approach ensures cost-effective solutions without compromising on quality.
                  </p>
                  <p>
                    What sets us apart is our unique hybrid model—merging the strategic depth of management consulting with the efficiency and responsiveness of traditional staffing. At Zillions Connect, we don't just fill roles—we build futures.
                  </p>
                </div>
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
                <div key={index} className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in hover-scale" style={{ animationDelay: `${index * 150}ms` }}>
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
                Our People
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                Our strength begins with our people—experienced, passionate professionals who drive our commitment to delivering innovative talent solutions. At Zillions Connect, our team brings a rare blend of industry insight, business acumen, and recruitment expertise.
              </p>
            </div>
            <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-card">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  With deep understanding of client cultures and role requirements, they don't just assess resumes—they identify real potential and future performance. Many of our consultants have firsthand experience in the industries they now serve, allowing them to connect the right talent with the right opportunity.
                </p>
                <p>
                  Whether it's evaluating emerging leaders or reaching out to proven executives, our people collaborate seamlessly to ensure every hire adds strategic value to our clients' business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <Footer />
    </div>
  );
}