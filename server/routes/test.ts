import express from "express";

const router = express.Router();

// Simple test endpoint to verify server is working
router.get("/ping", (req, res) => {
  res.json({
    success: true,
    message: "Server is working!",
    timestamp: new Date().toISOString(),
    endpoints: {
      health: "/api/health",
      chat: "/api/chat",
      demo: "/api/demo",
      history: "/api/history",
    },
  });
});

export default router;
