import express from "express";
import {
  getProducts,
  findProductById,
} from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get("/product", getProducts);
productRouter.get("/product/:id", findProductById);

productRouter.post("/product", function (req, res) {
  res.send("save products");
});

productRouter.put("/product", function (req, res) {
  res.send("update products");
});

productRouter.delete("/product", function (req, res) {
  res.send("delete products");
});

export { productRouter };
