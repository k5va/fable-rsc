'use client';

import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { ProductOrder } from '@/types';
import { useEnrichedProductOrders } from '@/hooks';

type OrderContextType = {
  productOrders: ProductOrder[];
};

type OrderContextProviderProps = PropsWithChildren;

const OrderContext = createContext<OrderContextType>({
  productOrders: [],
});

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
