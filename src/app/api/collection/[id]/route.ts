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

    const collection = await prisma.collection.findFirst({
      where: {
        id,
      },
    });

    if (!collection) {
      throw new ServerError('Collection not found', StatusCodes.NOT_FOUND);
    }

    return NextResponse.json(collection);
  } catch (error) {
    return handleServerError(error);
  }
};
