import { Category } from "@prisma/client";
import { prisma } from "../index";
import { Response, Request } from "express";

export async function handleBulkProduct(req: Request, res: Response) {
  try {
    const result = await prisma.inventory.findMany({
      select: {
        category: true,
      },
    });
    return res.json({
      result,
    });
  } catch (error) {
    res.json({
      error: "error in fetching the data",
    });
  }
}

export async function handleSingleProduct(req: Request, res: Response) {
  console.log("this is the entry to handlesingleproduct");
  try {
    const { crop } = req.params;
    console.log(crop);
    if (!crop) {
      return res.json({
        error: "enter a crop",
      });
    }
    const result = await prisma.inventory.findMany({
      where: {
        // @ts-ignore
        category: crop,
      },
      include: {
        farmer: true,
      },
    });
    return res.json({
      result,
    });
  } catch (error) {
    return res.json({
      error: "error in fetching the required category",
    });
  }
}

export function handleNewProduct() {}
