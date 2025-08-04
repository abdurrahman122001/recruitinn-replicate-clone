import { Users, MapPin, Briefcase } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Regional Head – TA",
      position: "Talent Acquisition Leader",
      company: "Global MNC in EPC Industry",
      bio: "We've partnered with Zillions Connect for several critical leadership hires, and their understanding of the oil and gas industry is truly impressive. Their detailed candidate screening, speed of execution, and consistent communication throughout the process made the experience seamless. The team demonstrates excellent coordination and proactive follow-ups, ensuring we're aligned at every stage. They've become a trusted partner for senior-level recruitment.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "AVP – Talent Acquisition",
      position: "Associate Vice President",
      company: "Leading Organization in Renewable Industry",
      bio: "What sets Zillion Connect apart is their precise grasp of our technical requirements and organizational culture. Their rigorous screening process ensures only the most relevant candidates reach us, significantly reducing our hiring cycle. We particularly value their ability to move quickly without compromising quality, as well as their structured communication and follow-up at every milestone. It's a refreshing, efficient partnership in a challenging talent market.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "General Manager – Human Resource",
      position: "HR General Manager",
      company: "Leading Manufacturing MNC",
      bio: "Your Zillions Connect has been instrumental in helping us fill key leadership roles within our manufacturing operations. Their grasp of industry-specific competencies, combined with a meticulous screening process, ensures we only engage with highly suitable candidates. They're quick to respond, maintain excellent coordination throughout the process, and their follow-up is thorough and timely. Their professionalism makes them a reliable partner for senior-level manufacturing talent.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section id="team" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated professionals working together to connect exceptional talent 
            with leading organizations across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              
              <div className="flex items-center justify-center mb-2">
                <Briefcase className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  {member.position}
                </span>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-4 h-4 text-muted-foreground mr-2" />
                <span className="text-sm text-muted-foreground">
                  {member.company}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {member.bio}
              </p>
            </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Users className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">
              Building strong partnerships across 200+ companies in 10+ countries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;