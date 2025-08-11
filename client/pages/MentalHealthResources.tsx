import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Search, FileText, Music, Play, Heart, SkipBack, SkipForward, Pause } from "lucide-react";

export default function MentalHealthResources() {
  const resourceCategories = [
    { name: "Mental health 101", color: "bg-teal-200" },
    { name: "Stress Management", color: "bg-teal-200" },
    { name: "Coping Cards", color: "bg-red-200" },
    { name: "Meditation", color: "bg-red-200" },
    { name: "Mental Health Tests", color: "bg-purple-300" },
    { name: "Mental Health Exercises", color: "bg-purple-300" },
    { name: "Strength Training", color: "bg-purple-300" },
    { name: "Flexibility Exercises", color: "bg-purple-300" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-100">
      <WebsiteHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="bg-purple-400 rounded-b-none -mx-4 px-4 py-8 mb-8">
            <div className="flex items-center mb-4">
              <Button variant="ghost" size="sm" className="mr-4 text-black">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <FileText className="w-7 h-7 text-black mr-3" />
              <h1 className="text-2xl font-bold text-black">Resources</h1>
            </div>
            
            {/* Hero Content */}
            <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-3xl p-8 mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="max-w-md">
                  <div className="mb-4">
                    {/* Decorative illustration placeholder */}
                    <div className="w-32 h-24 bg-orange-200 rounded-2xl flex items-center justify-center">
                      <div className="w-20 h-16 bg-orange-300 rounded-xl"></div>
                    </div>
                  </div>
                  <p className="text-black text-sm font-bold opacity-70">
                    Whether you're struggling<br />
                    or just curious, these resources are here to<br />
                    support your well-being.
                  </p>
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

          {/* Resource Categories Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {resourceCategories.slice(0, 4).map((category, index) => (
              <div key={index} className={`${category.color} rounded-2xl p-6 shadow-lg flex items-center justify-center text-center`}>
                <span className="text-black text-lg font-bold">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Calm Music Playlist Section */}
          <div className="bg-orange-100 rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-black text-sm font-bold">Calm Music Playlist</h3>
              <Music className="w-5 h-5 text-black" />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-24 h-16 bg-orange-200 rounded-xl flex items-center justify-center">
                <Music className="w-8 h-8 text-orange-600" />
              </div>
              
              <div className="flex-1">
                <div className="bg-teal-200 rounded-lg px-4 py-2 mb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-800">Marconi Union - Weightless</span>
                    <div className="flex items-center space-x-2">
                      <SkipBack className="w-3 h-3 text-gray-800" />
                      <Play className="w-4 h-4 text-gray-800" />
                      <SkipForward className="w-3 h-3 text-gray-800" />
                      <Heart className="w-3 h-3 text-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resource Categories */}
          <div className="grid grid-cols-2 gap-4">
            {resourceCategories.slice(4).map((category, index) => (
              <div key={index + 4} className={`${category.color} rounded-2xl p-6 shadow-lg flex items-center justify-center text-center`}>
                <span className="text-black text-lg font-bold">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
