import { FC } from 'react';
import { CategoryProducts } from '@/components';
import { Collection } from '@/types';
import { fetchCategories, fetchProducts } from '@/api';
import { filterProductsByCollection } from '@/utils';

type CollectionProductsProps = {
  collection: Collection;
};

//@ts-expect-error - react server component
export const CollectionProducts: FC<CollectionProductsProps> = async ({
  collection,
}) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

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
