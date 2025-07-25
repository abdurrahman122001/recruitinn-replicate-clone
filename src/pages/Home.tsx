import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CandidateCard } from "@/components/candidate-card";
import { TrustedLogos } from "@/components/trusted-logos";
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
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Strengths from "@/components/strength";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden min-h-[70vh] flex items-center">
        {/* Mobile Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 sm:hidden"></div>

        {/* Mobile Floating Elements */}
        <div className="absolute top-10 left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 rounded-full blur-xl animate-pulse sm:hidden"></div>
        <div
          className="absolute top-32 right-8 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 rounded-full blur-lg animate-pulse sm:hidden"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-15 rounded-full blur-2xl animate-pulse sm:hidden"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Desktop Floating candidate cards - Positioned absolutely outside text container */}
          <div
            className="absolute top-1/4 left-4 -translate-y-1/4 animate-fade-in hidden lg:block"
            style={{ animationDelay: "0.2s" }}
          >
            <CandidateCard
              name="Ethan Parker"
              role="iOS Developer"
              status="not-eligible"
              className="transform rotate-3 w-48 xl:w-56"
            />
          </div>

          <div
            className="absolute top-1/3 right-4 -translate-y-1/3 animate-fade-in hidden lg:block"
            style={{ animationDelay: "0.4s" }}
          >
            <CandidateCard
              name="Amina Farah"
              role="Full-Stack Developer"
              status="recommended"
              className="transform -rotate-2 w-48 xl:w-56"
            />
          </div>

          {/* Narrower Text Container */}
          <div className="relative z-10 px-4 sm:px-0 max-w-2xl lg:max-w-2xl mx-auto">
            {/* Mobile Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6 animate-fade-in sm:hidden">
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">
                AI-Powered Recruitment
              </span>
            </div>

            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 animate-slide-up leading-tight">
                Revolutionizing{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Recruitment
                </span>
              </h1>

              <p
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 mx-auto animate-slide-up leading-relaxed"
                style={{ animationDelay: "0.2s" }}
              >
                Zillions Connect is an innovative & dynamic Human Resource Accelerator committed to delivering solutions
              </p>

              <div
                className="animate-slide-up space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
                style={{ animationDelay: "0.4s" }}
              >
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-base px-8 py-4 rounded-xl shadow-lg w-full sm:w-auto">
                  Start Now
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="text-base px-8 py-4 rounded-xl border-2 border-gray-300 hover:bg-gray-50 w-full sm:w-auto"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Mobile Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 sm:hidden">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-gray-500">Companies</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-indigo-600">10K+</div>
                  <div className="text-xs text-gray-500">Candidates</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Background decorations - Adjusted positions */}
          <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 rounded-full blur-2xl hidden sm:block"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 rounded-full blur-2xl hidden sm:block"></div>
        </div>
      </section>

      {/* Trusted Companies */}
      {/* <section className="py-6 sm:py-10 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <TrustedLogos />
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Why Choose Zillions?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Our AI platform transforms recruitment with automation and
              insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-2 lg:mb-3">
                AI-Powered Matching
              </h3>
              <p className="text-xs lg:text-sm text-gray-600">
                AI analyzes profiles to match candidates with your needs.
              </p>
            </div>

            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-2 lg:mb-3">
                Smart Assessment
              </h3>
              <p className="text-xs lg:text-sm text-gray-600">
                Assess skills and culture fit with advanced tools.
              </p>
            </div>

            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-2 lg:mb-3">
                Lightning Fast
              </h3>
              <p className="text-xs lg:text-sm text-gray-600">
                Speed up hiring with automated screening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Streamlined steps to find and hire the best talent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Talent Sourcing
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We systematically identify and engage with top talent using
                    advanced sourcing techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <BarChart2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Candidate Assessment
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Comprehensive evaluation of skills, experience, and cultural
                    fit through our proven methodology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Strategic Matching
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    AI-powered matching aligns candidate strengths with your
                    specific role requirements.
                  </p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-sm px-5 py-3 rounded-lg mt-4">
                Learn More About Our Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Team working"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Proven Methodology
                  </h3>
                  <p className="text-gray-200 text-sm mt-1">
                    Delivering quality candidates since 2015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Success Stories
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Real results from companies using Zillions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Team celebrating"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Tech Startup Reduced Hiring Time by 60%
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  "Zillions helped us scale our engineering team from 10 to 50
                  in just 3 months. Their AI matching saved us hundreds of hours
                  in screening."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-medium">JD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Jane Doe
                    </p>
                    <p className="text-xs text-gray-500">CTO, TechStart Inc.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Enterprise Company Improved Retention by 45%
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  "The cultural fit assessment from Zillions has dramatically
                  improved our employee retention and team cohesion."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-medium">JS</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      John Smith
                    </p>
                    <p className="text-xs text-gray-500">
                      HR Director, Fortune 500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why It Works
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
                    Our AI models continuously improve based on feedback and
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
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f402?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="HR professional analyzing data"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Team commitment"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Commitment to Excellence
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

      {/* CTA & Footer */}
      <CTA />
      <Footer />
    </div>
  );
}
