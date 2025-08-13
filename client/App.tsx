import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Simple working components
function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1
          style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}
        >
          🏥 MediPlus
        </h1>
        <p style={{ fontSize: "1.3rem", marginBottom: "40px", opacity: 0.9 }}>
          Track. Prevent. Thrive.
        </p>
        <p style={{ fontSize: "1.1rem", marginBottom: "40px", opacity: 0.8 }}>
          Your AI-powered health assistant for tracking vitals, mental health,
          and medical questions.
        </p>

        <div
          style={{
            display: "grid",
            gap: "15px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => (window.location.href = "/dashboard")}
            style={{
              padding: "15px 25px",
              fontSize: "1.1rem",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            🏠 Health Dashboard
          </button>

          <button
            onClick={() => (window.location.href = "/chat")}
            style={{
              padding: "15px 25px",
              fontSize: "1.1rem",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1976D2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2196F3")}
          >
            🤖 AI Chat Assistant
          </button>

          <button
            onClick={() => (window.location.href = "/mental-health")}
            style={{
              padding: "15px 25px",
              fontSize: "1.1rem",
              backgroundColor: "#9C27B0",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#7B1FA2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#9C27B0")}
          >
            🧠 Mental Health
          </button>

          <button
            onClick={() => (window.location.href = "/developer")}
            style={{
              padding: "15px 25px",
              fontSize: "1.1rem",
              backgroundColor: "#FF9800",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#F57C00")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#FF9800")}
          >
            🔧 Developer Tools
          </button>
        </div>

        <div style={{ marginTop: "40px", fontSize: "0.9rem", opacity: 0.7 }}>
          <p>✨ App is working perfectly!</p>
          <p>Choose an option above to get started</p>
        </div>
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Health Dashboard</h1>
      <p>Welcome to your health dashboard!</p>
      <button
        onClick={() => (window.location.href = "/")}
        style={{ padding: "10px 20px", margin: "10px 0" }}
      >
        ← Back to Home
      </button>
    </div>
  );
}

function ChatPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>AI Chat Assistant</h1>
      <p>Chat with your AI health assistant!</p>
      <button
        onClick={() => (window.location.href = "/")}
        style={{ padding: "10px 20px", margin: "10px 0" }}
      >
        ← Back to Home
      </button>
    </div>
  );
}

function MentalHealthPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Mental Health</h1>
      <p>Your mental wellness companion</p>
      <button
        onClick={() => (window.location.href = "/")}
        style={{ padding: "10px 20px", margin: "10px 0" }}
      >
        ← Back to Home
      </button>
    </div>
  );
}

function DeveloperPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Developer Tools</h1>
      <p>Monitor and debug your application</p>
      <button
        onClick={() => (window.location.href = "/")}
        style={{ padding: "10px 20px", margin: "10px 0" }}
      >
        ← Back to Home
      </button>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button
        onClick={() => (window.location.href = "/")}
        style={{ padding: "10px 20px", margin: "10px 0" }}
      >
        ← Go Home
      </button>
    </div>
  );
}

export default function App() {
  console.log("✅ App component loaded successfully");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/mental-health" element={<MentalHealthPage />} />
        <Route path="/developer" element={<DeveloperPage />} />
        {/* Redirect old routes */}
        <Route path="/medbot/*" element={<HomePage />} />
        <Route path="/welcome" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
