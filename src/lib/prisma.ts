import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prismaClient = globalForPrisma.prisma || prisma;

if (process.env.NODE_ENV === "development") {
  globalForPrisma.prisma = prisma;
}

export default prismaClient;
