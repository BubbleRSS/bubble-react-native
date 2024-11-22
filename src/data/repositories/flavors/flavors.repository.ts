import { FlavorModel } from "@/domain/models";
import { CreateFlavorParams, DeleteFlavorParams, FlavorsUsecase } from "@/domain/usecases/flavors"
import { PrismaClient } from "@prisma/client/react-native"

export class FlavorsRepository implements FlavorsUsecase {
  constructor (
    private readonly prismaClient: PrismaClient
  ) {}

  async findAll(): Promise<FlavorModel[]> {
    return await this.prismaClient.flavor
      .findMany();
  }

  async register(params: CreateFlavorParams): Promise<FlavorModel> {
    return await this.prismaClient.flavor
      .create({
        data: params
      });
  }

  async remove(params: DeleteFlavorParams): Promise<FlavorModel> {
    return await this.prismaClient.flavor
      .delete({
        where: {
          id: params.id
        }
      });
  }
}