import express from "express";
import {
  handleBulkProduct as handleCategory,
  handleNewProduct,
  handleSingleProduct,
} from "../controllers/product";
const router = express.Router();

router.get("/category", handleCategory);

router.get("/category/:crop", handleSingleProduct);

router.post("/new", handleNewProduct);

export default router;
