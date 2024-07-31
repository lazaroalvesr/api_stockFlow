/*
  Warnings:

  - You are about to drop the column `text` on the `tarefas` table. All the data in the column will be lost.
  - Added the required column `perecivel` to the `tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tarefas" DROP COLUMN "text",
ADD COLUMN     "dataFabricacao" TIMESTAMP(3),
ADD COLUMN     "dataValidade" TIMESTAMP(3),
ADD COLUMN     "perecivel" BOOLEAN NOT NULL;
