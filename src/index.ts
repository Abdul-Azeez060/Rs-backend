import { config } from "dotenv";
config();
import express from "express";
const app = express();
import UserRouter from "./routes/UserRouter";
import FarmerRouter from "./routes/FarmerRouter";
import ProductRouter from "./routes/ProductRouter";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/farmer", FarmerRouter);
console.log("this is product router entry");
app.use("/api/v1/product", ProductRouter);

app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
