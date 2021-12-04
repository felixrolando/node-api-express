import express from "express";

const cartRouter = express.Router();

cartRouter.get("/cart", function (req, res) {
  res.send("gets cart");
});

cartRouter.post("/cart", function (req, res) {
  res.send("gets cart");
});

cartRouter.put("/cart", function (req, res) {
  res.send("gets cart");
});

cartRouter.delete("/cart", function (req, res) {
  res.send("gets cart");
});

export { cartRouter };
