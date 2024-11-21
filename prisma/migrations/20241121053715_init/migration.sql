-- CreateTable
CREATE TABLE "user" (
    "user_id" CHAR(36) NOT NULL,
    "email" TEXT NOT NULL,
    "photo_profile" TEXT,
    "name" TEXT NOT NULL,
    "absent" TEXT,
    "classes" TEXT,
    "school_origin" TEXT,
    "generation" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "teacher_id" CHAR(36) NOT NULL,
    "email" TEXT NOT NULL,
    "photo_profile" TEXT,
    "name" TEXT NOT NULL,
    "major" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("teacher_id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "exercise_id" CHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "dificulty" TEXT NOT NULL,
    "matery" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("exercise_id")
);

-- CreateTable
CREATE TABLE "_TeacherTouser" (
    "A" CHAR(36) NOT NULL,
    "B" CHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_ExerciseToTeacher" (
    "A" CHAR(36) NOT NULL,
    "B" CHAR(36) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_TeacherTouser_AB_unique" ON "_TeacherTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_TeacherTouser_B_index" ON "_TeacherTouser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ExerciseToTeacher_AB_unique" ON "_ExerciseToTeacher"("A", "B");

-- CreateIndex
CREATE INDEX "_ExerciseToTeacher_B_index" ON "_ExerciseToTeacher"("B");

-- AddForeignKey
ALTER TABLE "_TeacherTouser" ADD CONSTRAINT "_TeacherTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "Teacher"("teacher_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeacherTouser" ADD CONSTRAINT "_TeacherTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToTeacher" ADD CONSTRAINT "_ExerciseToTeacher_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("exercise_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToTeacher" ADD CONSTRAINT "_ExerciseToTeacher_B_fkey" FOREIGN KEY ("B") REFERENCES "Teacher"("teacher_id") ON DELETE CASCADE ON UPDATE CASCADE;
