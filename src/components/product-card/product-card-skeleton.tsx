import { FC } from 'react';
import { Skeleton } from '@/components';

export const ProductCardSkeleton: FC = () => {
  return (
    <div className="flex flex-col items-stretch gap-2">
      <Skeleton className="aspect-square" />
      <Skeleton />
      <Skeleton />
    </div>
  );
};
