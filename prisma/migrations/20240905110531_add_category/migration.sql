/*
  Warnings:

  - Added the required column `category` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('tomato', 'mango', 'brinjal', 'coconut', 'rice', 'wheat', 'onion', 'carrot');

-- AlterTable
ALTER TABLE "Inventory" ADD COLUMN     "category" "Category" NOT NULL;
