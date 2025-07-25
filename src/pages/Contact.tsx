import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Users,
  Calendar,
} from "lucide-react";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    inquiryType: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "123 Innovation Drive",
        "San Francisco, CA 94105",
        "United States",
      ],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "Monday - Friday",
        "9:00 AM - 6:00 PM PST",
      ],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@zillions.ai",
        "support@zillions.ai",
        "sales@zillions.ai",
      ],
      action: "Send Email",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get started with Zillions?",
      answer:
        "You can start using Zillions immediately after signing up. Our onboarding process takes less than 30 minutes, and you'll be posting your first job within the day.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 email support, live chat during business hours, and dedicated account management for Enterprise clients. We also provide comprehensive training and resources.",
    },
    {
      question: "Can I integrate Zillions with my existing systems?",
      answer:
        "Yes! We offer integrations with popular HR systems, ATS platforms, and productivity tools. Our API also allows for custom integrations.",
    },
    {
      question: "How accurate is your AI matching?",
      answer:
        "Our AI achieves 95% accuracy in candidate-role matching. We continuously improve our algorithms based on successful placements and client feedback.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6 animate-fade-in">
              Get in{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
              Ready to transform your hiring process? We'd love to hear from
              you. Get in touch with our team and let's discuss how Zillions
              can help you find the perfect candidates.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-card p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-card animate-slide-in-right">
                <div className="mb-6 lg:mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-2">
                    Send us a message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 lg:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        placeholder="Your Company Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("companySize", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">
                            51-200 employees
                          </SelectItem>
                          <SelectItem value="201-500">
                            201-500 employees
                          </SelectItem>
                          <SelectItem value="500+">500+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("inquiryType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Request Demo</SelectItem>
                          <SelectItem value="pricing">
                            Pricing Information
                          </SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about your hiring needs and how we can help..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    className="w-full bg-gradient-primary hover:opacity-90"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 lg:space-y-8">
                {/* Contact Cards */}
                <div className="space-y-4 lg:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in hover-scale"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <info.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-card-foreground mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1 mb-3">
                            {info.details.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className="text-sm text-muted-foreground"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                          <Button variant="outline" size="sm">
                            {info.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-primary rounded-2xl p-6 lg:p-8 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">
                    Why Choose Zillions?
                  </h3>
                  <div className="grid grid-cols-2 gap-4 lg:gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Clock className="w-5 h-5" />
                        <span className="text-lg lg:text-xl font-bold">
                          24h
                        </span>
                      </div>
                      <p className="text-sm text-white/80">Response Time</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Users className="w-5 h-5" />
                        <span className="text-lg lg:text-xl font-bold">
                          500+
                        </span>
                      </div>
                      <p className="text-sm text-white/80">Happy Clients</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-lg lg:text-xl font-bold">
                          24/7
                        </span>
                      </div>
                      <p className="text-sm text-white/80">Support</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="text-lg lg:text-xl font-bold">
                          Free
                        </span>
                      </div>
                      <p className="text-sm text-white/80">Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground">
                Quick answers to common questions about Zillions
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card p-6 lg:p-8 rounded-2xl shadow-card"
                >
                  <h3 className="text-lg font-bold text-card-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
      <Footer />
    </div>
  );
}
