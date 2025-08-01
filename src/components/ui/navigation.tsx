import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import logo from "../../../public/Zillion-Connect--Final.png"
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img className="w-48 h-32" src={logo} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#about';
                }
              }}
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#services';
                }
              }}
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                  document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#process';
                }
              }}
            >
              Process
            </a>
            <a
              href="#industry-excellence"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                  document.getElementById('industry-excellence')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#industry-excellence';
                }
              }}
            >
              Industry Excellence
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#testimonials';
                }
              }}
            >
              Testimonials
            </a>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-muted-foreground"
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/application-form">Apply As Candidate</Link>
            </Button>

            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="space-x-1">
                  <span>Login</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/client-login">Hire Talent</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/candidate-login">Apply As Engineer</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Arabic</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
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
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (location.pathname === '/') {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#about';
                  }
                }}
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (location.pathname === '/') {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#services';
                  }
                }}
              >
                Services
              </a>
              <a
                href="#process"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (location.pathname === '/') {
                    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#process';
                  }
                }}
              >
                Process
              </a>
              <a
                href="#industry-excellence"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (location.pathname === '/') {
                    document.getElementById('industry-excellence')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#industry-excellence';
                  }
                }}
              >
                Industry Excellence
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (location.pathname === '/') {
                    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#testimonials';
                  }
                }}
              >
                Testimonials
              </a>
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