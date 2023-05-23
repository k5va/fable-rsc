import { prisma } from '@/db';
import { Collection } from '@/types';

export const getCollections = async (): Promise<Collection[]> => {
  return prisma.collection.findMany();
};

export const getCollection = async (id: string): Promise<Collection> => {
  return prisma.collection.findFirstOrThrow({
    where: {
      id,
    },
  });
};
