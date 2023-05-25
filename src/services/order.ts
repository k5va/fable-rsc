import { prisma } from '@/db';
import { getCurrentUser } from '@/lib/auth/get-current-user';
import { orderSchema } from '@/schema';
import { Order, Sorting } from '@/types';

export const getOrders = async (sort: Sorting = 'desc'): Promise<Order[]> => {
  const { email } = await getCurrentUser();
  const data = await prisma.order.findMany({
    where: {
      email,
    },
    orderBy: {
      createdAt: sort,
    },
    include: {
      productOrders: {
        include: {
          product: {
            include: {
              image: true,
              images: true,
            },
          },
        },
      },
    },
  });

  return orderSchema.array().parseAsync(data);
};
