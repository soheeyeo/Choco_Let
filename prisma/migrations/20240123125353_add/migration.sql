/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Chocolate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Chocolate_name_key` ON `Chocolate`(`name`);
