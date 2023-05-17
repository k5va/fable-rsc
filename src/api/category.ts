import { categorySchema } from '@/schema';
import { Category } from '@/types';
import { ApiRoute, BACKEND_URL } from './api.const';

export async function fetchCategories(): Promise<Category[]> {
  const response = await fetch(`${BACKEND_URL}/${ApiRoute.CATEGORY}`);
  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to fetch categories');
  }
  const data = await response.json();

  return categorySchema.array().parseAsync(data);
}

export async function fetchCategory(id: string): Promise<Category> {
  const response = await fetch(`${BACKEND_URL}/${ApiRoute.CATEGORY}/${id}`);
  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to fetch category');
  }
  const data = await response.json();

  return categorySchema.parseAsync(data);
}
