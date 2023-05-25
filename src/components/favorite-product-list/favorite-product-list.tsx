'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Pagination } from '@/components/ui/pagination/paginatipon';
import { ProductCard } from '@/components/product-card/product-card';
import { ProductList } from '@/types';
import { AppRoute } from '@/const';

type FavoriteProductListProps = {
  page: number;
  count: number;
  productList: ProductList;
};

export const FavoriteProductList: FC<FavoriteProductListProps> = ({
  page,
  count,
  productList,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 pb-2">
      <ul
        className="
          grid grid-cols-3 gap-2
          small:grid-cols-1"
      >
        {productList.products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <Pagination
        current={page}
        total={productList.total ? Math.ceil(productList.total / count) : 0}
        onChange={(newPage) =>
          router.push(`${AppRoute.FAVORITES}?page=${newPage}&count=${count}`)
        }
      />
    </div>
  );
};
