import { ProductSorting } from '@/const';
import { Product, ProductSortingType } from '@/types';

export function sortProducts(
  sorting: ProductSortingType,
  products: Product[]
): Product[] {
  switch (sorting) {
    case ProductSorting.New:
      return [...products].sort(
        ({ registerDate: date1 }, { registerDate: date2 }) =>
          date1.getTime() - date2.getTime()
      );
    case ProductSorting.Price:
      return [...products].sort(
        ({ price: price1 }, { price: price2 }) => price1 - price2
      );
    default:
      throw new Error(`Unknown sorting ${sorting}`);
  }
}
