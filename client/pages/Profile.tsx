import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Button } from "@/components/ui/button";
import { User, Settings, Bell, HelpCircle, LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md mx-auto">
      <MobileStatusBar />
      
      {/* Header */}
      <div className="bg-white px-6 py-4">
        <h1 className="text-2xl font-bold text-black">Profile</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto pb-24">
        {/* User Info */}
        <div className="bg-white rounded-3xl p-6 text-center">
          <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-xl font-bold text-black">Bella</h2>
          <p className="text-gray-600">MedBot User</p>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full p-4 bg-white border-gray-300 justify-start">
            <Settings className="w-5 h-5 text-gray-600 mr-3" />
            <span className="text-black">Settings</span>
          </Button>
          
          <Button variant="outline" className="w-full p-4 bg-white border-gray-300 justify-start">
            <Bell className="w-5 h-5 text-gray-600 mr-3" />
            <span className="text-black">Notifications</span>
          </Button>
          
          <Button variant="outline" className="w-full p-4 bg-white border-gray-300 justify-start">
            <HelpCircle className="w-5 h-5 text-gray-600 mr-3" />
            <span className="text-black">Help & Support</span>
          </Button>
          
          <Button variant="outline" className="w-full p-4 bg-white border-gray-300 justify-start text-red-600 hover:bg-red-50">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
