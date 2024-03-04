import express from "express";
import { test } from "../conroller/user-Conroller.js";

const router = express.Router();
router.get("/", test);

export default router;
