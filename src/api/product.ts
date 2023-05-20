import { productSchema } from '@/schema';
import { Product } from '@/types';
import { ApiRoute } from './api.const';
import { get } from './api';

const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));
const waitWithError = () =>
  new Promise((_resolve, reject) =>
    setTimeout(() => reject('Error happend!'), 2000)
  );

export async function fetchProducts(ids: string[] = []): Promise<Product[]> {
  await wait();
  const data = await get(
    `${ApiRoute.PRODUCT}${ids ? `?${ids.join(',')}` : ''}`
  );
  return productSchema.array().parseAsync(data);
}

export async function fetchProduct(id: string): Promise<Product> {
  await wait();
  const data = await get(`${ApiRoute.PRODUCT}/${id}`);
  return productSchema.parseAsync(data);
}
