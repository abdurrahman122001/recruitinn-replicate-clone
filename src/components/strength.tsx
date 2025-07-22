import { ArrowRight } from "lucide-react";

export default function Strengths() {
  const strengths = [
    "Collaboration",
    "Technology",
    "Database",
    "Speed",
    "Resources",
    "Trust",
  ];

  return (
    <section className="py-16 lg:py-24 bg-[var(--background)] dark:bg-[var(--gradient-primary)] relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary)] dark:text-white mb-4 drop-shadow-md">
            Our Strengths
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)] dark:text-white/80 max-w-2xl mx-auto leading-relaxed">
            Key pillars empowering Zillions Connect's HR excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-white/20 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <p className="text-[var(--primary)] dark:text-white text-center text-base sm:text-lg font-medium">
                {strength}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}