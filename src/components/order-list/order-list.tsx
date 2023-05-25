'use client';

import { FC, useState } from 'react';
import { useLoadOrders } from '@/hooks/use-load-orders';
import { Sorting } from '@/types';
import { OrderData } from '@/components/order-data/order-data';
import { ProductOrder } from '@/components/product-order/product-order';
import { OrderSortSelect } from './ui/order-sort-select';

export const OrderList: FC = () => {
  const [sorting, setSorting] = useState<Sorting>('desc');
  const { data: orders = [] } = useLoadOrders(sorting);

  return (
    <div className="flex flex-col gap-2">
      <div className="ml-auto">
        <OrderSortSelect sorting={sorting} onChange={setSorting} />
      </div>
      <ul className="flex flex-col gap-4">
        {orders.map((order) => (
          <li
            key={order.id}
            className="
            grid grid-cols-[1fr,2fr] gap-2 border-b-2 pb-4 
            small:grid-cols-1"
          >
            <OrderData order={order} />
            <ul className="flex flex-col gap-2">
              {order.productOrders.map((productOrder) => (
                <li key={productOrder.productId}>
                  <ProductOrder productOrder={productOrder} readonly />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
