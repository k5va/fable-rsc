import { BACKEND_URL } from './api.const';

export const get = async (url: string) => {
  const response = await fetch(`${BACKEND_URL}/${url}`);
  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to fetch data');
  }
  return response.json();
};

export const post = async (url: string, data: unknown) => {
  const response = await fetch(`${BACKEND_URL}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to post data');
  }
  return response.json();
};

export const patch = async (url: string, data?: unknown) => {
  const response = await fetch(`${BACKEND_URL}/${url}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    console.log(response.status, response.statusText);

    throw new Error('Failed to post data');
  }
  return response.json();
};
