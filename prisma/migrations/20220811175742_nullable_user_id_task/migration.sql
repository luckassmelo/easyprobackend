/*
  Warnings:

  - You are about to drop the column `id_trigger_type` on the `tbl_trigger` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tbl_trigger" DROP COLUMN "id_trigger_type";

-- AlterTable
ALTER TABLE "tbl_trigger_task" ALTER COLUMN "id_user" DROP NOT NULL;
