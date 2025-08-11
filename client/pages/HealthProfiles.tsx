import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, User, Users, Heart, ChevronUp } from "lucide-react";

export default function HealthProfiles() {
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
            <h1 className="text-3xl font-bold text-black">Health Profiles</h1>
          </div>

          <div className="space-y-8">
            {/* My Profile Section */}
            <div>
              <h2 className="text-lg font-bold text-black mb-4">My Profile</h2>
              <div className="bg-red-200 rounded-3xl p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">SXXXX564F</h3>
                    <p className="text-black font-bold">View health profile & records</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-black" />
              </div>
            </div>

            {/* My Caregivers Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-black">My Caregivers</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-black">Hide</span>
                  <ChevronUp className="w-4 h-4 text-black" />
                </div>
              </div>
              <div className="bg-white border border-black rounded-3xl p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12">
                    <Users className="w-12 h-12 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">Add caregivers</h3>
                    <p className="text-black text-sm">
                      Grant consent to<br />
                      designated caregivers to<br />
                      view your health and<br />
                      medical records
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-black" />
              </div>
            </div>

            {/* People under my care Section */}
            <div>
              <h2 className="text-xl font-bold text-black mb-6">People under my care</h2>
              
              {/* My Children */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-4">My Children</h3>
                <div className="bg-white border border-black rounded-3xl p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12">
                      <Users className="w-12 h-12 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black">Add loved one</h4>
                      <p className="text-black">
                        Get access to your loved<br />
                        one's health record
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-black" />
                </div>
              </div>

              {/* My Friends */}
              <div>
                <h3 className="text-lg font-bold text-black mb-4">My Friends</h3>
                <div className="bg-white border border-black rounded-3xl p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12">
                      <Heart className="w-12 h-12 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black">Add loved one</h4>
                      <p className="text-black">
                        Get access to your loved<br />
                        one's health record
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
