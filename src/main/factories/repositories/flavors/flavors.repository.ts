import { FlavorsRepository } from "@/data/repositories"
import { PrismaDatabaseClient } from "@/infra/database"

export const MakeFlavorsRepository = (): FlavorsRepository => {
  const prismaDatabaseClient = new PrismaDatabaseClient();

  return new FlavorsRepository(prismaDatabaseClient.client());
}
