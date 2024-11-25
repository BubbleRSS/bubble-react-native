import { drizzleInstance } from "./drizzle/drizzleInstance";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../../../drizzle/migrations";

export const useDatabase = () => {
  const { success, error } = useMigrations(drizzleInstance, migrations);

  if (error) {
    throw new Error(`Erro ao aplicar migrações: ${error.message}`);
  }

  return { success, drizzleInstance };
};