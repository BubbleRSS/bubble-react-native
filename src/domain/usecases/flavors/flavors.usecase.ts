import { FlavorModel } from "@/domain/models";

export type CreateFlavorParams = {
  name: string,
  color: string
}

export type DeleteFlavorParams = {
  id: number
}

export interface FlavorsUsecase {
  findAll: () => Promise<FlavorModel[]>
  register: (params: CreateFlavorParams) => Promise<FlavorModel>
  remove: (params: DeleteFlavorParams) => Promise<FlavorModel>
}
