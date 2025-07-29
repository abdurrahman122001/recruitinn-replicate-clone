import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Award, Globe, Heart, Search, Briefcase, Users as UsersIcon, Upload, Brain, Filter, UserCheck, Clock, TrendingUp, CheckCircle, Factory, Building, Car, Package, Building2, Pill, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import heroImage from "/hero-image.jpg";
import {
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Zap,
  Check,
  BarChart2,
  Lightbulb,
  Shield,
} from "lucide-react";

const Index = () => {
  const stats = [
    { number: "2021", label: "Active Since" },
    { number: "200+", label: "Clients Served" },
    { number: "500+", label: "Talent Engaged" },
    { number: "10+", label: "Global Reach - Countries" }
  ];
  const [activeTab, setActiveTab] = useState("All");

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

  const services = [
    {
      category: "Executive Search",
      icon: Search,
      title: "Executive Search",
      description: "At Zillions Connect, our Executive Search services are designed to identify and attract top-tier leadership talent that drives long-term business success."
    },
    {
      category: "International Hiring",
      icon: Briefcase,
      title: "International Hiring",
      description: "In today's global economy, talent knows no boundaries—and neither do we. Zillions Connect offers specialized International Hiring services to help organizations access world-class talent across borders."
    },
    {
      category: "Permanent Recruitment",
      icon: UsersIcon,
      title: "Permanent Recruitment",
      description: "Finding the right permanent talent is critical to building a strong, stable, and scalable workforce. At Zillions Connect, we specialize in Permanent Recruitment solutions tailored to your long-term business goals."
    },
    {
      category: "Staffing Solutions",
      icon: Lightbulb,
      title: "Staffing Solutions",
      description: "In a fast-paced, project-driven world, workforce flexibility is a strategic advantage. At Zillions Connect, our Staffing Solutions are designed to help organizations stay agile, responsive, and fully resourced."
    },
    {
      category: "RPO Services",
      icon: UsersIcon,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "For organizations seeking to streamline, scale, and strengthen their hiring function, Zillions Connect offers comprehensive Recruitment Process Outsourcing (RPO) solutions."
    }
  ];


  const filteredServices = activeTab === "All"
    ? services
    : services.filter(service => service.category === activeTab);

  const tabs = ["All", "Executive Search", "International Hiring", "Permanent Recruitment", "Staffing Solutions", "RPO Services"]; const processSteps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description: "We begin by deeply understanding your business, role expectations, culture, and timelines. This ensures our search is sharply aligned with your needs.",
      icon: Upload,
    },
    {
      number: "02",
      title: "Talent Mapping & Sourcing",
      description: "Using our proprietary database, targeted outreach, and market intelligence, we identify active and passive candidates who best match the job and company profile.",
      icon: Brain,
    },
    {
      number: "03",
      title: "Screening & Evaluation",
      description: "Each candidate undergoes a rigorous screening process that includes behavioral interviews, technical assessments, and cultural fit evaluations.",
      icon: Filter,
    },
    {
      number: "04",
      title: "Shortlisting & Coordination",
      description: "We present a refined shortlist of high-potential candidates, manage scheduling, feedback loops, and ensure a smooth interview experience for both parties.",
      icon: UserCheck,
    },
    {
      number: "05",
      title: "Offer Management & Onboarding",
      description: "From offer negotiation to resignation handling and onboarding follow-up, we ensure a seamless transition and strong start for your new hire.",
      icon: Users,
    },
  ];

  const industries = [
    {
      icon: Zap,
      title: "Power & Energy",
      description: "India's power sector is undergoing rapid transformation with a strong shift toward renewables, while thermal and hydro continue to support base load demands.",
    },
    {
      icon: Factory,
      title: "Oil & Gas",
      description: "The Oil & Gas industry continues to play a critical role in global energy supply, even as it navigates the dual challenge of energy transition and decarbonization.",
    },
    {
      icon: Building2,
      title: "Manufacturing",
      description: "Manufacturing is gaining momentum through automation, digitalization, and increased global demand. Industries need professionals in production, quality, supply chain, and plant operations.",
    },
    {
      icon: Car,
      title: "EV & Automobile",
      description: "The EV and automobile sector is undergoing a major shift toward clean mobility, smart technologies, and localized manufacturing.",
    },
    {
      icon: Package,
      title: "FMCG, Food Processing & Agri Business",
      description: "The FMCG, food processing, and agri business sectors are experiencing strong growth driven by rising consumer demand, rural market expansion.",
    },
    {
      icon: Shield,
      title: "Defence & Aerospace",
      description: "India's Defence and Aerospace sector is witnessing a surge in growth fueled by government push for indigenization, private sector participation.",
    },
    {
      icon: Building,
      title: "Construction, Infrastructure & PMC",
      description: "The construction and infrastructure sector is a key pillar of economic growth, driven by large-scale urbanization, smart cities.",
    },
    {
      icon: Factory,
      title: "Steel, Metal & Mining",
      description: "The Steel, Metal, and Mining sector remains the backbone of industrial growth, with renewed momentum driven by infrastructure expansion.",
    },
    {
      icon: Pill,
      title: "Pharma & Healthcare",
      description: "India's Pharma and Healthcare sector is growing rapidly with advancements in R&D, biotechnology, digital health.",
    },
    {
      icon: Monitor,
      title: "Consumer Services & Electronic Manufacturing",
      description: "The rise of digital lifestyles, smart devices, and tech-enabled services is fueling rapid growth in consumer services and electronic manufacturing.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Find Top Talent with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Zillions Connect
              </span>
            </h1>

            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
              We are among the fastest-growing HR and talent acquisition firms, dedicated to building long-term, strategic partnerships with our clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                <Link to="/application-form">Apply As Candidate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* About Section */}
      <section id="about" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                About{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Zillions Connect
                </span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                By delivering agile, scalable, and result-driven workforce solutions, we enable businesses to stay focused on their core operations while we take care of their evolving human capital needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-1 text-center gap-8 lg:gap-16 items-center mb-16">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Our{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>
                <div className="space-y-4 text-base lg:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Backed by strong industry expertise and a robust delivery framework, Zillions Connect empowers organizations through customized recruitment and HR services. Our client-centric approach ensures cost-effective solutions without compromising on quality.
                  </p>
                  <p>
                    What sets us apart is our unique hybrid model—merging the strategic depth of management consulting with the efficiency and responsiveness of traditional staffing. At Zillions Connect, we don't just fill roles—we build futures.
                  </p>
                </div>
              </div>

            </div>

            {/* Values */}
            <div className="p-8 lg:p-12 rounded-2xl">
              <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Values
                </span>
              </h2>              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 group">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-card-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                it Works
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Technology and expertise for top recruitment results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Data-Driven Insights
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Our platform analyzes thousands of data points to provide
                    actionable insights that optimize your hiring strategy and
                    predict candidate success.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Continuous Learning
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Our models continuously improve based on feedback and
                    outcomes, ensuring better matches over time.
                  </p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-sm px-5 py-3 rounded-lg mt-2">
                Explore Features
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-6c08-61f5-b3a1-cc0b646f069d/raw?se=2025-07-29T10%3A10%3A49Z&sp=r&sv=2024-08-04&sr=b&scid=db185db5-e350-5058-ac11-1634de2bebf5&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-29T09%3A00%3A38Z&ske=2025-07-30T09%3A00%3A38Z&sks=b&skv=2024-08-04&sig=uJSwbnMgjHj1n59kaPFDSIVErTakCQfk1J5LVPHykXU%3D"
                alt="HR professional analyzing data"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img
                src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-dedc-61f8-8238-7f9e0e358502/raw?se=2025-07-29T10%3A26%3A11Z&sp=r&sv=2024-08-04&sr=b&scid=ff949737-7a01-5071-87a6-8f891c4b912e&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-29T08%3A33%3A47Z&ske=2025-07-30T08%3A33%3A47Z&sks=b&skv=2024-08-04&sig=VND0gWgr0T/85CO5WzHaxYTjzd/iJYrGpJH%2Bu3wQMPo%3D"
                alt="Team commitment"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Commitment to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                At <strong className="text-blue-600">Zillions</strong>, we're
                driven by a passion for connecting exceptional talent with
                visionary companies. Our commitment goes beyond just filling
                positions - we're dedicated to building lasting partnerships.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      Right Talent, Right Time
                    </h3>
                    <p className="text-sm text-gray-600">
                      We provide personnel with the perfect blend of skills and
                      attitude to fuel your business growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      Employee Development
                    </h3>
                    <p className="text-sm text-gray-600">
                      We enrich candidates through development initiatives that
                      enhance their skills and drive higher achievements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      Strategic HR Solutions
                    </h3>
                    <p className="text-sm text-gray-600">
                      We deliver initiatives that act as catalysts to accelerate
                      your business performance.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-sm px-5 py-3 rounded-lg">
                Learn About Our Values
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
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
                Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Services
                </span>
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

      {/* Process Section - 5 Columns */}
      <section id="process" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Recruitment{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                At Zillions Connect, our recruitment process is built on precision, speed, and strategic alignment. We combine deep industry knowledge with a structured approach to deliver the right talent—every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
              {/* Connecting Line for larger screens */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200"></div>

              {processSteps.map((step, index) => (
                <div key={index} className="text-center group relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-card rounded-2xl p-4 lg:p-6 shadow-card hover:shadow-elegant transition-all duration-500 group-hover:-translate-y-2 border border-border">
                    {/* Step Number */}
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                      <span className="text-white font-bold text-sm lg:text-lg">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <step.icon className="w-5 h-5 lg:w-7 lg:h-7 text-blue-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-sm lg:text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-xs lg:text-sm">{step.description}</p>
                  </div>

                  {/* Connecting Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-3 z-20">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100">
                        <ArrowRight className="w-3 h-3 text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Process Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">80%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Faster Hiring</div>
                <p className="text-muted-foreground text-sm">Reduce time-to-hire with our optimized recruitment process</p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Perfect Match</div>
                <p className="text-muted-foreground text-sm">High-quality candidates that exceed expectations</p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">75%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Cost Reduction</div>
                <p className="text-muted-foreground text-sm">Significant savings on recruitment expenses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Excellence Section */}
      <section id="industry-excellence" className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Industry{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep expertise across diverse industries with specialized talent solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group animate-scale-in hover-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Success stories from companies who trust Zillions Connect for their talent needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Client Company</h4>
                      <p className="text-sm text-muted-foreground">Industry Leader</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Zillions Connect transformed our hiring process. Their expertise in finding the right talent has been instrumental in our growth."
                  </p>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-lg">★</span>
                    ))}
                  </div>
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
};

export default Index;
