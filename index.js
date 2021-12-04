import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { indexRouterV1 } from "./src/router/index.js";

const app = express();

const port = process.env.PORT || 3000;

app.use("/api/v1/", indexRouterV1);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
