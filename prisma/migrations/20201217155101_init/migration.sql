-- CreateTable
CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191),
    `password` VARCHAR(191),
    `photo` VARCHAR(191),
    `created_at` DATETIME(3),
    `updated_at` DATETIME(3),
    `deleted_at` DATETIME(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bookings` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT,
    `room_id` INT,
    `total_person` INT,
    `booking_time` DATETIME(3),
    `noted` VARCHAR(191),
    `check_in_time` DATETIME(3),
    `check_out_time` DATETIME(3),
    `created_at` DATETIME(3),
    `updated_at` DATETIME(3),
    `deleted_at` DATETIME(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rooms` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `room_name` VARCHAR(191),
    `room_capacity` VARCHAR(191),
    `photo` VARCHAR(191),
    `created_at` DATETIME(3),
    `updated_at` DATETIME(3),
    `deleted_at` DATETIME(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bookings` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookings` ADD FOREIGN KEY (`room_id`) REFERENCES `rooms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
