-- CreateTable
CREATE TABLE "tbl_trigger_cond" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "parameter" TEXT NOT NULL,

    CONSTRAINT "tbl_trigger_cond_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_trigger_type" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "unit_of_measurement" TEXT NOT NULL,
    "is_accumulated" BOOLEAN NOT NULL,

    CONSTRAINT "tbl_trigger_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_trigger" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "id_trigger_type" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "status" BOOLEAN NOT NULL,
    "group" TEXT,
    "machine" TEXT,
    "id_user" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_trigger_task" (
    "id" SERIAL NOT NULL,
    "id_trigger" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,
    "closed" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_trigger_task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_trigger_cond_option" (
    "id" SERIAL NOT NULL,
    "id_trigger" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "tbl_trigger_cond_option_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_trigger" ADD CONSTRAINT "tbl_trigger_id_trigger_type_fkey" FOREIGN KEY ("id_trigger_type") REFERENCES "tbl_trigger_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_trigger_task" ADD CONSTRAINT "tbl_trigger_task_id_trigger_fkey" FOREIGN KEY ("id_trigger") REFERENCES "tbl_trigger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_trigger_cond_option" ADD CONSTRAINT "tbl_trigger_cond_option_id_trigger_fkey" FOREIGN KEY ("id_trigger") REFERENCES "tbl_trigger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
