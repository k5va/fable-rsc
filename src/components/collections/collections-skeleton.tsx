import { FC } from 'react';
import { Container, ProductCardSkeleton, Skeleton } from '@/components';

const DEFAULT_PRODUCTS_COUNT = 6;

export const CollectionsSkeleton: FC = () => {
  return (
    <Container>
      <section className="flex flex-col gap-3">
        <Skeleton />
        <Skeleton />
        <ul
          className="
                pt-4 grid grid-cols-3 gap-y-10 gap-x-5
                small:grid-cols-2 small:gap-y-6 small:gap-x-5"
        >
          {Array.from(Array(DEFAULT_PRODUCTS_COUNT).keys()).map((index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </ul>
      </section>
    </Container>
  );
};
