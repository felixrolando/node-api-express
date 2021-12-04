import express from "express";

const wishRouter = express.Router();

wishRouter.get("/wish", function (req, res) {
  res.send("gets wish");
});

wishRouter.post("/wish", function (req, res) {
  res.send("gets wish");
});

wishRouter.put("/wish", function (req, res) {
  res.send("gets wish");
});

wishRouter.delete("/wish", function (req, res) {
  res.send("gets wish");
});

export { wishRouter };
