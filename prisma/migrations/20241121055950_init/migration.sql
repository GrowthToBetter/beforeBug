-- CreateTable
CREATE TABLE `User` (
    `user_id` CHAR(36) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `photo_profile` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `absent` VARCHAR(191) NULL,
    `classes` VARCHAR(191) NULL,
    `school_origin` VARCHAR(191) NULL,
    `generation` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `teacher_id` CHAR(36) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `photo_profile` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `major` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`teacher_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAuth` (
    `userauth_id` CHAR(36) NOT NULL,
    `password` VARCHAR(191) NULL,
    `last_login` DATETIME(3) NULL,
    `userEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserAuth_userEmail_key`(`userEmail`),
    PRIMARY KEY (`userauth_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercise` (
    `exercise_id` CHAR(36) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `dificulty` VARCHAR(191) NOT NULL,
    `matery` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`exercise_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TeacherToUser` (
    `A` CHAR(36) NOT NULL,
    `B` CHAR(36) NOT NULL,

    UNIQUE INDEX `_TeacherToUser_AB_unique`(`A`, `B`),
    INDEX `_TeacherToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ExerciseToTeacher` (
    `A` CHAR(36) NOT NULL,
    `B` CHAR(36) NOT NULL,

    UNIQUE INDEX `_ExerciseToTeacher_AB_unique`(`A`, `B`),
    INDEX `_ExerciseToTeacher_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserAuth` ADD CONSTRAINT `UserAuth_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TeacherToUser` ADD CONSTRAINT `_TeacherToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Teacher`(`teacher_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TeacherToUser` ADD CONSTRAINT `_TeacherToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExerciseToTeacher` ADD CONSTRAINT `_ExerciseToTeacher_A_fkey` FOREIGN KEY (`A`) REFERENCES `Exercise`(`exercise_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExerciseToTeacher` ADD CONSTRAINT `_ExerciseToTeacher_B_fkey` FOREIGN KEY (`B`) REFERENCES `Teacher`(`teacher_id`) ON DELETE CASCADE ON UPDATE CASCADE;
