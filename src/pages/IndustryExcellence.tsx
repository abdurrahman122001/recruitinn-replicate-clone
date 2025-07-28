import { Zap, Factory, Car, Apple, Shield, Building, Hammer, Cog, Pill, Monitor } from "lucide-react";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

export default function IndustryExcellence() {
  const industries = [
    {
      icon: Zap,
      title: "Power & Energy",
      description: "India's power sector is undergoing rapid transformation with a strong shift toward renewables, while thermal and hydro continue to support base load demands. With massive investments and policy reforms, demand for skilled engineers, EPC specialists, and sustainability leaders is rising—fueling one of the most talent-critical transitions in the energy landscape.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Factory,
      title: "Oil & Gas",
      description: "The Oil & Gas industry continues to play a critical role in global energy supply, even as it navigates the dual challenge of energy transition and decarbonization. With new investments in exploration, LNG infrastructure, and refinery upgrades, the sector is embracing digital innovation, automation, and ESG compliance.",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: Cog,
      title: "Manufacturing",
      description: "Manufacturing is gaining momentum through automation, digitalization, and increased global demand. Industries need professionals in production, quality, supply chain, and plant operations. As smart factories rise, hiring is focused on multi-skilled engineers and managers who can blend traditional manufacturing knowledge with modern industrial technologies.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Car,
      title: "EV & Automobile",
      description: "The EV and automobile sector is undergoing a major shift toward clean mobility, smart technologies, and localized manufacturing. Rapid innovation in battery tech, charging infrastructure, and connected vehicles is driving demand for R&D engineers, design experts, embedded software developers, and EV supply chain specialists.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Apple,
      title: "FMCG, Food Processing & Agri Business",
      description: "The FMCG, food processing, and agri business sectors are experiencing strong growth driven by rising consumer demand, rural market expansion, and innovation in packaging, supply chain, and product development. Companies are seeking agile, tech-savvy individuals who understand consumer behavior, operational efficiency, and end-to-end value chains.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Defense & Aerospace",
      description: "India's Defense and Aerospace sector is witnessing a surge in growth fueled by government push for indigenization, private sector participation, and global partnerships. The industry demands highly specialized talent in design, systems integration, avionics, R&D, quality assurance, and program management.",
      color: "from-red-600 to-rose-600"
    },
    {
      icon: Building,
      title: "Construction, Infrastructure & PMC",
      description: "The construction and infrastructure sector is a key pillar of economic growth, driven by large-scale urbanization, smart cities, and government-backed mega projects. With rising investments in roads, metros, airports, and industrial corridors, the demand for experienced professionals in project planning, civil engineering, contract management, and site execution has surged.",
      color: "from-amber-600 to-yellow-600"
    },
    {
      icon: Hammer,
      title: "Steel, Metal & Mining",
      description: "The Steel, Metal, and Mining sector remains the backbone of industrial growth, with renewed momentum driven by infrastructure expansion, domestic manufacturing, and global demand. Modernization, sustainability goals, and digital adoption are transforming traditional operations across mining, smelting, and processing units.",
      color: "from-slate-600 to-zinc-600"
    },
    {
      icon: Pill,
      title: "Pharma & Healthcare",
      description: "India's Pharma and Healthcare sector is growing rapidly with advancements in R&D, biotechnology, digital health, and global demand for generics. Regulatory changes, innovation in drug development, and healthcare delivery models are reshaping talent needs. The industry seeks skilled professionals in clinical research, regulatory affairs, quality control, digital health, and hospital administration.",
      color: "from-teal-600 to-cyan-600"
    },
    {
      icon: Monitor,
      title: "Consumer Services & Electronic Manufacturing",
      description: "The rise of digital lifestyles, smart devices, and tech-enabled services is fueling rapid growth in consumer services and electronic manufacturing. Government initiatives like PLI schemes and 'Digital India' are accelerating investments in local production and service delivery. Talent demand spans roles in product engineering, after-sales service, quality assurance, and customer experience.",
      color: "from-purple-600 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6 animate-fade-in">
              Industry{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
              Deep expertise across diverse industries, delivering specialized talent solutions that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-card p-8 lg:p-10 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform`}>
                    <industry.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-4 lg:mb-6">
                    {industry.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {industry.description}
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