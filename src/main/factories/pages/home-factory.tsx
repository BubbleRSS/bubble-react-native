import { ReactElement } from "react";
import { HomePage } from "@/presentation/pages/Home"
import { MakeFlavorsRepository } from "@/main/factories/repositories";

export const MakeHomeFactory = (): ReactElement => {
  return (
    <HomePage
      flavorsRep={MakeFlavorsRepository()}
    />
  )
}
