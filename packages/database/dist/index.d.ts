import { PrismaClient } from "@prisma/client";
export * from "@prisma/client";
declare global {
    var prisma: PrismaClient | undefined;
}
export declare const db: PrismaClient;
