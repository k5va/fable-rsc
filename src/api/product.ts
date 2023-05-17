import { productSchema } from '@/schema';
import { Product } from '@/types';
import { ApiRoute, BACKEND_URL } from './api.const';

export async function fetchProducts(ids: string[] = []): Promise<Product[]> {
  const response = await fetch(
    `${BACKEND_URL}/${ApiRoute.PRODUCT}${ids ? `?${ids.join(',')}` : ''}`
  );
  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to fetch products');
  }
  const data = await response.json();

  return productSchema.array().parseAsync(data);
}

export async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`${BACKEND_URL}/${ApiRoute.PRODUCT}/${id}`);
  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to fetch product');
  }
  const data = await response.json();

  return productSchema.parseAsync(data);
}
