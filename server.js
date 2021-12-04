import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { indexRouterV1 } from "./src/router/index.js";

export const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use("/api/v1/", indexRouterV1);
  return app;
};
