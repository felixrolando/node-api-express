import request from "supertest";
import { createServer } from "../server.js";

const app = createServer();

describe("GET /products", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/ap1/v1/product").send();
    expect(response.statusCode).toBe(200);
  });

  // test("should respond an array", async () => {
  //   const response = await request(app).get("/ap1/v1/product").send();
  //   expect(response.body).toBeInstanceOf(Array);
  // });
});
