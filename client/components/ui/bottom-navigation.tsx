import { Home, Settings, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function BottomNavigation() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/medbot/home" },
    { icon: Settings, label: "Services", path: "/medbot/services" },
    { icon: User, label: "Profile", path: "/medbot/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center gap-1 text-xs transition-colors",
                isActive ? "text-black" : "text-gray-500"
              )}
            >
              <Icon className={cn("w-6 h-6", isActive ? "fill-black" : "")} />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
