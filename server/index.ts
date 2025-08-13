import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import demoRoutes from "./routes/demo";
import chatRoutes from "./routes/chat";
import testRoutes from "./routes/test";

// Load environment variables
dotenv.config();

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));

  // Routes (without /api prefix since Vite handles that)
  app.use("/demo", demoRoutes);
  app.use("/test", testRoutes);
  app.use("/api/chat", chatRoutes);

  // Health check
  app.get("/health", (req, res) => {
    res.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      services: {
        chat: "active",
        demo: "active",
      },
      environment: process.env.NODE_ENV || "development",
      server: "inline-vite",
    });
  });

  // Error handling middleware
  app.use(
    (
      err: any,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) => {
      console.error("Server Error:", err);
      res.status(500).json({
        success: false,
        error: "Internal server error",
        message:
          process.env.NODE_ENV === "development"
            ? err.message
            : "Something went wrong",
      });
    },
  );

  return app;
}

export default createServer;
