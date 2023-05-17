import { FC } from 'react';
import { ProductCard } from '@/components';
import { Category, Product } from '@/types';
import { filterProductsByCategory, sortProducts } from '@/utils';
import { ProductSorting } from '@/const';

type CategoryProductsProps = {
  category: Category;
  products: Product[];
};

export const CategoryProducts: FC<CategoryProductsProps> = ({
  category,
  products,
}) => {
  const sorting = ProductSorting.New;
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
