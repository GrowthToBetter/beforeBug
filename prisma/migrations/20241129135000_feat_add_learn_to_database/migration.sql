/*
  Warnings:

  - Added the required column `name` to the `Learn` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Learn` ADD COLUMN `name` VARCHAR(191) NOT NULL;
