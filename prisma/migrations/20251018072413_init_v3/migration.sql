/*
  Warnings:

  - You are about to drop the column `price` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the `TestDriveBooking` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "SaleStatus" AS ENUM ('AVAILABLE', 'RESERVED', 'SOLD', 'NEGOTIATION');

-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "BookingType" AS ENUM ('RENTAL', 'TEST_DRIVE');

-- AlterEnum
ALTER TYPE "BookingStatus" ADD VALUE 'ACTIVE';

-- AlterEnum
ALTER TYPE "CarStatus" ADD VALUE 'RENTED';

-- DropForeignKey
ALTER TABLE "public"."Car" DROP CONSTRAINT "Car_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TestDriveBooking" DROP CONSTRAINT "TestDriveBooking_carId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TestDriveBooking" DROP CONSTRAINT "TestDriveBooking_userId_fkey";

-- DropIndex
DROP INDEX "public"."Car_price_idx";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "price";

-- DropTable
DROP TABLE "public"."TestDriveBooking";

-- CreateTable
CREATE TABLE "SaleInfo" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "price" DECIMAL(13,2) NOT NULL,
    "negotiable" BOOLEAN NOT NULL DEFAULT false,
    "status" "SaleStatus" NOT NULL DEFAULT 'AVAILABLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statusChangedAt" TIMESTAMP(3),
    "statusChangedBy" TEXT,

    CONSTRAINT "SaleInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentInfo" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "hourlyPrice" DECIMAL(13,2) NOT NULL,
    "dailyPrice" DECIMAL(13,2),
    "deposit" DECIMAL(13,2),
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statusChangedAt" TIMESTAMP(3),
    "statusChangedBy" TEXT,

    CONSTRAINT "RentInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "bookingType" "BookingType" NOT NULL DEFAULT 'RENTAL',
    "bookingDate" DATE NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "totalPrice" DECIMAL(13,2),
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statusChangedAt" TIMESTAMP(3),
    "statusChangedBy" TEXT,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "price" DECIMAL(13,2) NOT NULL,
    "status" "PurchaseStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statusChangedAt" TIMESTAMP(3),
    "statusChangedBy" TEXT,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SaleInfo_carId_key" ON "SaleInfo"("carId");

-- CreateIndex
CREATE INDEX "SaleInfo_carId_idx" ON "SaleInfo"("carId");

-- CreateIndex
CREATE INDEX "SaleInfo_price_idx" ON "SaleInfo"("price");

-- CreateIndex
CREATE INDEX "SaleInfo_status_idx" ON "SaleInfo"("status");

-- CreateIndex
CREATE UNIQUE INDEX "RentInfo_carId_key" ON "RentInfo"("carId");

-- CreateIndex
CREATE INDEX "RentInfo_carId_idx" ON "RentInfo"("carId");

-- CreateIndex
CREATE INDEX "RentInfo_hourlyPrice_idx" ON "RentInfo"("hourlyPrice");

-- CreateIndex
CREATE INDEX "RentInfo_available_idx" ON "RentInfo"("available");

-- CreateIndex
CREATE INDEX "Booking_carId_idx" ON "Booking"("carId");

-- CreateIndex
CREATE INDEX "Booking_userId_idx" ON "Booking"("userId");

-- CreateIndex
CREATE INDEX "Booking_dealerId_idx" ON "Booking"("dealerId");

-- CreateIndex
CREATE INDEX "Booking_bookingDate_idx" ON "Booking"("bookingDate");

-- CreateIndex
CREATE INDEX "Booking_status_idx" ON "Booking"("status");

-- CreateIndex
CREATE INDEX "Booking_bookingType_idx" ON "Booking"("bookingType");

-- CreateIndex
CREATE INDEX "Booking_carId_bookingDate_idx" ON "Booking"("carId", "bookingDate");

-- CreateIndex
CREATE INDEX "Purchase_carId_idx" ON "Purchase"("carId");

-- CreateIndex
CREATE INDEX "Purchase_userId_idx" ON "Purchase"("userId");

-- CreateIndex
CREATE INDEX "Purchase_dealerId_idx" ON "Purchase"("dealerId");

-- CreateIndex
CREATE INDEX "Purchase_status_idx" ON "Purchase"("status");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleInfo" ADD CONSTRAINT "SaleInfo_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentInfo" ADD CONSTRAINT "RentInfo_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
