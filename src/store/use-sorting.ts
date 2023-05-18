import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ProductSortingType } from '@/types';
import { ProductSorting } from '@/const';

type State = {
  sorting: ProductSortingType;
  change: (sorting: ProductSortingType) => void;
};

// TODO: try persist middleware
export const useSorting = create<State>()(
  // Support redux devtools
  devtools((set) => ({
    sorting: ProductSorting.New,
    change: (sorting) => set(() => ({ sorting })),
  }))
);
