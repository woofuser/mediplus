import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log("🚀 Starting React application...");

const root = document.getElementById("root");

if (!root) {
  console.error("❌ Root element not found!");
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif; background: #f5f5f5; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div>
        <h1 style="color: #d32f2f;">⚠️ Root Element Missing</h1>
        <p>The application cannot start because the root element is missing.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">
          🔄 Reload Page
        </button>
      </div>
    </div>
  `;
} else {
  console.log("✅ Root element found, mounting React app...");

  try {
    const reactRoot = ReactDOM.createRoot(root);
    reactRoot.render(<App />);
    console.log("✅ React app mounted successfully!");
  } catch (error) {
    console.error("❌ Failed to mount React app:", error);
    root.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif; background: #ffebee; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <div style="max-width: 500px;">
          <h1 style="color: #d32f2f;">❌ Application Error</h1>
          <p style="margin: 20px 0;">Failed to load the application. Please try refreshing the page.</p>
          <button onclick="window.location.reload()" style="padding: 12px 24px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 10px;">
            🔄 Reload Page
          </button>
          <button onclick="window.location.href='/'" style="padding: 12px 24px; background: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 10px;">
            🏠 Go Home
          </button>
          <details style="margin-top: 20px; text-align: left;">
            <summary style="cursor: pointer; padding: 10px; background: #f5f5f5; border-radius: 4px;">🔍 Show Error Details</summary>
            <pre style="background: #f5f5f5; padding: 15px; border-radius: 4px; overflow: auto; font-size: 12px; margin-top: 10px;">
${error instanceof Error ? error.stack : String(error)}
            </pre>
          </details>
        </div>
      </div>
    `;
  }
}
