import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import { prisma } from '@/db';
import { ServerError, handleServerError } from '@/utils';

const getContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const GET = async (_req: NextRequest, context: unknown) => {
  try {
    const {
      params: { id },
    } = await getContextSchema.parseAsync(context);

    const product = await prisma.product.findFirst({
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

    if (!product) {
      throw new ServerError('Product not found', StatusCodes.NOT_FOUND);
    }

    return NextResponse.json(product);
  } catch (error) {
    return handleServerError(error);
  }
};
