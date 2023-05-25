'use client';

import { FC } from 'react';
import { useProductOrderSummary } from '@/hooks/use-product-order-summary';

export const ProductOrderSummary: FC = () => {
  const { summary, delivery, promoCode, total } = useProductOrderSummary();

  return (
    <div className="flex flex-col gap-2">
      <p className="flex flex-nowrap justify-between text-xs">
        Summary: <span>{summary}</span>
      </p>
      <p className="flex flex-nowrap justify-between text-xs">
        Delivery: <span>{delivery}</span>
      </p>
      <p className="flex flex-nowrap justify-between text-xs">
        Promocode: <span>{promoCode}</span>
      </p>
      <p className="mt-5 flex flex-nowrap justify-between text-xl font-medium">
        Total: <span>{total}</span>
      </p>
    </div>
  );
};
