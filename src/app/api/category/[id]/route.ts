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

    const category = await prisma.category.findFirst({
      where: {
        id,
      },
    });

    if (!category) {
      throw new ServerError('Category not found', StatusCodes.NOT_FOUND);
    }

    return NextResponse.json(category);
  } catch (error) {
    return handleServerError(error);
  }
};
