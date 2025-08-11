import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Button } from "@/components/ui/button";
import { Alert, AlertTriangle, ChevronRight, Calendar, Users, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md mx-auto">
      <MobileStatusBar />
      
      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto pb-24">
        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-bold text-black">Welcome back, Bella!</h1>
        </div>

        {/* Check-In Your Vitals */}
        <div className="bg-pink-200 rounded-3xl p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-black">Check-In Your Vitals</h2>
            <span className="text-black font-bold text-sm">31/07 9:41</span>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div>
              <p className="text-black font-medium text-sm">Blood Pressure</p>
              <p className="text-black font-bold text-xl">110/78</p>
            </div>
            <div>
              <p className="text-black font-medium text-sm">Heart Rate</p>
              <p className="text-black font-bold text-xl">90</p>
            </div>
            <div>
              <p className="text-black font-medium text-sm">SpO2</p>
              <p className="text-black font-bold text-xl">90</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <p className="text-black font-medium text-sm">Blood Sugar</p>
          </div>
          <p className="text-red-600 font-medium text-sm mb-3">Needs update</p>

          <div className="text-right">
            <span className="text-black text-xs italic">&gt; More Information</span>
          </div>

          {/* Health Overview Button */}
          <Link to="/medbot/health-overview">
            <div className="bg-teal-200 rounded-b-3xl p-4 -m-6 mt-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-black">Health Overview</h3>
              <ChevronRight className="w-6 h-6 text-teal-600" />
            </div>
          </Link>
        </div>

        {/* Medication */}
        <div className="bg-purple-200 rounded-3xl p-6">
          <h3 className="text-lg font-bold text-black mb-4">Medication</h3>
          
          <div className="flex gap-4">
            <div className="w-28 h-28 bg-white rounded-2xl p-3 flex items-center justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/93fdf37126257e7e51b2da4598b4467ed75b3aef?width=222" 
                alt="Medication bottles" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-gray-400 bg-gray-200 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-1 bg-green-600 rounded-sm"></div>
                </div>
                <span className="text-black text-sm">Lisinopril 10 mg</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-gray-400 bg-gray-200 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-1 bg-green-600 rounded-sm"></div>
                </div>
                <span className="text-black text-sm">Omeprazole 10 mg</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-gray-400 bg-gray-200 rounded-sm"></div>
                <span className="text-black text-sm">Simvastatin 20 mg</span>
              </div>
            </div>
          </div>

          <div className="text-right mt-3">
            <span className="text-black text-xs italic">&gt; More Information</span>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-yellow-200 rounded-3xl p-4 text-center">
            <Calendar className="w-8 h-8 text-black mx-auto mb-2" />
            <span className="text-black text-sm font-bold">Appointment</span>
          </div>
          
          <Link to="/medbot/mental-health">
            <div className="bg-yellow-200 rounded-3xl p-4 text-center">
              <Users className="w-8 h-8 text-black mx-auto mb-2" />
              <span className="text-black text-sm font-bold">Mental Health</span>
            </div>
          </Link>
          
          <div className="bg-yellow-200 rounded-3xl p-4 text-center">
            <Dumbbell className="w-8 h-8 text-black mx-auto mb-2" />
            <span className="text-black text-sm font-bold">Exercise Wellness</span>
          </div>
        </div>

        {/* MedBot Chat */}
        <Link to="/medbot">
          <div className="bg-teal-500 rounded-3xl p-4 flex items-center gap-3">
            <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-teal-400 text-xs font-bold">+</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-black text-sm">
                <span className="font-normal">Chat with </span>
                <span className="font-bold">MedBot</span>
                <span className="font-normal"> for further assistance</span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <BottomNavigation />
    </div>
  );
}
