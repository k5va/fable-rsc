import { prisma } from '@/db';
import { getCurrentUser } from '@/lib/auth/get-current-user';
import { ProductList } from '@/types';

export const getFavorites = async (
  page: number,
  count: number
): Promise<ProductList> => {
  const user = await getCurrentUser();

  const total = await prisma.product.count({
    where: {
      favoriteUsers: {
        some: {
          id: user.id,
        },
      },
    },
  });

  const products = await prisma.product.findMany({
    where: {
      favoriteUsers: {
        some: {
          id: user.id,
        },
      },
    },
    include: {
      images: true,
      image: true,
    },
    skip: (page - 1) * count,
    take: count,
  });

  return {
    products,
    count: products.length,
    total,
    page,
  };
};
