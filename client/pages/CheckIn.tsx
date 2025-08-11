import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Activity, Heart, Droplet, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

export default function CheckIn() {
  const vitalsData = [
    { 
      icon: Activity, 
      title: "Blood Pressure", 
      value: "110/78", 
      unit: "mmHg", 
      bgColor: "bg-teal-200",
      iconColor: "text-black"
    },
    { 
      icon: Heart, 
      title: "Heart Rate", 
      value: "90", 
      unit: "BPM", 
      bgColor: "bg-teal-200",
      iconColor: "text-black"
    },
    { 
      icon: Droplet, 
      title: "Blood Sugar", 
      value: "-", 
      unit: "mg/dL", 
      bgColor: "bg-purple-200",
      iconColor: "text-black"
    },
    { 
      icon: Gauge, 
      title: "Oxygen", 
      value: "92", 
      unit: "%", 
      bgColor: "bg-purple-200",
      iconColor: "text-black"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md mx-auto">
      <MobileStatusBar />
      
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center gap-3">
        <Link to="/medbot">
          <Button size="icon" variant="ghost" className="text-black">
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-black">Check-In</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto pb-24">
        {/* Your Vitals Card */}
        <div className="bg-pink-200 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-black" />
              </div>
              <h2 className="text-xl font-bold text-black">Your Vitals</h2>
            </div>
            <span className="text-black font-medium">31/07 9:41</span>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-black font-medium text-sm">Blood Pressure</p>
              <p className="text-black font-bold text-2xl">110/78</p>
            </div>
            <div>
              <p className="text-black font-medium text-sm">Heart Rate</p>
              <p className="text-black font-bold text-2xl">90</p>
            </div>
            <div>
              <p className="text-black font-medium text-sm">SpO2</p>
              <p className="text-black font-bold text-2xl">90</p>
            </div>
            <div>
              <p className="text-black font-medium text-sm">Blood Sugar</p>
              <p className="text-black font-bold text-2xl">-</p>
            </div>
            <div>
              <p className="text-black font-medium text-sm">Temperature</p>
              <p className="text-black font-bold text-2xl">36</p>
            </div>
            <div>
              <p className="text-black font-medium text-sm">Weight</p>
              <p className="text-black font-bold text-2xl">-</p>
            </div>
          </div>
        </div>

        {/* Health Question */}
        <div className="bg-yellow-200 rounded-3xl p-6">
          <h3 className="text-lg font-bold text-black mb-4">How is your health today?</h3>
          <input
            type="text"
            placeholder="Share your health here..."
            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 placeholder-gray-500 text-black"
          />
        </div>

        {/* Vitals Grid */}
        <div className="grid grid-cols-2 gap-4">
          {vitalsData.map((vital, index) => (
            <Link 
              key={index} 
              to={vital.title === "Blood Sugar" ? "/medbot/blood-sugar" : "#"}
              className={`${vital.bgColor} rounded-3xl p-6 block hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center gap-3 mb-4">
                <vital.icon className={`w-6 h-6 ${vital.iconColor}`} />
                <h3 className="font-semibold text-black">{vital.title}</h3>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-black">{vital.value}</p>
                <p className="text-black text-sm">{vital.unit}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Vitals Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-300 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-6 h-6 text-black" />
              <h3 className="font-semibold text-black">Temperature</h3>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-black">-</p>
              <p className="text-black text-sm">°C</p>
            </div>
          </div>
          <div className="bg-purple-300 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-6 h-6 text-black" />
              <h3 className="font-semibold text-black">Weight</h3>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-black">-</p>
              <p className="text-black text-sm">kg</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
