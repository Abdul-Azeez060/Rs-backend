import express from "express";
import { signInwihtPhone } from "../firebase/auth/authService";
const router = express.Router();

router.get("/signin", async (req, res) => {
  try {
    const { idToken } = req.body;
    const id = await signInwihtPhone(idToken);
    res.status(200).send({ message: "Authenticated successfully ", id });
  } catch (error) {
    console.log("firebase");
  }
});

export default router;
