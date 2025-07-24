import React from "react";
import { Button } from "@/components/ui/button"; // Adjusted import assuming a custom UI library
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="bg-gradient-primary rounded-2xl lg:rounded-3xl p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Hiring?
        </h2>
        <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Join thousands of companies already using RecruitInn to find and hire the best talent faster than ever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="text-primary border-white hover:bg-white hover:text-primary">
            Apply As Candidate
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </div>
  </section>
  );
}