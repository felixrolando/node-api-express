import express from "express";

const userRouter = express.Router();

userRouter.get("/user", function (req, res) {
  res.send("gets user");
});

userRouter.post("/user", function (req, res) {
  res.send("save user");
});

userRouter.put("/user", function (req, res) {
  res.send("update user");
});

userRouter.delete("/user", function (req, res) {
  res.send("delete user");
});

export { userRouter };
