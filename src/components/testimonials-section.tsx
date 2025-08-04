import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "We've partnered with Zillions Connect for several critical leadership hires, and their understanding of the oil and gas industry is truly impressive. Their detailed candidate screening, speed of execution, and consistent communication throughout the process made the experience seamless. The team demonstrates excellent coordination and proactive follow-ups, ensuring we're aligned at every stage. They've become a trusted partner for senior-level recruitment.",
      author: "Regional Head – TA",
      company: "A global MNC in EPC Industry",
    },
    {
      content:
        "What sets Zillion Connect apart is their precise grasp of our technical requirements and organizational culture. Their rigorous screening process ensures only the most relevant candidates reach us, significantly reducing our hiring cycle. We particularly value their ability to move quickly without compromising quality, as well as their structured communication and follow-up at every milestone. It's a refreshing, efficient partnership in a challenging talent market.",
      author: "AVP – Talent Acquisition",
      company: "A leading organization in Renewable Industry",
    },
    {
      content:
        "Your Zillions Connect has been instrumental in helping us fill key leadership roles within our manufacturing operations. Their grasp of industry-specific competencies, combined with a meticulous screening process, ensures we only engage with highly suitable candidates. They're quick to respond, maintain excellent coordination throughout the process, and their follow-up is thorough and timely. Their professionalism makes them a reliable partner for senior-level manufacturing talent.",
      author: "General Manager – Human Resource",
      company: "A leading Manufacturing MNC",
    },
  ];

  return (
    <section id="testimonials" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across industries for our commitment to excellence, 
            speed, and quality in talent acquisition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              <div className="border-t pt-4">
                <cite className="not-italic">
                  <div className="font-semibold text-foreground mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;