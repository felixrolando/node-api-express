import express from "express";
import { indexRouter } from "./src/router/index.js";

const app = express();

const port = process.env.PORT;

app.use(indexRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
