import { PrismaClient as PrismaClientRN } from "@prisma/client/react-native";
import { reactiveHooksExtension } from '@prisma/react-native';
import { PrismaClient } from "@/data/protocols";

const baseClient = new PrismaClientRN({
  log: ["query", "info", "warn"],
});

export class PrismaDatabaseClient implements PrismaClient {
  client(): PrismaClientRN {
    const prismaClient = baseClient.$extends(reactiveHooksExtension());
    return prismaClient as unknown as PrismaClientRN;
  }

  async initializeDb(): Promise<void> {
    try {
      await baseClient.$applyPendingMigrations();
    } catch (e) {
      throw new Error("Failed to initialize database");
    }
  };
}