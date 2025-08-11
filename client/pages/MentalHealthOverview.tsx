import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ClipboardList, ChevronDown } from "lucide-react";

export default function MentalHealthOverview() {
  // Mood chart data - simplified representation
  const moodData = [
    { day: 1, mood: 7, color: "text-orange-500" },
    { day: 2, mood: 4, color: "text-purple-500" },
    { day: 3, mood: 6, color: "text-orange-500" },
    { day: 4, mood: 8, color: "text-orange-500" },
    { day: 5, mood: 5, color: "text-purple-500" },
    { day: 6, mood: 9, color: "text-orange-500" },
    { day: 7, mood: 3, color: "text-blue-500" },
  ];

  const moodEmojis = ["😢", "😔", "😐", "🙂", "😊", "😄", "😁", "🤩", "😍", "🥳", "😡", "😱"];

  return (
    <div className="min-h-screen bg-gray-50">
      <WebsiteHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="flex items-center mb-8">
            <Button variant="ghost" size="sm" className="mr-4">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <ClipboardList className="w-7 h-7 text-black mr-3" />
            <h1 className="text-2xl font-bold text-black">Mental health overview</h1>
          </div>

          {/* Background Container */}
          <div className="bg-gradient-to-b from-purple-50 via-purple-25 to-white rounded-t-3xl p-8 min-h-[700px] shadow-inner">
            
            {/* Mood Chart Section */}
            <div className="bg-orange-100 rounded-3xl p-6 mb-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-black opacity-70">July Mood Chart</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-black bg-white px-3 py-1 rounded-lg text-sm">July 2025</span>
                  <ChevronDown className="w-4 h-4 text-black" />
                </div>
              </div>
              
              {/* Chart Container */}
              <div className="bg-white rounded-2xl p-6 mb-4 relative">
                <div className="flex items-center justify-between mb-4">
                  <Button variant="ghost" size="sm">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="w-4 h-4 rotate-90" />
                  </Button>
                </div>
                
                {/* Simplified Mood Chart Visualization */}
                <div className="h-40 flex items-end justify-center space-x-4 mb-4">
                  {moodData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className={`w-2 ${data.color} rounded-full`}
                        style={{ height: `${data.mood * 15}px` }}
                      ></div>
                      <div className={`w-2 h-2 rounded-full ${data.color} mt-1`}></div>
                    </div>
                  ))}
                </div>
                
                {/* Mood Legend */}
                <div className="flex justify-center space-x-1 text-xs">
                  {moodEmojis.map((emoji, index) => (
                    <span key={index}>{emoji}</span>
                  ))}
                </div>
              </div>
              
              <p className="text-center text-gray-600 text-sm opacity-70">Monthly Mood Chart</p>
            </div>

            {/* Reflection Journal */}
            <div className="bg-red-200 rounded-3xl p-6 mb-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-black opacity-70">Reflection journal</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-black bg-white px-3 py-1 rounded-lg text-sm">July 2025</span>
                  <span className="text-black bg-white px-3 py-1 rounded-lg text-sm">20</span>
                  <ChevronDown className="w-4 h-4 text-black opacity-50" />
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-2xl p-4 shadow-sm">
                <p className="text-black text-sm leading-relaxed">
                  Today felt like everything came at me at once. Deadlines were piling up, 
                  messages kept flooding in, and I barely had time to take a breath. I tried to push 
                  through but ended up feeling drained by the afternoon. I noticed I snapped at my 
                  brother over something small, not not proud of that. I just needed a moment, but I 
                  didn't give myself one. I know this feeling passes, but i feel like i am drowning.
                </p>
                
                <div className="flex justify-end mt-4">
                  <Button variant="ghost" size="sm" className="bg-white text-black">
                    Expand
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Monthly Insight */}
            <div className="bg-purple-100 rounded-3xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-black opacity-70">AI Monthly Insight</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-black bg-white px-3 py-1 rounded-lg text-sm">July 2025</span>
                  <ChevronDown className="w-4 h-4 text-black opacity-50" />
                </div>
              </div>
              
              <div className="space-y-4 text-black text-sm leading-relaxed">
                <p>
                  Based on your mood patterns, your emotional state fluctuated with a tendency toward stress, 
                  anxiety, and anger in the second half of the month. Journal entries suggest these were linked to work 
                  pressure and emotional fatigue. You also showed resilience, identifying and using personal coping 
                  strategies like meditation and Pilates.
                </p>
                
                <div>
                  <h4 className="text-lg font-bold text-black opacity-70 mb-2">Suggestions for Next Month</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="underline font-medium">Celebrate small wins:</span> Note daily achievements, no matter how 
                      small, they will help shift focus to the positive.
                    </p>
                    <p>
                      <span className="underline font-medium">Track your triggers:</span> Write down what causes sudden emotional 
                      shifts so they're easier to manage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
