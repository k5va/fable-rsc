import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import { prisma } from '@/db';
import { ServerError, handleServerError } from '@/utils';
import { getCurrentUser } from '@/lib/auth/get-current-user';

const getContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const GET = async (_req: NextRequest, context: unknown) => {
  try {
    const user = await getCurrentUser();

    const {
      params: { id },
    } = await getContextSchema.parseAsync(context);

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        favoriteUsers: true,
      },
    });

    if (!product) {
      throw new ServerError('Product not found', StatusCodes.NOT_FOUND);
    }

    const isFavorite = product.favoriteUsers.some(({ id }) => id === user.id);

    return NextResponse.json({
      productId: product.id,
      userId: user.id,
      isFavorite,
    });
  } catch (error) {
    return handleServerError(error);
  }
};

const setFavoritesSchema = z.enum(['true', 'false']);

export const PATCH = async (req: NextRequest, context: unknown) => {
  try {
    const user = await getCurrentUser();

    const {
      params: { id },
    } = await getContextSchema.parseAsync(context);

    const set = await setFavoritesSchema.parseAsync(
      req.nextUrl.searchParams.get('set')
    );

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        favoriteUsers: true,
      },
    });

    if (!product) {
      throw new ServerError('Product not found', StatusCodes.NOT_FOUND);
    }

    await prisma.product.update({
      where: {
        id,
      },
      data: {
        favoriteUsers: {
          set:
            set === 'true'
              ? [
                  ...product.favoriteUsers.map((favUser) => ({
                    id: favUser.id,
                  })),
                  { id: user.id },
                ]
              : product.favoriteUsers
                  .filter(({ id }) => id !== user.id)
                  .map((favUser) => ({
                    id: favUser.id,
                  })),
        },
      },
    });

    return NextResponse.json({
      productId: product.id,
      userId: user.id,
      isFavorite: set === 'true',
    });
  } catch (error) {
    return handleServerError(error);
  }
};
