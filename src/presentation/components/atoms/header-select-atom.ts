import { create } from 'zustand';

type HeaderSelectStateProps = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};

export const useHeaderSelectState = create<HeaderSelectStateProps>
((set) => ({
  selectedOption: 'Shopping',
  setSelectedOption: (option) => set({ selectedOption: option }),
}));
