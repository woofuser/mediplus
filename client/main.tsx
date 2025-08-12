import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Add some basic error handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

const root = document.getElementById('root');

if (!root) {
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Error: Root element not found</h1>
      <p>The application cannot start because the root element is missing.</p>
      <button onclick="window.location.reload()">Reload Page</button>
    </div>
  `;
} else {
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
    console.log("React app rendered successfully");
  } catch (error) {
    console.error("Failed to render React app:", error);
    root.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h1>Application Error</h1>
        <p>Failed to load the application. Please try refreshing the page.</p>
        <button onclick="window.location.reload()">Reload Page</button>
        <details style="margin-top: 20px; text-align: left;">
          <summary>Error Details</summary>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto;">
            ${error instanceof Error ? error.stack : String(error)}
          </pre>
        </details>
      </div>
    `;
  }
}
