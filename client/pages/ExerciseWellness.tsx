import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Search, Dumbbell } from "lucide-react";

export default function ExerciseWellness() {
  const exerciseCategories = [
    { name: "Walking", color: "bg-teal-200" },
    { name: "Running", color: "bg-teal-200" },
    { name: "Body Exercises", color: "bg-orange-100" },
    { name: "Cardio", color: "bg-orange-100" },
    { name: "Aerobic Exercises", color: "bg-red-200" },
    { name: "Yoga", color: "bg-red-200" },
    { name: "Strength Training", color: "bg-purple-300" },
    { name: "Flexibility Exercises", color: "bg-purple-300" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-100">
      <WebsiteHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="bg-purple-300 rounded-b-none -mx-4 px-4 py-8 mb-8">
            <div className="flex items-center mb-4">
              <Button variant="ghost" size="sm" className="mr-4 text-black">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Dumbbell className="w-7 h-7 text-black mr-3" />
              <h1 className="text-2xl font-bold text-black">Exercise Wellness</h1>
            </div>
            
            {/* Hero Content */}
            <div className="bg-gradient-to-r from-purple-300 to-purple-400 rounded-3xl p-8 mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="max-w-md">
                  <p className="text-black text-sm font-bold opacity-70 mb-4">
                    Move at your own pace, your well-being matters, and every step counts.
                  </p>
                  <div className="mb-4">
                    <div className="w-80 h-48 bg-gradient-to-r from-purple-200 to-purple-300 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fff0f299aaa3b4dd88a111cb5829ef3f4%2F3e0a1aa261aa4b92b22a0deb6251629a?format=webp&width=800"
                        alt="Woman doing side plank exercise - Move with purpose. These exercises are here to support a stronger, more balanced you."
                        className="w-full h-full object-cover"
                      />
                    </div>
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

          {/* Exercise Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {exerciseCategories.map((category, index) => (
              <div 
                key={index} 
                className={`${category.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center text-center min-h-[120px]`}
              >
                <span className="text-black text-xl font-bold">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-4">Getting Started</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold text-black mb-2">For Beginners</h4>
                <p className="text-sm">Start with 15-20 minutes of light activity like walking or gentle stretching. Listen to your body and gradually increase intensity.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Safety First</h4>
                <p className="text-sm">Always warm up before exercising and cool down afterward. Stay hydrated and consult with healthcare providers if you have any concerns.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Make It Fun</h4>
                <p className="text-sm">Choose activities you enjoy. Whether it's dancing, swimming, or hiking, the best exercise is the one you'll stick with.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Track Progress</h4>
                <p className="text-sm">Keep a simple log of your activities. Celebrate small wins and don't be discouraged by off days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
