'use client';

import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { ProductOrder } from '@/types';
import { useEnrichedProductOrders } from '@/hooks/use-enriched-product-orders';

type OrderContextType = {
  productOrders: ProductOrder[];
};

const OrderContext = createContext<OrderContextType>({
  productOrders: [],
});

type OrderContextProviderProps = PropsWithChildren;

export const OrderContextProvider: FC<OrderContextProviderProps> = ({
  children,
}) => {
  const { data: productOrders = [] } = useEnrichedProductOrders();

  return (
    <OrderContext.Provider value={{ productOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
