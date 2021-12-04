import express from "express";
import { cartRouter } from "./cart.js";
import { productRouter } from "./product.js";
import { wishRouter } from "./wish.js";
import { userRouter } from "./user.js";

const indexRouterV1 = express.Router();

indexRouterV1.use(cartRouter);
indexRouterV1.use(productRouter);
indexRouterV1.use(wishRouter);
indexRouterV1.use(userRouter);

export { indexRouterV1 };
