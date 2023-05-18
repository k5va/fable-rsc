import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { CreateProductOrder } from '@/types';

type State = {
  orders: CreateProductOrder[];
  addOrder: (order: CreateProductOrder) => void;
  removeOrder: (productId: string) => void;
  incrementProductCount: (productId: string) => void;
  decrementProductCount: (productId: string) => void;
  removeAll: () => void;
};

// TODO: try persist middleware
export const useOrders = create<State>()(
  // Support redux devtools
  devtools(
    // Support immer
    immer((set) => ({
      orders: [],
      addOrder: (order) =>
        set((state) => {
          state.orders.push(order);
        }),
      removeOrder: (productId) =>
        set((state) => {
          state.orders = state.orders.filter(
            (product) => product.productId !== productId
          );
        }),
      incrementProductCount: (productId: string) =>
        set((state) => {
          const order = state.orders.find(
            (product) => product.productId === productId
          );
          if (order) {
            order.count++;
          }
        }),
      decrementProductCount: (productId: string) =>
        set((state) => {
          const order = state.orders.find(
            (product) => product.productId === productId
          );
          if (order && order.count > 1) {
            order.count--;
          }
        }),
      removeAll: () =>
        set((state) => {
          state.orders = [];
        }),
    }))
  )
);
