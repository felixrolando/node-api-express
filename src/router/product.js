import express from "express";

const productRouter = express.Router();

productRouter.get("/products", function (req, res) {
  res.send("gets products");
});

productRouter.post("/products", function (req, res) {
  res.send("save products");
});

productRouter.put("/products", function (req, res) {
  res.send("update products");
});

productRouter.delete("/products", function (req, res) {
  res.send("delete products");
});

export { productRouter };
