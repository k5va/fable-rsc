import { env } from '@/env.mjs';

export const BACKEND_URL = env.NEXT_PUBLIC_BACKEND_URL;
export const QUERY_STALE_TIME = 1000 * 5;

export const ApiRoute = {
  PRODUCT: 'product',
  CATEGORY: 'category',
  COLLECTION: 'collection',
  ORDER: 'order',
} as const;
