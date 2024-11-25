import { create } from 'zustand'

type FormFlavorStateProps = {
  name: string,
  color: string,
  setName: (newName: string) => void
  setColor: (newColor: string) => void
}

export const useFlavorFormState = create<FormFlavorStateProps>((set) => ({
  name: '',
  color: '',
  setName: (newName) => set({ name: newName }),
  setColor: (newColor) => set({ color: newColor })
}))

export type FlavorProps = {
  id: number,
  name: string,
  color: string
}

type FlavorsStateProps = {
  flavors: FlavorProps[],
  setFlavors: (flavors: FlavorProps[]) => void
  addFlavor: (newFlavor: FlavorProps) => void
  removeFlavor: (flavorId: number) => void
}

export const useFlavorsState = create<FlavorsStateProps>((set) => ({
  flavors: [],
  setFlavors: (flavors) => set({ flavors }),
  addFlavor: (newFlavor) => set((state) => ({ flavors: [ ...state.flavors, newFlavor ] })),
  removeFlavor: (flavorId) => set((state) => ({ flavors: state.flavors.filter(t => t.id !== flavorId) }))
}))
