import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '@/db';
import { handleServerError } from '@/utils';

export const GET = async () => {
  try {
    const collections = await prisma.collection.findMany();

    return NextResponse.json(collections, { status: StatusCodes.OK });
  } catch (error) {
    return handleServerError(error);
  }
};
