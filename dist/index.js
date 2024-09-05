"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const FarmerRouter_1 = __importDefault(require("./routes/FarmerRouter"));
const ProductRouter_1 = __importDefault(require("./routes/ProductRouter"));
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use("/api/v1/user", UserRouter_1.default);
app.use("/api/v1/farmer", FarmerRouter_1.default);
console.log("this is product router entry");
app.use("/api/v1/product", ProductRouter_1.default);
app.listen(PORT, () => {
    console.log("server is listening on port", PORT);
});
