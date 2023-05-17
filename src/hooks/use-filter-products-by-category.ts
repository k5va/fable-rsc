import { useMemo } from 'react';
import { Category, Product } from '@/types';
import { filterProductsByCategory, sortProducts } from '@/utils';
import { ProductSorting } from '@/const';
// import { useSorting } from '~/store';

export const useFilterProductsByCategory = (
  category: Category,
  products: Product[]
) => {
  //const sorting = useSorting((state) => state.sorting);
  const sorting = ProductSorting.New;

  return useMemo(
    () => sortProducts(sorting, filterProductsByCategory(category, products)),
    [category, sorting, products]
  );
};
