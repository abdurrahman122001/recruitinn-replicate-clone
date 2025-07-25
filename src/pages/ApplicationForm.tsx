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
import { Mail, FileText, User, Briefcase, Phone, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  currentCompany: string;
  position: string;
  experience: string;
  message: string;
  resume: File | null;
}

export default function ApplicationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    currentCompany: "",
    position: "",
    experience: "",
    message: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File Too Large",
          description: "Please upload a PDF smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("currentCompany", formData.currentCompany);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("message", formData.message);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const response = await fetch("/api/send-application", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit application");
      }

      setSubmitSuccess(true);
      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We'll review it shortly.",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      currentCompany: "",
      position: "",
      experience: "",
      message: "",
      resume: null,
    });
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 animate-fade-in">
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
              We're always looking for talented individuals to join our growing team. 
              Submit your application and we'll get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 animate-scale-in">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Application Submitted!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your application. We've received your information and will review it shortly.
                  </p>
                  <Button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90"
                  >
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      Application Form
                    </h2>
                    <p className="text-gray-600">
                      Please fill out the form below and attach your resume (PDF only, max 5MB).
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentCompany" className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Current Company
                        </Label>
                        <Input
                          id="currentCompany"
                          value={formData.currentCompany}
                          onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                          placeholder="Current employer (if applicable)"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="position">Position Applying For *</Label>
                        <Select
                          onValueChange={(value) => handleInputChange("position", value)}
                          value={formData.position}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="frontend">Frontend Developer</SelectItem>
                            <SelectItem value="backend">Backend Developer</SelectItem>
                            <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                            <SelectItem value="uiux">UI/UX Designer</SelectItem>
                            <SelectItem value="product">Product Manager</SelectItem>
                            <SelectItem value="marketing">Marketing Specialist</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select
                        onValueChange={(value) => handleInputChange("experience", value)}
                        value={formData.experience}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-4">2-4 years</SelectItem>
                          <SelectItem value="5-7">5-7 years</SelectItem>
                          <SelectItem value="8-10">8-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Cover Letter</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us why you'd be a great fit for this position..."
                        rows={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Resume (PDF only) *
                      </Label>
                      <div className="flex items-center gap-4">
                        <label className="flex-1">
                          <div className={`flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                            formData.resume 
                              ? "border-green-500 bg-green-50" 
                              : "border-gray-300 hover:border-blue-500"
                          }`}>
                            <div className="text-center">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <FileText className="w-8 h-8 mb-4 text-gray-500" />
                                <p className="mb-2 text-sm text-gray-500">
                                  {formData.resume ? (
                                    <span className="font-semibold text-green-600">{formData.resume.name}</span>
                                  ) : (
                                    <>
                                      <span className="font-semibold">Click to upload</span> or drag and drop
                                    </>
                                  )}
                                </p>
                                <p className="text-xs text-gray-500">PDF (max. 5MB)</p>
                              </div>
                              <input
                                id="resume"
                                type="file"
                                className="hidden"
                                accept=".pdf"
                                onChange={handleFileChange}
                                required
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 py-6 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                            Processing...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              )}
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