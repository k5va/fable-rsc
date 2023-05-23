import { FC } from 'react';
import { CategoryProducts } from '@/components/category-products/category-products';
import { Collection } from '@/types';
import { filterProductsByCollection } from '@/utils';
import { getCategories, getProducts } from '@/services';

type CollectionProductsProps = {
  collection: Collection;
};

//@ts-expect-error Async Server Component
export const CollectionProducts: FC<CollectionProductsProps> = async ({
  collection,
}) => {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  const collectionProducts = filterProductsByCollection(collection, products);

  return collectionProducts.length > 0 ? (
    <div className="mb-12">
      <h3 className="text-center text-5xl uppercase small:text-3xl">
        {collection.name}
      </h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryProducts
              category={category}
              products={collectionProducts}
            />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};
