'use client';

import { FC } from 'react';
import { ProductCard } from '@/components/product-card/product-card';
import { Category, Product } from '@/types';
import { filterProductsByCategory, sortProducts } from '@/utils';
import { useSorting } from '@/store';

type CategoryProductsProps = {
  category: Category;
  products: Product[];
};

export const CategoryProducts: FC<CategoryProductsProps> = ({
  category,
  products,
}) => {
  const sorting = useSorting((state) => state.sorting);
  const categoryProducts = sortProducts(
    sorting,
    filterProductsByCategory(category, products)
  );

  return categoryProducts.length > 0 ? (
    <div className="mb-12">
      <h4 className="mb-6 text-2xl small:text-sm">{category.name}</h4>
      <ul
        className="
        grid grid-cols-3 gap-y-10 gap-x-5
        small:grid-cols-2 small:gap-y-6 small:gap-x-5"
      >
        {categoryProducts.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};
