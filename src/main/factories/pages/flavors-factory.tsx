import { ReactElement } from "react";
import { FlavorsPage } from "@/presentation/pages/Flavors"
import { MakeFlavorsRepository } from "@/main/factories/repositories";

export const MakeFlavorsFactory = (): ReactElement => {
  return (
    <FlavorsPage
      flavorsRepository={MakeFlavorsRepository()}
    />
  )
}
