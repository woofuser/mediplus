import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HealthOverview() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md mx-auto">
      <MobileStatusBar />
      
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center gap-3">
        <Link to="/medbot/home">
          <Button size="icon" variant="ghost" className="text-black">
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-black">Health Overview</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto pb-24">
        {/* AI Insights */}
        <div className="bg-purple-100 border border-purple-300 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-purple-700">AI INSIGHTS</h2>
            <ChevronDown className="w-6 h-6 text-purple-700" />
          </div>
          
          <div className="bg-white rounded-2xl p-4 space-y-2">
            <p className="text-black text-sm">• Overall vitals are similar to past months</p>
            <p className="text-black text-sm">• High blood pressure on 15.00PM, 02/07/2025</p>
            <p className="text-black text-sm">• Resting heart rate tend to increase in the afternoon</p>
          </div>
        </div>

        {/* Monthly Averages */}
        <div className="bg-gradient-to-b from-purple-400 to-purple-600 rounded-3xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">MONTHLY AVERAGES</h2>
            <div className="bg-white rounded-full px-4 py-2">
              <span className="text-gray-600 text-sm font-medium">JULY</span>
            </div>
          </div>

          {/* Blood Pressure Chart */}
          <div className="bg-white rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-500 text-sm">AVG</p>
                <h3 className="text-lg font-bold text-black">Blood Pressure</h3>
              </div>
            </div>
            
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-4xl font-bold text-black">110/78</p>
                <p className="text-green-500 text-sm">mmHg</p>
              </div>
              
              {/* Simple chart representation */}
              <div className="w-32 h-16 relative">
                <svg className="w-full h-full" viewBox="0 0 120 60">
                  <path 
                    d="M5 45 Q20 30 35 40 T65 35 Q80 25 95 30 L110 25" 
                    stroke="#10b981" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            
            <Button className="w-full bg-purple-100 text-purple-700 border border-purple-300 hover:bg-purple-200">
              SEE MORE
            </Button>
          </div>

          {/* Heart Rate Chart */}
          <div className="bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-500 text-sm">AVG</p>
                <h3 className="text-lg font-bold text-black">Heart Rate</h3>
              </div>
            </div>
            
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-4xl font-bold text-black">90</p>
                <p className="text-pink-500 text-sm">BPM</p>
              </div>
              
              {/* Simple chart representation */}
              <div className="w-32 h-16 relative">
                <svg className="w-full h-full" viewBox="0 0 120 60">
                  <path 
                    d="M5 35 Q20 20 35 45 Q50 15 65 40 Q80 20 95 45 L110 30" 
                    stroke="#ec4899" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            
            <Button className="w-full bg-purple-100 text-purple-700 border border-purple-300 hover:bg-purple-200">
              SEE MORE
            </Button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
