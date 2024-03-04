import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cores from "cors";

import userRouter from "./route/user-Route.js";
import authRouter from "./route/auth-Route.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cores());

mongoose
  .connect(process.env.MONGOEURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server works on http://localhost:${PORT}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    succses: false,
    message,
    statusCode,
  });
});
