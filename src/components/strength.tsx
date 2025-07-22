import { ArrowRight } from "lucide-react";

export default function Strengths() {
  const strengths = [
    "Collaboration & Synchronization",
    "Appreciation of Technology",
    "Database Management",
    "Our Speed that Drives Us",
    "Right Mapping of Resources",
    "Ideology based on Trust",
  ];

  return (
    <section className="py-16 lg:py-24 bg-[var(--gradient-primary)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Our Strengths
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Discover the core pillars that empower Zillions Connect to deliver exceptional HR solutions.
          </p>
        </div>
        <div className="relative">
          <div className="flex flex-row justify-center items-center space-x-6 sm:space-x-10 flex-wrap">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="flex flex-col items-center group"
              >
                <div
                  className="w-24 h-24 sm:w-32 sm:h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-medium shadow-md hover:shadow-xl transition-all duration-300 group-hover:bg-opacity-30"
                >
                  {strength}
                </div>
                {index < strengths.length - 1 && (
                  <ArrowRight
                    className="text-white mt-4 rotate-[-45deg] animate-pulse group-hover:animate-none"
                    style={{ animationDelay: `${index * 0.2}s`, animationDuration: "1.2s" }}
                  />
                )}
              </div>
            ))}
          </div>
          {/* Decorative hourglass image */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-30 animate-pulse-slow">
            <img
              src="https://via.placeholder.com/120?text=Hourglass"
              alt="Hourglass"
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
            />
          </div>
        </div>
      </div>
      {/* Subtle blue wave overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23007bff1a\' fill-opacity=\'0.1\' d=\'M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,240C1248,256,1344,256,1392,256L1440,256V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V160Z\'/%3E%3C/svg%3E')] opacity-50 -z-10"></div>
    </section>
  );
}