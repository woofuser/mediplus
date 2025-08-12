import "./global.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Component, ReactNode } from "react";
import TestPage from "./pages/TestPage";
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
import Appointments from "./pages/Appointments";
import HealthProfiles from "./pages/HealthProfiles";
import MentalHealthResources from "./pages/MentalHealthResources";
import CalvesExercises from "./pages/CalvesExercises";
import MentalHealthOverview from "./pages/MentalHealthOverview";
import ExerciseWellness from "./pages/ExerciseWellness";
import BodyExercises from "./pages/BodyExercises";
import MindfulBot from "./pages/MindfulBot";
import MedBotChat from "./pages/MedBotChat";
import DeveloperDashboard from "./pages/DeveloperDashboard";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fee', padding: '20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '500px' }}>
            <h1 style={{ color: '#d32f2f', marginBottom: '20px' }}>Something went wrong!</h1>
            <p style={{ color: '#666', marginBottom: '20px' }}>{this.state.error?.message}</p>
            <button
              onClick={() => window.location.href = '/'}
              style={{ padding: '10px 20px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Go to Homepage
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  console.log("App loading...");
  
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/index" element={<Index />} />
          <Route path="/welcome" element={<Navigate to="/medbot/home" replace />} />
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
          <Route path="/medbot/appointments" element={<Appointments />} />
          <Route path="/medbot/health-profiles" element={<HealthProfiles />} />
          <Route path="/medbot/mental-health-resources" element={<MentalHealthResources />} />
          <Route path="/medbot/calves-exercises" element={<CalvesExercises />} />
          <Route path="/medbot/mental-health-overview" element={<MentalHealthOverview />} />
          <Route path="/medbot/exercise-wellness" element={<ExerciseWellness />} />
          <Route path="/medbot/body-exercises" element={<BodyExercises />} />
          <Route path="/medbot/mindful-bot" element={<MindfulBot />} />
          <Route path="/medbot/medbot-chat" element={<MedBotChat />} />
          <Route path="/developer" element={<DeveloperDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
