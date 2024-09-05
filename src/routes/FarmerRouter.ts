import express from "express";
import { handleFarmerLogin } from "../controllers/farmer";
const router = express.Router();

router.post("/login", handleFarmerLogin);

export default router;
