import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Settings, User, Heart, Brain, FileText, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function WebsiteHeader() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/medbot/home" },
    { icon: FileText, label: "Check-In", path: "/medbot/check-in" },
    { icon: Brain, label: "Mental Health", path: "/medbot/mental-health" },
    { icon: Heart, label: "Health Overview", path: "/medbot/health-overview" },
    { icon: MessageSquare, label: "MedBot Chat", path: "/medbot" },
    { icon: Settings, label: "Services", path: "/medbot/services" },
    { icon: User, label: "Profile", path: "/medbot/profile" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/medbot/home" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-teal-500 text-xs font-bold">+</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-black">
                Medi<span className="text-purple-600">Plus</span>
              </h1>
              <p className="text-xs text-gray-500">Track. Prevent. Thrive.</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ icon: Icon, label, path }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-teal-100 text-teal-700" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Settings
            </Button>
            <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
              Get Help
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
