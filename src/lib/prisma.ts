import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as typeof global & { prisma?: PrismaClient };

const prismaClient = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  globalForPrisma.prisma = prismaClient;
}

export default prismaClient;
