import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '@/db';
import { handleServerError } from '@/utils';

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return NextResponse.json(categories, { status: StatusCodes.OK });
  } catch (error) {
    return handleServerError(error);
  }
};
