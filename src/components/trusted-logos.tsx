export function TrustedLogos() {
  const companies = [
    { name: "CVT", logo: "/placeholder-logo-1.svg" },
    { name: "360", logo: "/placeholder-logo-2.svg" },
    { name: "SkillBuilder", logo: "/placeholder-logo-3.svg" },
    { name: "UT", logo: "/placeholder-logo-4.svg" },
    { name: "Wellteq", logo: "/placeholder-logo-5.svg" },
    { name: "Linkify", logo: "/placeholder-logo-6.svg" },
  ];

  return (
    <div className="py-12">
      <p className="text-center text-muted-foreground mb-8 text-sm">Trusted by</p>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] space-x-12">
          {/* First set */}
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-24 h-12 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-16 h-8 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">{company.name}</span>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless scrolling */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-24 h-12 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-16 h-8 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}