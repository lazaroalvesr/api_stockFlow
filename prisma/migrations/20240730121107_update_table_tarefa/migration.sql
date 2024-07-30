/*
  Warnings:

  - Added the required column `text` to the `tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tarefas" ADD COLUMN     "text" TEXT NOT NULL;
