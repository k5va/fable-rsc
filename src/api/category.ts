import { categorySchema } from '@/schema';
import { Category } from '@/types';
import { ApiRoute } from './api.const';
import { get } from './api';

//TODO: experiment with caching

export async function fetchCategories(): Promise<Category[]> {
  const data = await get(ApiRoute.CATEGORY);
  return categorySchema.array().parseAsync(data);
}

export async function fetchCategory(id: string): Promise<Category> {
  const data = await get(`${ApiRoute.CATEGORY}/${id}`);
  return categorySchema.parseAsync(data);
}
