import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MedBot from "./pages/MedBot";
import MentalHealth from "./pages/MentalHealth";
import CheckIn from "./pages/CheckIn";
import BloodSugar from "./pages/BloodSugar";
import QuestionsToAsk from "./pages/QuestionsToAsk";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import HomeDashboard from "./pages/HomeDashboard";
import HealthOverview from "./pages/HealthOverview";
import BloodPressureOverview from "./pages/BloodPressureOverview";
import WelcomePage from "./pages/WelcomePage";
import Appointments from "./pages/Appointments";
import HealthProfiles from "./pages/HealthProfiles";
import MentalHealthResources from "./pages/MentalHealthResources";
import CalvesExercises from "./pages/CalvesExercises";
import MentalHealthOverview from "./pages/MentalHealthOverview";
import ExerciseWellness from "./pages/ExerciseWellness";
import BodyExercises from "./pages/BodyExercises";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/medbot" element={<MedBot />} />
          <Route path="/medbot/home" element={<HomeDashboard />} />
          <Route path="/medbot/mental-health" element={<MentalHealth />} />
          <Route path="/medbot/check-in" element={<CheckIn />} />
          <Route path="/medbot/blood-sugar" element={<BloodSugar />} />
          <Route path="/medbot/questions" element={<QuestionsToAsk />} />
          <Route path="/medbot/services" element={<Services />} />
          <Route path="/medbot/profile" element={<Profile />} />
          <Route path="/medbot/health-overview" element={<HealthOverview />} />
          <Route path="/medbot/blood-pressure-overview" element={<BloodPressureOverview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
