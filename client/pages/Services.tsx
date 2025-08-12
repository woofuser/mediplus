import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, FileText, Pill, Calendar, Brain, MessageSquare, Dumbbell, Activity, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      icon: FileText,
      title: "Check-in Your Vitals",
      link: "/medbot/check-in",
      description: "Monitor blood pressure, heart rate, and vital signs"
    },
    {
      icon: Pill,
      title: "Medications",
      link: "#",
      description: "Track medication schedules and adherence"
    },
    {
      icon: Calendar,
      title: "Appointments",
      link: "/medbot/appointments",
      description: "Schedule and manage medical appointments"
    },
    {
      icon: Brain,
      title: "Mental Health",
      link: "/medbot/mental-health",
      description: "Mood tracking and wellness resources"
    },
    {
      icon: MessageSquare,
      title: "MedBot",
      link: "/medbot",
      isBot: true,
      description: "AI-powered health assistant and chat"
    },
    {
      icon: Activity,
      title: "Mental Health Resources",
      link: "/medbot/mental-health-resources",
      description: "Mindfulness and meditation guidance"
    },
    {
      icon: Brain,
      title: "MindfulBot",
      link: "/medbot/mindful-bot",
      description: "AI-powered mental health support and guidance"
    },
    {
      icon: Heart,
      title: "MedBot Assistant",
      link: "/medbot/medbot-chat",
      description: "AI medical information and health guidance"
    },
    {
      icon: Dumbbell,
      title: "Exercise & Wellness",
      link: "/medbot/exercise-wellness",
      description: "Fitness tracking and workout plans"
    },
    {
      icon: Activity,
      title: "Health Overview",
      link: "/medbot/health-overview",
      description: "Comprehensive health analytics and insights"
    },
    {
      icon: ClipboardList,
      title: "Mental Health Overview",
      link: "/medbot/mental-health-overview",
      description: "Mental wellness tracking and reports"
    },
    {
      icon: MessageSquare,
      title: "Questions to Ask Doctor",
      link: "/medbot/questions",
      description: "AI-generated questions for medical visits"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <WebsiteHeader />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Link to="/medbot/home">
            <Button size="icon" variant="ghost" className="text-black">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-black">Services</h1>
        </div>

        <h2 className="text-xl font-bold text-black mb-8">Service Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCategories.map((service, index) => (
            <Link key={index} to={service.link}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-gray-200">
                <div className="flex flex-col items-center text-center space-y-4">
                  {service.isBot ? (
                    <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center relative">
                      <service.icon className="w-8 h-8 text-white" />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 border-2 border-gray-800 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-gray-800" />
                    </div>
                  )}

                  <div>
                    <h3 className="text-black text-base font-semibold text-center leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
