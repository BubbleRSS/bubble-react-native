import { PrismaClient as PrismaClientRN } from "@prisma/client/react-native";

export interface PrismaClient {
  client: () => PrismaClientRN
  initializeDb: () => Promise<void>
}
