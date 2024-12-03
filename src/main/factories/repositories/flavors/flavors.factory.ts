import { FlavorsRepository } from "@/data/repositories";
import { useSQLiteContext } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import * as flavorSchema from "@/infra/db/drizzle/schemas/flavorSchema";

export const MakeFlavorsRepository = (): FlavorsRepository => {
  const database = useSQLiteContext()
  const db = drizzle(database, { schema: flavorSchema })

  return new FlavorsRepository(db);
}
