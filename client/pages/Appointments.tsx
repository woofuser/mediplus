import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, ChevronLeft } from "lucide-react";

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      day: "FRI",
      date: "01",
      month: "AUG",
      year: "2025",
      time: "3:15 PM",
      type: "GENERAL MEDICINE",
      location: "Consultation Rm 220 - SK SengKang Polyclinic",
      provider: "SingHealth Polyclinics",
      color: "bg-purple-300"
    },
    {
      id: 2,
      day: "MON",
      date: "01",
      month: "SEP",
      year: "2025", 
      time: "9:15 AM",
      type: "Cardiology",
      location: "Non-fasting Blood Test SGH Block 2",
      provider: "Singapore General Hospital",
      color: "bg-purple-300"
    }
  ];

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
            <h1 className="text-3xl font-bold text-black">Appointments</h1>
          </div>

          {/* Background Container */}
          <div className="bg-gradient-to-b from-orange-100 via-orange-50 to-teal-100 rounded-3xl p-8 min-h-[600px]">
            
            {/* Upcoming Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-6">Upcoming</h2>
              
              <div className="space-y-6">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-start space-x-4 bg-white/50 p-4 rounded-xl">
                    {/* Date Card */}
                    <div className={`${appointment.color} rounded-2xl p-4 text-center min-w-[100px]`}>
                      <div className="text-black text-lg font-normal">{appointment.day}</div>
                      <div className="text-black text-2xl font-bold">{appointment.date}</div>
                      <div className="text-black text-lg font-normal">{appointment.month}</div>
                      <div className="text-black text-lg font-normal">{appointment.year}</div>
                      <div className="text-black text-lg font-bold mt-2">{appointment.time}</div>
                    </div>

                    {/* Appointment Details */}
                    <div className="flex-1">
                      <div className="text-black text-sm font-normal mb-1">{appointment.provider}</div>
                      <h3 className="text-black text-xl font-bold mb-2">{appointment.type}</h3>
                      <p className="text-black text-lg font-normal">{appointment.location}</p>
                    </div>

                    {/* Calendar Icon */}
                    <Button variant="ghost" size="sm">
                      <Plus className="w-6 h-6" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sync Section */}
            <div className="text-center mt-12">
              <p className="text-black text-lg font-normal mb-4">
                Do not see your appointment?<br />
                Click Below to sync now!!
              </p>
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-2 rounded-lg font-normal">
                SYNC
              </Button>
            </div>

            {/* Questions Section */}
            <div className="mt-12 bg-red-200 rounded-xl p-4 flex items-center justify-between">
              <span className="text-black text-lg font-normal">Questions to Ask Doctor</span>
              <Button variant="ghost" size="sm">
                <span className="text-2xl">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
