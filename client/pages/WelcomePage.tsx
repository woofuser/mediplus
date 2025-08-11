import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-pink-50 to-yellow-50 flex flex-col relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Teal blob */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-200 rounded-full opacity-40"></div>
        {/* Pink blob */}
        <div className="absolute top-32 -left-32 w-80 h-80 bg-pink-200 rounded-full opacity-40"></div>
        {/* Yellow blob */}
        <div className="absolute bottom-32 -right-32 w-88 h-88 bg-yellow-200 rounded-full opacity-40"></div>
        {/* Purple blob */}
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-purple-200 rounded-full opacity-40"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 space-y-12 relative z-10 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-purple-200 rounded-3xl flex items-center justify-center">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-400 rounded-lg"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-400 rounded-lg"></div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-black">
              Medi<span className="text-purple-600">Plus</span>
            </h1>
            <p className="text-gray-600 text-lg">Track. Prevent. Thrive.</p>
          </div>
        </div>

        {/* Welcome message */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-light text-black leading-relaxed max-w-2xl">
            Welcome to your one stop health companion
          </h2>
          <p className="text-gray-600 text-lg max-w-xl">
            Monitor your vitals, track medications, manage mental health, and get AI-powered insights to improve your wellbeing.
          </p>
        </div>

        {/* Get Started Button */}
        <Link to="/medbot/home" className="w-full max-w-md">
          <Button className="w-full py-6 bg-teal-500 hover:bg-teal-600 text-white text-xl font-semibold rounded-2xl transition-colors">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Bottom branding */}
      <div className="relative z-10 p-8">
        <div className="bg-white bg-opacity-80 rounded-3xl p-6 flex items-center justify-center max-w-sm mx-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c0582bc7911b06f4a7cd3ecb96bb44d16fe96d4d?width=446"
            alt="Powered by SingPass"
            className="h-10 opacity-70"
          />
        </div>
      </div>
    </div>
  );
}
