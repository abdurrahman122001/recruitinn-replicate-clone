import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Head of Talent Acquisition",
      company: "TechCorp",
      avatar: "/placeholder-avatar-1.jpg",
      rating: 5,
      content: "RecruitInn transformed our hiring process completely. We reduced our time-to-hire by 70% and found better candidates than ever before. The AI matching is incredibly accurate."
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLabs",
      avatar: "/placeholder-avatar-2.jpg", 
      rating: 5,
      content: "As a startup, we needed to hire fast without compromising quality. RecruitInn helped us build our entire engineering team in just 2 months. Absolutely game-changing."
    },
    {
      name: "Emily Rodriguez",
      role: "HR Director",
      company: "Global Solutions Inc.",
      avatar: "/placeholder-avatar-3.jpg",
      rating: 5,
      content: "The candidate quality we get through RecruitInn is outstanding. Their assessments are thorough and the cultural fit predictions have been spot-on. Highly recommend!"
    },
    {
      name: "David Kumar",
      role: "VP of Engineering",
      company: "DataFlow Systems",
      avatar: "/placeholder-avatar-4.jpg",
      rating: 5,
      content: "We've hired 15+ engineers through RecruitInn and every single one has been a great fit. The technical assessments really work and save us so much interview time."
    },
    {
      name: "Lisa Thompson",
      role: "Talent Manager",
      company: "CreativeWorks",
      avatar: "/placeholder-avatar-5.jpg",
      rating: 5,
      content: "The platform is intuitive and the support team is fantastic. RecruitInn doesn't just find candidates - they find the right candidates. Our retention rates have improved significantly."
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "NextGen Solutions",
      avatar: "/placeholder-avatar-6.jpg",
      rating: 5,
      content: "ROI was immediate. Within 3 months of using RecruitInn, we cut recruitment costs by 60% while improving hire quality. It's an essential tool for any growing company."
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Trust Us" },
    { number: "10,000+", label: "Successful Hires" },
    { number: "85%", label: "Faster Hiring" },
    { number: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover how companies worldwide are transforming their recruitment with RecruitInn's AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Success Story Spotlight
              </h2>
              <p className="text-lg text-muted-foreground">
                How TechCorp scaled their engineering team 3x faster
              </p>
            </div>

            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-card">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl font-bold text-primary mb-4">300%</div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    Faster Team Scaling
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    TechCorp needed to rapidly expand their engineering team from 10 to 50 developers. 
                    Using traditional methods, this would have taken 18+ months. With RecruitInn's AI-powered 
                    platform, they achieved this in just 6 months while maintaining high quality standards.
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time to hire reduced:</span>
                      <span className="font-semibold">From 3 months to 3 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interview-to-hire ratio:</span>
                      <span className="font-semibold">Improved by 60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Employee retention:</span>
                      <span className="font-semibold">95% after 1 year</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <blockquote className="text-lg italic mb-4">
                    "RecruitInn didn't just help us hire faster - they helped us hire smarter. 
                    The quality of candidates has been exceptional, and our new hires are 
                    contributing from day one."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-white/20 text-white">SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-white/80 text-sm">Head of Talent, TechCorp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Success Stories
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your recruitment and join thousands of satisfied customers?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}