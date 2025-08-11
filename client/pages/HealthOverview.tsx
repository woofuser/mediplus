import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HealthOverview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <WebsiteHeader />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Header */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Link to="/medbot/home">
                <Button size="icon" variant="ghost" className="text-black">
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-black">Health Overview</h1>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-purple-100 border border-purple-300 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-purple-700">AI INSIGHTS</h2>
              <ChevronDown className="w-6 h-6 text-purple-700" />
            </div>
            
            <div className="bg-white rounded-2xl p-6 space-y-3">
              <p className="text-black text-sm">• Overall vitals are similar to past months</p>
              <p className="text-black text-sm">• High blood pressure on 15.00PM, 02/07/2025</p>
              <p className="text-black text-sm">• Resting heart rate tend to increase in the afternoon</p>
            </div>
          </div>

          {/* Monthly Averages */}
          <div className="bg-gradient-to-b from-purple-400 to-purple-600 rounded-3xl p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">MONTHLY AVERAGES</h2>
              <div className="bg-white rounded-full px-4 py-2">
                <span className="text-gray-600 text-sm font-medium">JULY</span>
              </div>
            </div>

            {/* Blood Pressure Chart */}
            <div className="bg-white rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-500 text-sm">AVG</p>
                  <h3 className="text-xl font-bold text-black">Blood Pressure</h3>
                </div>
              </div>
              
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-4xl font-bold text-black">110/78</p>
                  <p className="text-green-500 text-sm">mmHg</p>
                </div>
                
                {/* Chart representation */}
                <div className="w-48 h-24 relative">
                  <svg className="w-full h-full" viewBox="0 0 200 80">
                    <path 
                      d="M10 60 Q40 40 70 50 T130 45 Q160 35 190 40" 
                      stroke="#10b981" 
                      strokeWidth="3" 
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              
              <Link to="/medbot/blood-pressure-overview">
                <Button className="w-full bg-purple-100 text-purple-700 border border-purple-300 hover:bg-purple-200">
                  SEE MORE
                </Button>
              </Link>
            </div>

            {/* Heart Rate Chart */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-500 text-sm">AVG</p>
                  <h3 className="text-xl font-bold text-black">Heart Rate</h3>
                </div>
              </div>
              
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-4xl font-bold text-black">90</p>
                  <p className="text-pink-500 text-sm">BPM</p>
                </div>
                
                {/* Chart representation */}
                <div className="w-48 h-24 relative">
                  <svg className="w-full h-full" viewBox="0 0 200 80">
                    <path 
                      d="M10 45 Q30 25 50 55 Q70 20 90 50 Q110 25 130 55 Q150 30 170 50 L190 40" 
                      stroke="#ec4899" 
                      strokeWidth="3" 
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
      </div>
    </div>
  );
}
