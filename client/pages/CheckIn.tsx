import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Activity, Heart, Droplet, Gauge, Thermometer, Weight } from "lucide-react";
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
    { 
      icon: Thermometer, 
      title: "Temperature", 
      value: "36", 
      unit: "°C", 
      bgColor: "bg-purple-300",
      iconColor: "text-black"
    },
    { 
      icon: Weight, 
      title: "Weight", 
      value: "-", 
      unit: "kg", 
      bgColor: "bg-purple-300",
      iconColor: "text-black"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <WebsiteHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/medbot">
                <Button size="icon" variant="ghost" className="text-black">
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              </Link>
              <Activity className="w-8 h-8 text-purple-600" />
              <h1 className="text-3xl font-bold text-black">Health Check-In</h1>
            </div>

            {/* Your Vitals Card */}
            <div className="bg-gradient-to-r from-pink-200 to-pink-300 rounded-3xl p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-black">Your Vitals</h2>
                </div>
                <span className="text-black font-medium bg-white px-4 py-2 rounded-full shadow-sm">31/07 9:41</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/50 rounded-2xl p-4">
                  <p className="text-black font-medium text-sm mb-2">Blood Pressure</p>
                  <p className="text-black font-bold text-3xl">110/78</p>
                  <p className="text-black/70 text-xs">mmHg</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4">
                  <p className="text-black font-medium text-sm mb-2">Heart Rate</p>
                  <p className="text-black font-bold text-3xl">90</p>
                  <p className="text-black/70 text-xs">BPM</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4">
                  <p className="text-black font-medium text-sm mb-2">SpO2</p>
                  <p className="text-black font-bold text-3xl">92</p>
                  <p className="text-black/70 text-xs">%</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4">
                  <p className="text-black font-medium text-sm mb-2">Blood Sugar</p>
                  <p className="text-black font-bold text-3xl">-</p>
                  <p className="text-black/70 text-xs">mg/dL</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4">
                  <p className="text-black font-medium text-sm mb-2">Temperature</p>
                  <p className="text-black font-bold text-3xl">36</p>
                  <p className="text-black/70 text-xs">°C</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4">
                  <p className="text-black font-medium text-sm mb-2">Weight</p>
                  <p className="text-black font-bold text-3xl">-</p>
                  <p className="text-black/70 text-xs">kg</p>
                </div>
              </div>
            </div>

            {/* Health Question */}
            <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-black mb-6">How is your health today?</h3>
              <textarea
                placeholder="Share your health here... Tell us how you're feeling, any symptoms, or concerns you'd like to track."
                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 placeholder-gray-500 text-black resize-none h-32 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="mt-4 flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full shadow-lg">
                  Save Check-In
                </Button>
              </div>
            </div>
          </div>

          {/* Vitals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vitalsData.map((vital, index) => (
              <Link 
                key={index} 
                to={vital.title === "Blood Sugar" ? "/medbot/blood-sugar" : "#"}
                className={`${vital.bgColor} rounded-3xl p-8 block hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <vital.icon className={`w-6 h-6 ${vital.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-black text-lg">{vital.title}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-black">{vital.value}</p>
                  <p className="text-black text-lg font-medium">{vital.unit}</p>
                </div>
                <div className="mt-4 text-right">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white/80 border-black/20 text-black hover:bg-white"
                  >
                    Update
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Actions Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-black">Track Symptoms</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Log any symptoms or concerns you're experiencing today.</p>
              <Button variant="outline" className="w-full">Add Symptom</Button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-black">Medication</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Track your daily medications and dosages.</p>
              <Button variant="outline" className="w-full">Log Medication</Button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-black">Mood Check</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Rate your mood and energy levels for today.</p>
              <Button variant="outline" className="w-full">Rate Mood</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
