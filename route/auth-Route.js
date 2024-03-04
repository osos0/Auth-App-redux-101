import express from "express";
import { signUp } from "../conroller/auth-Controller.js";

const router = express.Router();
router.post("/signup", signUp);

export default router;
