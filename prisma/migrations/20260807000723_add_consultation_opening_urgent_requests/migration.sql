-- CreateTable
CREATE TABLE `ConsultationRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `visitType` VARCHAR(191) NOT NULL,
    `projectStage` VARCHAR(191) NOT NULL,
    `emirate` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `preferredDate` VARCHAR(191) NULL,
    `preferredTime` VARCHAR(191) NULL,
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RestaurantOpeningRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `conceptName` VARCHAR(191) NOT NULL,
    `conceptType` VARCHAR(191) NOT NULL,
    `cuisine` VARCHAR(191) NULL,
    `seats` VARCHAR(191) NULL,
    `targetDate` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `investment` VARCHAR(191) NULL,
    `currentStage` VARCHAR(191) NULL,
    `needs` TEXT NULL,
    `contactName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UrgentRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `urgency` VARCHAR(191) NOT NULL,
    `problem` VARCHAR(191) NOT NULL,
    `equipmentType` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `attachmentUrl` VARCHAR(191) NULL,
    `contactName` VARCHAR(191) NOT NULL,
    `businessName` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `emirate` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
