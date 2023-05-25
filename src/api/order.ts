import { orderSchema } from '@/schema';
import { CreateOrder, Order, Sorting } from '@/types';
import { ApiRoute } from './api.const';
import { get, post } from './api';

export async function fetchOrders(sort: Sorting = 'desc'): Promise<Order[]> {
  const { data } = await get(`${ApiRoute.ORDER}?sort=${sort}`);
  return orderSchema.array().parseAsync(data);
}

export async function createOrder(order: CreateOrder): Promise<Order> {
  const { data } = await post(`${ApiRoute.ORDER}`, order);
  return orderSchema.parseAsync(data);
}
