/*
  Warnings:

  - The values [UNAVAILABLE] on the enum `CarStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `dealershipId` on the `WorkingHour` table. All the data in the column will be lost.
  - You are about to drop the `DealershipInfo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[dealerId,dayOfWeek]` on the table `WorkingHour` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dealerId` to the `WorkingHour` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `openTime` on the `WorkingHour` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `closeTime` on the `WorkingHour` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CarStatus_new" AS ENUM ('AVAILABLE', 'RESERVED', 'SOLD', 'MAINTENANCE', 'PENDING');
ALTER TABLE "public"."Car" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Car" ALTER COLUMN "status" TYPE "CarStatus_new" USING ("status"::text::"CarStatus_new");
ALTER TYPE "CarStatus" RENAME TO "CarStatus_old";
ALTER TYPE "CarStatus_new" RENAME TO "CarStatus";
DROP TYPE "public"."CarStatus_old";
ALTER TABLE "Car" ALTER COLUMN "status" SET DEFAULT 'AVAILABLE';
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."TestDriveBooking" DROP CONSTRAINT "TestDriveBooking_carId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TestDriveBooking" DROP CONSTRAINT "TestDriveBooking_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."WorkingHour" DROP CONSTRAINT "WorkingHour_dealershipId_fkey";

-- DropIndex
DROP INDEX "public"."WorkingHour_dealershipId_dayOfWeek_key";

-- DropIndex
DROP INDEX "public"."WorkingHour_dealershipId_idx";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "avgRating" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "countViews" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "dealerId" TEXT,
ADD COLUMN     "durationView" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "reviewCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "statusChangedAt" TIMESTAMP(3),
ADD COLUMN     "statusChangedBy" TEXT;

-- AlterTable
ALTER TABLE "WorkingHour" DROP COLUMN "dealershipId",
ADD COLUMN     "dealerId" TEXT NOT NULL,
DROP COLUMN "openTime",
ADD COLUMN     "openTime" INTEGER NOT NULL,
DROP COLUMN "closeTime",
ADD COLUMN     "closeTime" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."DealershipInfo";

-- CreateTable
CREATE TABLE "Dealer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT,
    "logoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "avgRating" DOUBLE PRECISION DEFAULT 0,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Dealer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "carId" TEXT,
    "dealerId" TEXT,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dealer_email_key" ON "Dealer"("email");

-- CreateIndex
CREATE INDEX "Dealer_name_idx" ON "Dealer"("name");

-- CreateIndex
CREATE INDEX "Review_carId_idx" ON "Review"("carId");

-- CreateIndex
CREATE INDEX "Review_dealerId_idx" ON "Review"("dealerId");

-- CreateIndex
CREATE INDEX "Review_rating_idx" ON "Review"("rating");

-- CreateIndex
CREATE INDEX "Car_countViews_idx" ON "Car"("countViews");

-- CreateIndex
CREATE INDEX "TestDriveBooking_carId_bookingDate_idx" ON "TestDriveBooking"("carId", "bookingDate");

-- CreateIndex
CREATE INDEX "WorkingHour_dealerId_idx" ON "WorkingHour"("dealerId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkingHour_dealerId_dayOfWeek_key" ON "WorkingHour"("dealerId", "dayOfWeek");

-- AddForeignKey
ALTER TABLE "Dealer" ADD CONSTRAINT "Dealer_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingHour" ADD CONSTRAINT "WorkingHour_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestDriveBooking" ADD CONSTRAINT "TestDriveBooking_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestDriveBooking" ADD CONSTRAINT "TestDriveBooking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
