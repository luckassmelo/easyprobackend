-- CreateTable
CREATE TABLE `tbl_trigger_cond` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `source` VARCHAR(191) NOT NULL,
    `parameter` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_trigger_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `unit_of_measurement` VARCHAR(191) NOT NULL,
    `is_accumulated` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_trigger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `id_trigger_type` INTEGER NOT NULL,
    `value` DOUBLE NOT NULL,
    `status` BOOLEAN NOT NULL,
    `group` VARCHAR(191) NOT NULL,
    `machine` VARCHAR(191) NOT NULL,
    `id_user` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_trigger_task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_trigger` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `id_user` INTEGER NOT NULL,
    `closed` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_trigger_cond_option` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_trigger` INTEGER NOT NULL,
    `value` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_trigger` ADD CONSTRAINT `tbl_trigger_id_trigger_type_fkey` FOREIGN KEY (`id_trigger_type`) REFERENCES `tbl_trigger_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_trigger_task` ADD CONSTRAINT `tbl_trigger_task_id_trigger_fkey` FOREIGN KEY (`id_trigger`) REFERENCES `tbl_trigger`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_trigger_cond_option` ADD CONSTRAINT `tbl_trigger_cond_option_id_trigger_fkey` FOREIGN KEY (`id_trigger`) REFERENCES `tbl_trigger`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
