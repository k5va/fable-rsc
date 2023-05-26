import { favoriteProductSchema, productSchema } from '@/schema';
import { FavoriteProduct, Product } from '@/types';
import { ApiRoute } from './api.const';
import { get, patch } from './api';

//TODO: remove helper functions

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

export async function fetchIsFavoriteProduct(
  productId: string
): Promise<FavoriteProduct> {
  const data = await get(`${ApiRoute.PRODUCT}/${productId}/favorite`);
  return favoriteProductSchema.parseAsync(data);
}

export async function setFavoriteProduct({
  productId,
  isFavorite,
}: Pick<
  FavoriteProduct,
  'productId' | 'isFavorite'
>): Promise<FavoriteProduct> {
  const data = await patch(
    `${ApiRoute.PRODUCT}/${productId}/favorite?set=${isFavorite}`
  );
  return favoriteProductSchema.parseAsync(data);
}
