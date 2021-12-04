import express from "express";
import { getProducts } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get("/products", getProducts);

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
