import express from "express";
import { cartRouter } from "./cart.js";
import { productRouter } from "./product.js";
import { wishRouter } from "./wish.js";
import { userRouter } from "./user.js";

const indexRouter = express.Router();

indexRouter.use(cartRouter);
indexRouter.use(productRouter);
indexRouter.use(wishRouter);
indexRouter.use(userRouter);

export { indexRouter };
