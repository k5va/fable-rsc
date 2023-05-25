'use client';

import { FC } from 'react';
import { useOrderContext } from '@/app/order/context/order-context';
import { ProductOrder } from '@/components/product-order/product-order';

export const ProductOrderList: FC = () => {
  const { productOrders } = useOrderContext();

  return (
    <ul className="flex flex-col flex-nowrap gap-5">
      {productOrders.map((productOrder) => {
        return (
          <li key={productOrder.productId}>
            <ProductOrder productOrder={productOrder} />
          </li>
        );
      })}
    </ul>
  );
};
