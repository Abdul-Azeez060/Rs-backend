"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../controllers/product");
const router = express_1.default.Router();
router.get("/category", product_1.handleBulkProduct);
router.get("/category/:crop", product_1.handleSingleProduct);
router.post("/new", product_1.handleNewProduct);
exports.default = router;
