-- AlterTable
ALTER TABLE `BlogPost` ADD COLUMN `contentAr` TEXT NULL,
    ADD COLUMN `excerptAr` TEXT NULL,
    ADD COLUMN `titleAr` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Sector` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `nameAr` VARCHAR(191) NULL,
    `desc` TEXT NOT NULL,
    `descAr` TEXT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `h1` VARCHAR(191) NULL,
    `h1Ar` VARCHAR(191) NULL,
    `subtitle` TEXT NULL,
    `subtitleAr` TEXT NULL,
    `delivers` JSON NULL,
    `deliversAr` JSON NULL,
    `caseTitle` VARCHAR(191) NULL,
    `caseTitleAr` VARCHAR(191) NULL,
    `caseSub` TEXT NULL,
    `caseSubAr` TEXT NULL,
    `caseHighlights` JSON NULL,
    `caseHighlightsAr` JSON NULL,
    `caseStats` JSON NULL,
    `caseStatsAr` JSON NULL,
    `ctaTitle` VARCHAR(191) NULL,
    `ctaTitleAr` VARCHAR(191) NULL,
    `ctaSubtitle` TEXT NULL,
    `ctaSubtitleAr` TEXT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Sector_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `nameAr` VARCHAR(191) NULL,
    `category` VARCHAR(191) NOT NULL,
    `categoryAr` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `locationAr` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `descriptionAr` TEXT NULL,
    `scope` VARCHAR(191) NOT NULL,
    `scopeAr` VARCHAR(191) NULL,
    `isFabrication` BOOLEAN NOT NULL DEFAULT false,
    `order` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Project_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FabricationCapability` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `titleAr` VARCHAR(191) NULL,
    `desc` TEXT NOT NULL,
    `descAr` TEXT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FabricationProcessStep` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `step` VARCHAR(191) NOT NULL,
    `stepAr` VARCHAR(191) NULL,
    `desc` TEXT NOT NULL,
    `descAr` TEXT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Brand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `categories` JSON NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Brand_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `nameAr` VARCHAR(191) NULL,
    `location` VARCHAR(191) NOT NULL,
    `locationAr` VARCHAR(191) NULL,
    `emirate` VARCHAR(191) NOT NULL,
    `emirateAr` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `whatsapp` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NULL,
    `roleAr` VARCHAR(191) NULL,
    `mapUrl` TEXT NOT NULL,
    `mapEmbed` TEXT NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Branch_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
