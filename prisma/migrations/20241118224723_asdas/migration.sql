/*
  Warnings:

  - You are about to alter the column `updatedAt` on the `article` table. The data in that column could be lost. The data in that column will be cast from `DateTime(4)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `article` MODIFY `updatedAt` DATETIME(3) NOT NULL;
