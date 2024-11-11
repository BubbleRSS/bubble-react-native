import { create } from "zustand/index";

type SelectedFlavorProps = {
  key: number;
  value: string | undefined;
}

type FlavorFullScreenPickerStateProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  dataSource: SelectedFlavorProps[];
  setDataSource: (option: SelectedFlavorProps[]) => void;
  selectedFlavor: SelectedFlavorProps | undefined;
  setSelectedFlavor: (selected: SelectedFlavorProps | undefined) => void;
};

export const useFlavorFullScreenPickerState = create<FlavorFullScreenPickerStateProps>
((set) => ({
  isOpen: false,
  setIsOpen: (option) => set({ isOpen: option }),
  dataSource: [{ key: 1, value: 'Shopping' }, { key: 2, value: 'Work' }, { key: 3, value: 'Personal' }],
  setDataSource: (option) => set({ dataSource: option }),
  selectedFlavor: undefined,
  setSelectedFlavor: (selected: SelectedFlavorProps | undefined) => set({ selectedFlavor: selected }),
}));
