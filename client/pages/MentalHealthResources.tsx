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
        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" className="mr-4 text-gray-600 hover:text-gray-800">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Mental Health Resources</h1>
                <p className="text-gray-600 mt-1">Comprehensive support for your mental well-being</p>
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-3xl p-8 mb-6 relative overflow-hidden border border-purple-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-6">
                    {/* Decorative illustration placeholder */}
                    <div className="w-40 h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center shadow-lg">
                      <div className="w-28 h-20 bg-gradient-to-br from-orange-300 to-orange-400 rounded-xl flex items-center justify-center">
                        <Heart className="w-8 h-8 text-orange-600" />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3">Your Well-being Matters</h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Whether you're struggling or just curious, these resources are here to support your mental health journey. Find tools, exercises, and guidance tailored to your needs.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                      <Music className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                      <Brain className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                      <FileText className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-gray-50 rounded-2xl px-6 py-4 flex items-center border border-gray-200 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200">
              <input
                type="text"
                placeholder="Search mental health resources..."
                className="flex-1 text-gray-800 text-sm placeholder:text-gray-500 outline-none bg-transparent"
              />
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Resource Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {resourceCategories.slice(0, 4).map((category, index) => (
              <div key={index} className={`${category.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer border border-gray-200`}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    {index === 0 && <Brain className="w-6 h-6 text-gray-700" />}
                    {index === 1 && <Heart className="w-6 h-6 text-gray-700" />}
                    {index === 2 && <FileText className="w-6 h-6 text-gray-700" />}
                    {index === 3 && <Music className="w-6 h-6 text-gray-700" />}
                  </div>
                  <span className="text-gray-800 text-base font-semibold">{category.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Calm Music Playlist Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-gray-900 text-xl font-bold">Calm Music Playlist</h3>
              </div>
              <Button variant="outline" size="sm" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                View All
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl p-6 border border-orange-300">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Music className="w-8 h-8 text-orange-700" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">Now Playing</h4>
                    <p className="text-sm text-gray-700 mb-3">Marconi Union - Weightless</p>
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="sm" className="p-1 text-gray-600 hover:text-gray-800">
                        <SkipBack className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 text-purple-600 hover:text-purple-800">
                        <Play className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 text-gray-600 hover:text-gray-800">
                        <SkipForward className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 text-red-500 hover:text-red-700">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Popular Tracks</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <span className="text-sm text-gray-700">Rain Sounds for Sleep</span>
                    <Play className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <span className="text-sm text-gray-700">Ocean Waves Meditation</span>
                    <Play className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <span className="text-sm text-gray-700">Forest Ambience</span>
                    <Play className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resource Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.slice(4).map((category, index) => (
              <div key={index + 4} className={`${category.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer border border-gray-200`}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    {(index + 4) === 4 && <FileText className="w-6 h-6 text-gray-700" />}
                    {(index + 4) === 5 && <Brain className="w-6 h-6 text-gray-700" />}
                    {(index + 4) === 6 && <Heart className="w-6 h-6 text-gray-700" />}
                    {(index + 4) === 7 && <Music className="w-6 h-6 text-gray-700" />}
                  </div>
                  <span className="text-gray-800 text-base font-semibold">{category.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900">AI Support</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Get personalized mental health support through our AI companion.</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Chat with MindfulBot</Button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900">Mood Tracking</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Monitor your emotional well-being with daily mood check-ins.</p>
              <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">Start Tracking</Button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900">Crisis Support</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">24/7 crisis support and emergency resources when you need them most.</p>
              <Button variant="outline" className="w-full border-red-200 text-red-700 hover:bg-red-50">Get Help Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
