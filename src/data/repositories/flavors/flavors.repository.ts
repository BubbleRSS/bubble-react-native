import { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import { SQLiteDatabase } from "expo-sqlite";
import { CreateFlavorParams, DeleteFlavorParams, FlavorsUsecase } from "@/domain/usecases";
import { asc, eq } from "drizzle-orm";
import { FlavorModel } from "@/domain/models";
import * as flavorSchema from "@/infra/db/drizzle/schemas/flavorSchema";

export class FlavorsRepository implements FlavorsUsecase {
  constructor (
    private readonly databaseClient: ExpoSQLiteDatabase<typeof flavorSchema> & { $client: SQLiteDatabase }
  ) {}

  async findAll(): Promise<FlavorModel[]> {
    return this.databaseClient.query.flavor
      .findMany({
        orderBy: [asc(flavorSchema.flavor.name)],
      });
  }

  async register(params: CreateFlavorParams): Promise<FlavorModel> {
    return await this.databaseClient
      .insert(flavorSchema.flavor)
      .values({
        name: params.name,
        color: params.color
      })
      .then((response) => ({
        id: response.lastInsertRowId,
        name: params.name,
        color: params.color
      }));
  }

  async remove(params: DeleteFlavorParams): Promise<number> {
    return this.databaseClient
      .delete(flavorSchema.flavor)
      .where(eq(flavorSchema.flavor.id, params.id))
      .then((response) => response.lastInsertRowId);
  }
}
