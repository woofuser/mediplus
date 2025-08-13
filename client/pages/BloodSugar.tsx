import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Droplet, QrCode, Scan } from "lucide-react";
import { Link } from "react-router-dom";

export default function BloodSugar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <WebsiteHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-4">
              <Link to="/medbot/check-in">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Blood Sugar Tracking
                </h1>
                <p className="text-gray-600 mt-1">
                  Monitor and record your glucose levels
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* QR Scanner Section */}
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-8 shadow-lg border border-yellow-400">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <QrCode className="w-8 h-8 text-gray-900" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    QR Code Sync
                  </h2>
                </div>

                <p className="text-gray-800 text-lg mb-6">
                  Scan here to sync your Blood Sugar device
                </p>

                {/* QR Code */}
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-black rounded-2xl p-6 flex items-center justify-center shadow-xl">
                    <div className="grid grid-cols-4 gap-1 w-full h-full">
                      {/* Enhanced QR Code Pattern */}
                      {Array.from({ length: 16 }, (_, i) => (
                        <div key={i} className="grid grid-cols-4 gap-1">
                          {Array.from({ length: 16 }, (_, j) => (
                            <div
                              key={j}
                              className={`aspect-square rounded-sm ${
                                (i === 0 && j < 7) ||
                                (i === 1 && (j === 0 || j === 6)) ||
                                (i === 2 &&
                                  (j === 0 ||
                                    j === 2 ||
                                    j === 3 ||
                                    j === 4 ||
                                    j === 6)) ||
                                (i === 3 &&
                                  (j === 0 ||
                                    j === 2 ||
                                    j === 3 ||
                                    j === 4 ||
                                    j === 6)) ||
                                (i === 4 &&
                                  (j === 0 ||
                                    j === 2 ||
                                    j === 3 ||
                                    j === 4 ||
                                    j === 6)) ||
                                (i === 5 && (j === 0 || j === 6)) ||
                                (i === 6 && j < 7) ||
                                (i === 7 &&
                                  (j === 2 ||
                                    j === 3 ||
                                    j === 5 ||
                                    j === 6 ||
                                    j === 7 ||
                                    j === 8)) ||
                                (i >= 8 && Math.random() > 0.5)
                                  ? "bg-yellow-200"
                                  : "bg-black"
                              }`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    📱 Open your glucose meter app and scan this QR code to
                    automatically sync readings
                  </p>
                </div>
              </div>
            </div>

            {/* Manual Entry Section */}
            <div className="space-y-6">
              {/* OR Divider */}
              <div className="text-center py-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-3xl font-bold bg-white px-6">
                    <span className="text-gray-700">OR</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-200 to-teal-300 rounded-3xl p-8 shadow-lg border border-teal-400">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Droplet className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Manual Entry
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-900 font-semibold mb-3 text-lg">
                        Blood Sugar Level
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-teal-300 text-gray-900 text-xl text-center focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
                          placeholder="Enter glucose level"
                        />
                        <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-700 font-semibold text-lg">
                          mg/dL
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-900 font-medium mb-2">
                          Time of Reading
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 focus:border-teal-500 outline-none">
                          <option>Before meal</option>
                          <option>After meal</option>
                          <option>Bedtime</option>
                          <option>Fasting</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-900 font-medium mb-2">
                          Date & Time
                        </label>
                        <input
                          type="datetime-local"
                          className="w-full px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 focus:border-teal-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Notes (Optional)
                      </label>
                      <textarea
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 focus:border-teal-500 outline-none resize-none"
                        rows={3}
                        placeholder="Any additional notes about this reading..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button className="w-full py-6 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  SAVE READING
                </Button>
              </div>
            </div>
          </div>

          {/* Recent Readings Section */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Readings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-600">95</div>
                <div className="text-sm text-gray-600">mg/dL</div>
                <div className="text-xs text-gray-500 mt-1">
                  Fasting - Today 8:00 AM
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">140</div>
                <div className="text-sm text-gray-600">mg/dL</div>
                <div className="text-xs text-gray-500 mt-1">
                  After meal - Yesterday 2:00 PM
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-600">88</div>
                <div className="text-sm text-gray-600">mg/dL</div>
                <div className="text-xs text-gray-500 mt-1">
                  Bedtime - Yesterday 10:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
