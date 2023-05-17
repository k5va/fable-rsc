import { collectionSchema } from '@/schema';
import { Collection } from '@/types';
import { ApiRoute, BACKEND_URL } from './api.const';

export async function fetchCollections(): Promise<Collection[]> {
  const response = await fetch(`${BACKEND_URL}/${ApiRoute.COLLECTION}`);
  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to fetch collections');
  }
  const data = await response.json();

  return collectionSchema.array().parseAsync(data);
}

export async function fetchCollection(id: string): Promise<Collection> {
  const response = await fetch(`${BACKEND_URL}/${ApiRoute.COLLECTION}/${id}`);
  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to fetch collection');
  }
  const data = await response.json();

  return collectionSchema.parseAsync(data);
}
