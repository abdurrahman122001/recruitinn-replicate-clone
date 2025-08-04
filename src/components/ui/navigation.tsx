import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import logo from "../../../public/Zillion-Connect--Final.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleSectionClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      // If we're already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow page navigation to complete
    }
  };

  const renderSectionLink = (sectionId: string, text: string) => {
    return (
      <button
        onClick={() => handleSectionClick(sectionId)}
        className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
      >
        {text}
      </button>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              className="w-32 h-20 md:w-48 md:h-32"
              src={logo}
              alt="Logo"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {renderSectionLink('about', 'About Us')}
            {renderSectionLink('services', 'Services')}
            {renderSectionLink('process', 'Process')}
            {renderSectionLink('industry-excellence', 'Industry Excellence')}
            {renderSectionLink('testimonials', 'Testimonials')}
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/application-form">Apply as Candidate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleSectionClick('about')}
                className="text-sm font-medium text-muted-foreground hover:text-primary text-left"
              >
                About Us
              </button>
              <button
                onClick={() => handleSectionClick('services')}
                className="text-sm font-medium text-muted-foreground hover:text-primary text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleSectionClick('process')}
                className="text-sm font-medium text-muted-foreground hover:text-primary text-left"
              >
                Process
              </button>
              <button
                onClick={() => handleSectionClick('industry-excellence')}
                className="text-sm font-medium text-muted-foreground hover:text-primary text-left"
              >
                Industry Excellence
              </button>
              <button
                onClick={() => handleSectionClick('testimonials')}
                className="text-sm font-medium text-muted-foreground hover:text-primary text-left"
              >
                Testimonials
              </button>
              <Link
                to="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/application-form">Apply As Candidate</Link>
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90 w-full" size="sm" asChild>
                  <Link to="/contact">Hire Top Talent</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}