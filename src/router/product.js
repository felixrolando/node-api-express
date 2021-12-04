import express from "express";
import {
  getProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProductById,
} from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get("/product", getProducts);
productRouter.get("/product/:id", findProductById);
productRouter.post("/product", createProduct);
productRouter.put("/product", updateProduct);
productRouter.delete("/product", deleteProductById);

export { productRouter };
