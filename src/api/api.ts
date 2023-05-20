import { BACKEND_URL } from './api.const';

export const get = async (url: string) => {
  const response = await fetch(`${BACKEND_URL}/${url}`);
  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to fetch data');
  }
  return response.json();
};
