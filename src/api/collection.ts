import { collectionSchema } from '@/schema';
import { Collection } from '@/types';
import { ApiRoute } from './api.const';
import { get } from './api';

export async function fetchCollections(): Promise<Collection[]> {
  const data = await get(ApiRoute.COLLECTION);
  return collectionSchema.array().parseAsync(data);
}

export async function fetchCollection(id: string): Promise<Collection> {
  const data = await get(`${ApiRoute.COLLECTION}/${id}`);
  return collectionSchema.parseAsync(data);
}
