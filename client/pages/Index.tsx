import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-slate-800">Welcome to MedBot</h1>
        <p className="text-slate-600 max-w-md">
          Your AI-powered health assistant for tracking vitals, mental health,
          and medical questions.
        </p>
        <Link to="/medbot/home">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
