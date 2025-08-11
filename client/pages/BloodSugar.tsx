import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Droplet } from "lucide-react";
import { Link } from "react-router-dom";

export default function BloodSugar() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md mx-auto">
      <MobileStatusBar />
      
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center gap-3">
        <Link to="/medbot/check-in">
          <Button size="icon" variant="ghost" className="text-black">
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-black">Blood Sugar</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-8 overflow-y-auto pb-24">
        {/* QR Scanner Section */}
        <div className="bg-yellow-200 rounded-3xl p-8 text-center space-y-6">
          <h2 className="text-xl font-bold text-black">
            Scan here to sync your Blood Sugar
          </h2>
          
          {/* QR Code */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-black rounded-2xl p-4 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 w-full h-full">
                {/* QR Code Pattern */}
                {Array.from({ length: 9 }, (_, i) => (
                  <div key={i} className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }, (_, j) => (
                      <div 
                        key={j} 
                        className={`aspect-square ${
                          (i === 0 && j < 7) || 
                          (i === 1 && (j === 0 || j === 6)) ||
                          (i === 2 && (j === 0 || j === 2 || j === 3 || j === 4 || j === 6)) ||
                          (i === 3 && (j === 0 || j === 2 || j === 3 || j === 4 || j === 6)) ||
                          (i === 4 && (j === 0 || j === 2 || j === 3 || j === 4 || j === 6)) ||
                          (i === 5 && (j === 0 || j === 6)) ||
                          (i === 6 && j < 7) ||
                          (i === 7 && (j === 2 || j === 3 || j === 5 || j === 6 || j === 7 || j === 8)) ||
                          (i === 8 && (j === 0 || j === 2 || j === 4 || j === 5 || j === 7))
                            ? 'bg-yellow-200' 
                            : 'bg-black'
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* OR Divider */}
        <div className="text-center">
          <span className="text-2xl font-bold text-black">or</span>
        </div>

        {/* Manual Entry Section */}
        <div className="bg-teal-200 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Droplet className="w-6 h-6 text-black" />
            <h3 className="text-lg font-bold text-black">Enter your Blood Sugar level:</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <label className="text-black font-medium">Blood Sugar Level</label>
              <div className="flex-1 relative">
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 text-black text-right pr-16"
                  placeholder="0"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black font-medium">
                  mg/dL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button className="w-full py-4 rounded-full bg-pink-400 hover:bg-pink-500 text-black font-bold text-lg">
            SUBMIT
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
