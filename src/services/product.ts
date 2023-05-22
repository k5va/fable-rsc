import { prisma } from '@/db';
import { Product } from '@/types';

export const getProducts = async (): Promise<Product[]> => {
  return prisma.product.findMany({
    include: {
      images: true,
      image: true,
      favoriteUsers: true,
    },
  });
};

export const getProduct = async (id: string): Promise<Product> => {
  return prisma.product.findFirstOrThrow({
    where: {
      id,
    },
    include: {
      collection: true,
      category: true,
      image: true,
      images: true,
    },
  });
};
