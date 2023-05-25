import { FC } from 'react';
import { Order, Sorting } from '@/types';
import { OrderData } from '@/components/order-data/order-data';
import { ProductOrder } from '@/components/product-order/product-order';
import { OrderSortSelect } from './ui/order-sort-select';

type OrderListProps = {
  orders: Order[];
  sorting: Sorting;
};

export const OrderList: FC<OrderListProps> = ({ orders, sorting }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="ml-auto">
        <OrderSortSelect sorting={sorting} />
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
