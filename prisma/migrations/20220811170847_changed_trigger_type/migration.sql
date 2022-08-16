/*
  Warnings:

  - Added the required column `id_trigger` to the `tbl_trigger_type` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tbl_trigger" DROP CONSTRAINT "tbl_trigger_id_trigger_type_fkey";

-- AlterTable
ALTER TABLE "tbl_trigger_type" ADD COLUMN     "id_trigger" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tbl_trigger_type" ADD CONSTRAINT "tbl_trigger_type_id_trigger_fkey" FOREIGN KEY ("id_trigger") REFERENCES "tbl_trigger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
