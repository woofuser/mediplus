import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Search } from "lucide-react";

export default function BodyExercises() {
  const bodyParts = [
    { name: "Shoulders", color: "bg-teal-200" },
    { name: "Calves", color: "bg-teal-200" },
    { name: "Chest", color: "bg-orange-100" },
    { name: "Back", color: "bg-orange-100" },
    { name: "Biceps", color: "bg-red-200" },
    { name: "Triceps", color: "bg-red-200" },
    { name: "Glutes", color: "bg-purple-300" },
    { name: "Quads", color: "bg-purple-300" },
    { name: "Hamstrings", color: "bg-purple-400" },
    { name: "Abs / Core", color: "bg-purple-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-100">
      <WebsiteHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="bg-purple-300 rounded-b-none -mx-4 px-4 py-8 mb-8">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" className="mr-4 text-black">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-2xl font-bold text-black">Body Exercises</h1>
            </div>
            
            {/* Hero Content */}
            <div className="bg-gradient-to-r from-purple-300 to-purple-400 rounded-3xl p-8 mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="max-w-md">
                  <p className="text-black text-sm font-bold opacity-70 mb-4">
                    Move with purpose.<br />
                    These exercises are here to support a stronger,<br />
                    more balanced you.
                  </p>
                  
                  {/* Decorative illustration placeholder */}
                  <div className="w-32 h-24 bg-blue-200 rounded-2xl flex items-center justify-center">
                    <div className="w-20 h-16 bg-blue-300 rounded-xl"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute right-8 top-4">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full mt-2 ml-4"></div>
                  <div className="w-3 h-3 bg-white rounded-full mt-1 ml-2"></div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-orange-100 rounded-3xl px-4 py-3 flex items-center">
              <span className="text-black text-sm font-bold opacity-40 flex-1">Search here ....</span>
              <Search className="w-5 h-5 text-black opacity-50" />
            </div>
          </div>

          {/* Body Parts Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {bodyParts.map((bodyPart, index) => (
              <div 
                key={index} 
                className={`${bodyPart.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center text-center min-h-[100px]`}
              >
                <span className="text-black text-lg font-bold">{bodyPart.name}</span>
              </div>
            ))}
          </div>

          {/* Exercise Tips */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-6">Exercise Guidelines</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h4 className="font-semibold text-black mb-3">Upper Body Focus</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Shoulders:</strong> Improve posture and stability</li>
                  <li>• <strong>Chest:</strong> Build pushing strength</li>
                  <li>• <strong>Back:</strong> Support spine health</li>
                  <li>• <strong>Arms:</strong> Functional strength for daily tasks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-black mb-3">Lower Body Focus</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Glutes:</strong> Hip stability and power</li>
                  <li>• <strong>Quads:</strong> Knee support and mobility</li>
                  <li>• <strong>Hamstrings:</strong> Balance and flexibility</li>
                  <li>• <strong>Calves:</strong> Ankle strength and balance</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-black mb-3">Core Strength</h4>
                <p className="text-sm">
                  A strong core is the foundation for all movement. It protects your spine, 
                  improves balance, and enhances overall functional strength.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-black mb-3">General Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Start with bodyweight exercises</li>
                  <li>• Focus on proper form over speed</li>
                  <li>• Allow rest days for recovery</li>
                  <li>• Progress gradually</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
