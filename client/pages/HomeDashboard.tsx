import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ChevronRight, Calendar, Users, Dumbbell, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <WebsiteHeader />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome */}
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Welcome back, Bella!</h1>
              <p className="text-gray-600">Here's your health overview for today</p>
            </div>

            {/* Check-In Your Vitals */}
            <div className="bg-pink-200 rounded-3xl p-8 relative">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-black">Check-In Your Vitals</h2>
                <span className="text-black font-bold text-sm">31/07 9:41</span>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center mb-6">
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
              </div>

              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p className="text-black font-medium text-sm">Blood Sugar</p>
              </div>
              <p className="text-red-600 font-medium text-sm mb-4">Needs update</p>

              <div className="text-right mb-4">
                <span className="text-black text-sm italic">&gt; More Information</span>
              </div>

              {/* Health Overview Button */}
              <Link to="/medbot/health-overview">
                <div className="bg-teal-200 rounded-b-3xl p-4 -m-8 mt-4 flex items-center justify-between hover:bg-teal-300 transition-colors">
                  <h3 className="text-xl font-bold text-black">Health Overview</h3>
                  <ChevronRight className="w-6 h-6 text-teal-600" />
                </div>
              </Link>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-3 gap-6">
              <Link to="/medbot/appointments">
                <div className="bg-yellow-200 rounded-3xl p-6 text-center hover:bg-yellow-300 transition-colors">
                  <Calendar className="w-10 h-10 text-black mx-auto mb-3" />
                  <span className="text-black text-sm font-bold">Appointment</span>
                </div>
              </Link>

              <Link to="/medbot/mental-health">
                <div className="bg-yellow-200 rounded-3xl p-6 text-center hover:bg-yellow-300 transition-colors">
                  <Users className="w-10 h-10 text-black mx-auto mb-3" />
                  <span className="text-black text-sm font-bold">Mental Health</span>
                </div>
              </Link>

              <Link to="/medbot/exercise-wellness">
                <div className="bg-yellow-200 rounded-3xl p-6 text-center hover:bg-yellow-300 transition-colors">
                  <Dumbbell className="w-10 h-10 text-black mx-auto mb-3" />
                  <span className="text-black text-sm font-bold">Exercise Wellness</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Medication */}
            <div className="bg-purple-200 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-black mb-6">Medication</h3>
              
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl p-3 flex items-center justify-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/93fdf37126257e7e51b2da4598b4467ed75b3aef?width=222" 
                    alt="Medication bottles" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-gray-400 bg-gray-200 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-1 bg-green-600 rounded-sm"></div>
                    </div>
                    <span className="text-black text-sm">Lisinopril 10 mg</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-gray-400 bg-gray-200 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-1 bg-green-600 rounded-sm"></div>
                    </div>
                    <span className="text-black text-sm">Omeprazole 10 mg</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-gray-400 bg-gray-200 rounded-sm"></div>
                    <span className="text-black text-sm">Simvastatin 20 mg</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-black text-sm italic">&gt; More Information</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">Quick Access</h3>
              <div className="space-y-3">
                <Link to="/medbot/appointments" className="flex items-center justify-between p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-black font-medium">Appointments</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

                <Link to="/medbot/exercise-wellness" className="flex items-center justify-between p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Dumbbell className="w-5 h-5 text-green-600" />
                    <span className="text-black font-medium">Exercise Wellness</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

                <Link to="/medbot/mental-health-resources" className="flex items-center justify-between p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-black font-medium">Mental Health Resources</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

                <Link to="/medbot/mindful-bot" className="flex items-center justify-between p-3 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-indigo-600" />
                    <span className="text-black font-medium">MindfulBot Chat</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
            </div>

            {/* MedBot Chat */}
            <Link to="/medbot">
              <div className="bg-teal-500 rounded-3xl p-6 flex items-center gap-4 hover:bg-teal-600 transition-colors">
                <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-teal-400 text-xs font-bold">+</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">
                    <span className="font-normal">Chat with </span>
                    <span className="font-bold">MedBot</span>
                    <span className="font-normal"> for further assistance</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
