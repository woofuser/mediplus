import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, FileText, Pill, Calendar, Brain, MessageSquare, Dumbbell, Activity, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      icon: FileText,
      title: "Check-in Your Vitals",
      link: "/medbot/check-in"
    },
    {
      icon: Pill,
      title: "Medications",
      link: "#"
    },
    {
      icon: Calendar,
      title: "Appointments",
      link: "#"
    },
    {
      icon: Brain,
      title: "Mental Health",
      link: "/medbot/mental-health"
    },
    {
      icon: MessageSquare,
      title: "MedBot",
      link: "/medbot",
      isBot: true
    },
    {
      icon: Activity,
      title: "MindfulBot",
      link: "#"
    },
    {
      icon: Dumbbell,
      title: "Exercise & Wellness",
      link: "#"
    },
    {
      icon: Activity,
      title: "Health Overview",
      link: "/medbot/health-overview"
    },
    {
      icon: ClipboardList,
      title: "Mental Health Overview",
      link: "#"
    },
    {
      icon: MessageSquare,
      title: "Questions to Ask Doctor",
      link: "/medbot/questions"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      <MobileStatusBar />

      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center gap-3">
        <Link to="/medbot/home">
          <Button size="icon" variant="ghost" className="text-black">
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-black">Services</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-24">
        <h2 className="text-xl font-bold text-black mb-6">Service Categories</h2>

        <div className="grid grid-cols-3 gap-6">
          {serviceCategories.map((service, index) => (
            <Link key={index} to={service.link}>
              <div className="flex flex-col items-center text-center space-y-3">
                {service.isBot ? (
                  <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center relative">
                    <service.icon className="w-8 h-8 text-white" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-16 h-16 border-2 border-black rounded-lg flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                )}

                <span className="text-black text-sm font-medium text-center leading-tight">
                  {service.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
