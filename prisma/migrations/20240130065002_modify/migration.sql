-- AlterTable
ALTER TABLE `account` ADD COLUMN `refresh_token_expires_in` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `image` VARCHAR(191) NULL;
