import express from "express";
import { DemoResponse } from "@shared/api";

const router = express.Router();

const handleDemo = (req: express.Request, res: express.Response) => {
  const response: DemoResponse = {
    message: "Hello from Express server",
  };
  res.status(200).json(response);
};

router.get("/", handleDemo);

export default router;
