import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronDown, Heart, Activity, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BloodPressureOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-gray-50">
      <WebsiteHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-4">
              <Link to="/medbot/health-overview">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Blood Pressure Overview</h1>
                <p className="text-gray-600 mt-1">Comprehensive blood pressure analysis and insights</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Chart Section - Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                
                {/* Time Period Selector */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                  <div className="flex items-center gap-2 mb-4 sm:mb-0">
                    <span className="text-2xl font-bold text-gray-900">2025</span>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex bg-gray-100 rounded-full p-1 shadow-sm">
                    <button className="px-4 py-2 text-sm text-gray-600 hover:bg-white hover:shadow-sm rounded-full transition-all">
                      Daily
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-600 hover:bg-white hover:shadow-sm rounded-full transition-all">
                      Weekly
                    </button>
                    <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded-full shadow-sm">
                      Annually
                    </button>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Blood Pressure Trends</h2>

                {/* Legend */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Systolic Pressure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-yellow-600"></div>
                    <span className="text-gray-700 font-medium">Diastolic Pressure</span>
                  </div>
                </div>

                {/* Enhanced Chart Area */}
                <div className="relative h-80 mb-6 bg-gradient-to-b from-purple-50 to-white rounded-xl border border-purple-200 p-6">
                  {/* Y-axis labels */}
                  <div className="absolute left-2 top-6 bottom-12 flex flex-col justify-between text-sm text-gray-500 w-8">
                    <span className="font-medium">150</span>
                    <span className="font-medium">125</span>
                    <span className="font-medium">100</span>
                    <span className="font-medium">75</span>
                    <span className="font-medium">50</span>
                    <span className="font-medium">25</span>
                  </div>

                  {/* Chart content */}
                  <div className="ml-12 mr-4 h-full relative">
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
                        d="M20 140 Q80 120 140 130 Q200 110 260 125 Q320 105 380 115" 
                        stroke="#2563eb" 
                        strokeWidth="4" 
                        fill="none"
                        strokeLinecap="round"
                      />
                      {/* Diastolic line (yellow) */}
                      <path 
                        d="M20 160 Q80 155 140 150 Q200 145 260 140 Q320 135 380 130" 
                        stroke="#eab308" 
                        strokeWidth="4" 
                        fill="none"
                        strokeLinecap="round"
                      />
                      
                      {/* Data point markers */}
                      <circle cx="260" cy="125" r="8" fill="white" stroke="#2563eb" strokeWidth="3" className="drop-shadow-sm" />
                      <circle cx="260" cy="140" r="8" fill="white" stroke="#eab308" strokeWidth="3" className="drop-shadow-sm" />
                    </svg>

                    {/* Enhanced Tooltip */}
                    <div className="absolute bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg" style={{top: '35%', left: '55%'}}>
                      <div className="font-semibold">114/90 mmHg</div>
                      <div className="text-xs text-gray-300">June 15, 2025</div>
                    </div>
                  </div>

                  {/* X-axis labels */}
                  <div className="absolute bottom-2 left-12 right-4 flex justify-between text-sm text-gray-600 font-medium">
                    <span>APR</span>
                    <span>MAY</span>
                    <span>JUN</span>
                    <span>JUL</span>
                  </div>
                </div>

                {/* Current Reading Display */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-800 font-semibold">Systolic</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">114</div>
                    <div className="text-sm text-blue-700">mmHg</div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-5 h-5 text-yellow-600" />
                      <span className="text-yellow-800 font-semibold">Diastolic</span>
                    </div>
                    <div className="text-3xl font-bold text-yellow-600">90</div>
                    <div className="text-sm text-yellow-700">mmHg</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - AI Insights */}
            <div className="space-y-6">
              
              {/* AI Insights */}
              <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl p-6 shadow-lg border border-purple-400">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-900">AI INSIGHTS</h3>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="w-5 h-5 text-purple-800" />
                  </Button>
                </div>
                
                <div className="bg-white rounded-xl p-4 space-y-3 mb-4 shadow-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-800 text-sm">Overall blood pressure in 2025 is within normal range</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-800 text-sm">Elevated reading of 125/100 mmHg on 02/05/2025</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-800 text-sm">Slight increase in blood pressure during July</p>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-purple-600 to-purple-800 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-white" />
                      <h4 className="text-lg font-bold text-white">AI SUGGESTIONS</h4>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronDown className="w-5 h-5 text-white" />
                    </Button>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-800 text-sm">Reduce sodium intake and increase water consumption</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-gray-800 text-sm">Engage in 20–30 minutes of daily walking or light exercise</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <p className="text-gray-800 text-sm">Avoid outdoor activities during peak heat in July</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-gray-800 text-sm">Consult healthcare provider if BP exceeds 180/110 or symptoms occur</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3">
                    Add New Reading
                  </Button>
                  <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl py-3">
                    Export Data
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl py-3">
                    Set Reminders
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
