import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-pink-50 to-yellow-50 flex flex-col relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Teal blob */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-200 rounded-full opacity-60"></div>
        {/* Pink blob */}
        <div className="absolute top-20 -left-20 w-48 h-48 bg-pink-200 rounded-full opacity-60"></div>
        {/* Yellow blob */}
        <div className="absolute bottom-20 -right-20 w-56 h-56 bg-yellow-200 rounded-full opacity-60"></div>
        {/* Purple blob */}
        <div className="absolute bottom-0 -left-20 w-64 h-64 bg-purple-200 rounded-full opacity-60"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 space-y-8 relative z-10">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-purple-200 rounded-2xl flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-8 bg-blue-400 rounded-sm"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-400 rounded-sm"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-yellow-400 rounded-sm"></div>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-black">
              Medi<span className="text-purple-600">Plus</span>
            </h1>
            <p className="text-gray-600 text-sm">Track. Prevent. Thrive.</p>
          </div>
        </div>

        {/* Welcome message */}
        <div className="text-center space-y-4">
          <h2 className="text-xl font-light text-black leading-relaxed">
            Welcome to your one stop health companion
          </h2>
        </div>

        {/* Get Started Button */}
        <Link to="/medbot/home" className="w-full max-w-xs">
          <Button className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold rounded-2xl">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Bottom branding */}
      <div className="relative z-10 p-6">
        <div className="bg-white bg-opacity-80 rounded-2xl p-4 flex items-center justify-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c0582bc7911b06f4a7cd3ecb96bb44d16fe96d4d?width=446" 
            alt="Powered by SingPass" 
            className="h-8 opacity-70"
          />
        </div>
      </div>
    </div>
  );
}
