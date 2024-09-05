"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBulkProduct = handleBulkProduct;
exports.handleSingleProduct = handleSingleProduct;
exports.handleNewProduct = handleNewProduct;
const index_1 = require("../index");
function handleBulkProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield index_1.prisma.inventory.findMany({
                select: {
                    category: true,
                },
            });
            return res.json({
                result,
            });
        }
        catch (error) {
            res.json({
                error: "error in fetching the data",
            });
        }
    });
}
function handleSingleProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("this is the entry to handlesingleproduct");
        try {
            const { crop } = req.params;
            console.log(crop);
            if (!crop) {
                return res.json({
                    error: "enter a crop",
                });
            }
            const result = yield index_1.prisma.inventory.findMany({
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
        }
        catch (error) {
            return res.json({
                error: "error in fetching the required category",
            });
        }
    });
}
function handleNewProduct() { }
