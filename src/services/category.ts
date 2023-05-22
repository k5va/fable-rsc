import { prisma } from '@/db';

export const getCategories = async () => {
  return prisma.category.findMany();
};

export const getCategory = async (id: string) => {
  return prisma.category.findFirstOrThrow({
    where: {
      id,
    },
  });
};
