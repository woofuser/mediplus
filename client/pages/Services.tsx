import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Brain, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Check-In & Vitals",
      description: "Track your health metrics",
      link: "/medbot/check-in",
      bgColor: "bg-pink-200"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Mood tracking & wellness",
      link: "/medbot/mental-health",
      bgColor: "bg-purple-200"
    },
    {
      icon: Activity,
      title: "Blood Sugar",
      description: "Monitor glucose levels",
      link: "/medbot/blood-sugar",
      bgColor: "bg-teal-200"
    },
    {
      icon: MessageSquare,
      title: "Doctor Questions",
      description: "Prepare for appointments",
      link: "/medbot/questions",
      bgColor: "bg-yellow-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md mx-auto">
      <MobileStatusBar />
      
      {/* Header */}
      <div className="bg-white px-6 py-4">
        <h1 className="text-2xl font-bold text-black">Services</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto pb-24">
        {services.map((service, index) => (
          <Link key={index} to={service.link}>
            <Button 
              variant="outline" 
              className={`w-full p-6 h-auto ${service.bgColor} border-gray-300 hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center gap-4 w-full">
                <service.icon className="w-8 h-8 text-black" />
                <div className="text-left">
                  <h3 className="font-semibold text-black text-lg">{service.title}</h3>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
              </div>
            </Button>
          </Link>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
}
