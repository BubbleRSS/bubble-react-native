import { drizzle } from "drizzle-orm/expo-sqlite";
import { createSQLiteConnection } from "@/infra/db/sqlite/SQLiteAdapter";

const sqliteDB = createSQLiteConnection();

export const drizzleInstance = drizzle(sqliteDB);
