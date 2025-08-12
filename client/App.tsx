import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestIndex from "./pages/TestIndex";

export default function App() {
  console.log("App component rendering...");
  
  return (
    <div>
      <h1>React App Loading...</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestIndex />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
