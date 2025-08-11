import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function CalvesExercises() {
  return (
    <div className="min-h-screen bg-gray-50">
      <WebsiteHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="flex items-center mb-8">
            <Button variant="ghost" size="sm" className="mr-4">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-3xl font-bold text-black">Calves Exercises</h1>
          </div>

          {/* Background Container */}
          <div className="bg-gradient-to-b from-teal-100 via-teal-50 to-white rounded-3xl p-8 min-h-[600px]">
            
            {/* Exercise Title */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black">Calf Exercise (Leg Raise)</h2>
            </div>

            {/* Exercise Images */}
            <div className="bg-orange-100 rounded-2xl p-6 mb-8">
              <div className="flex justify-center">
                <div className="bg-white rounded-xl p-6 shadow-sm max-w-md w-full">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <div className="w-32 h-40 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xs">Exercise Demo</span>
                      </div>
                      <div className="w-32 h-40 bg-gray-300 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-xs">Exercise Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exercise Instructions */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-black mb-6">To strengthen your upper calves</h3>
              
              <div className="space-y-4 text-black text-lg leading-relaxed">
                <div className="flex items-start space-x-3">
                  <span className="font-bold text-xl">1.</span>
                  <p>Sitting in a chair, keep your toes and the balls of your feet on the floor and lift your heels.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="font-bold text-xl">2.</span>
                  <p>Hold on the balls of your feet for 2 to 3 seconds and slowly lower them.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="font-bold text-xl">3.</span>
                  <p>Repeat 20 times.</p>
                </div>
              </div>
            </div>

            {/* Additional Tips */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Tip:</strong> Focus on controlled movements and feel the stretch in your calf muscles. 
                    Start slowly and gradually increase the number of repetitions as you build strength.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
