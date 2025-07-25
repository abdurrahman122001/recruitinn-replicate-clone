import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Building } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("client");

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-3xl shadow-elegant p-8 animate-scale-in">
          {/* Logo */}
          <div className="text-center mb-8 animate-fade-in">
            <Link to="/" className="inline-flex items-center space-x-2 hover-scale">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">Recruitinn.ai</span>
            </Link>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="client" className="flex items-center space-x-2">
                <Building className="w-4 h-4" />
                <span>For Employers</span>
              </TabsTrigger>
              <TabsTrigger value="candidate" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>For Candidates</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="client" className="space-y-6">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-card-foreground mb-2">
                  Welcome Back
                </h1>
                <p className="text-muted-foreground">
                  Sign in to find your next great hire
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="client-email">Work Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="client-email"
                      type="email"
                      placeholder="your@company.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="client-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="client-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                  Sign In
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/client-signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="candidate" className="space-y-6">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-card-foreground mb-2">
                  Welcome Back
                </h1>
                <p className="text-muted-foreground">
                  Sign in to find your dream job
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="candidate-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="candidate-email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="candidate-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="candidate-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                  Sign In
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/candidate-signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </div>
              </form>
            </TabsContent>
          </Tabs>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button variant="outline" className="w-full">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}