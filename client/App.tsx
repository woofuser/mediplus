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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/medbot" element={<MedBot />} />
          <Route path="/medbot/mental-health" element={<MentalHealth />} />
          <Route path="/medbot/check-in" element={<CheckIn />} />
          <Route path="/medbot/blood-sugar" element={<BloodSugar />} />
          <Route path="/medbot/questions" element={<QuestionsToAsk />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
