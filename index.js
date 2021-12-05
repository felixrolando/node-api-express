import dotenv from "dotenv";
dotenv.config();
import { createServer } from "./server.js";

const app = createServer();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
