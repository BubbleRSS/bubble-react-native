import { openDatabaseSync } from "expo-sqlite";

export const DATABASE_NAME = "database.db";

export const createSQLiteConnection = () => openDatabaseSync(DATABASE_NAME);
