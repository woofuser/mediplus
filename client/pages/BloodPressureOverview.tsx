import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function BloodPressureOverview() {
  return (
    <div className="min-h-screen bg-purple-100 flex flex-col max-w-md mx-auto">
      <MobileStatusBar />
      
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center gap-3">
        <Link to="/medbot/health-overview">
          <Button size="icon" variant="ghost" className="text-black">
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold text-black">Health Overview - BP</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto pb-24">
        {/* Chart Container */}
        <div className="bg-white rounded-3xl p-4">
          {/* Time Period Selector */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-lg">2025</span>
            <div className="flex bg-gray-200 rounded-full p-1">
              <button className="px-3 py-1 text-sm text-gray-600">Daily</button>
              <button className="px-3 py-1 text-sm text-gray-600">Weekly</button>
              <button className="px-3 py-1 text-sm bg-black text-white rounded-full">Annually</button>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mb-4">Blood Pressure</h2>

          {/* Legend */}
          <div className="flex gap-6 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-gray-600 text-sm">Systolic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-600"></div>
              <span className="text-gray-600 text-sm">Diastolic</span>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative h-48 mb-4">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 w-8">
              <span>150</span>
              <span>125</span>
              <span>100</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            {/* Chart content */}
            <div className="ml-8 h-full relative bg-purple-50 rounded">
              {/* Grid lines */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="absolute w-full border-t border-gray-200" style={{top: `${i * 20}%`}}></div>
                ))}
              </div>

              {/* Chart lines */}
              <svg className="absolute inset-0 w-full h-full">
                {/* Systolic line (blue) */}
                <path 
                  d="M20 120 Q60 100 100 110 Q140 90 180 105 Q220 85 260 95 Q300 75 340 85" 
                  stroke="#2563eb" 
                  strokeWidth="3" 
                  fill="none"
                />
                {/* Diastolic line (yellow) */}
                <path 
                  d="M20 140 Q60 135 100 130 Q140 125 180 120 Q220 115 260 110 Q300 105 340 100" 
                  stroke="#eab308" 
                  strokeWidth="3" 
                  fill="none"
                />
                
                {/* Data point marker */}
                <circle cx="220" cy="95" r="6" fill="white" stroke="#2563eb" strokeWidth="2" />
              </svg>

              {/* Tooltip */}
              <div className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded" style={{top: '40%', left: '55%'}}>
                114/90 mmHg
              </div>
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500 pt-2">
              <span>APR</span>
              <span>MAY</span>
              <span>JUN</span>
              <span>JUL</span>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-purple-200 border border-purple-400 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-purple-800">AI INSIGHTS</h3>
            <ChevronDown className="w-6 h-6 text-purple-800" />
          </div>
          
          <div className="bg-white rounded-2xl p-4 space-y-2 mb-4">
            <p className="text-black text-sm">• Overall blood pressure in 2025 is normal</p>
            <p className="text-black text-sm">• High blood pressure of 125/100 mmHg on 02/05/2025</p>
            <p className="text-black text-sm">• Increase of blood pressure in July</p>
          </div>

          <div className="bg-gradient-to-b from-purple-500 to-purple-700 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">SUGGESTIONS BY AI</h4>
              <ChevronDown className="w-6 h-6 text-white" />
            </div>
            
            <div className="bg-white rounded-2xl p-4 space-y-2">
              <p className="text-black text-sm">• Avoid salty foods and drink more water.</p>
              <p className="text-black text-sm">• Walk 20–30 minutes daily.</p>
              <p className="text-black text-sm">• Avoid going out during midday heat in July.</p>
              <p className="text-black text-sm">• Watch for dizziness or chest pain, see doctor if BP goes above 180/110 or symptoms appear.</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
