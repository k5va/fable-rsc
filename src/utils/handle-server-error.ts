import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';
import { ServerError } from './server-error';
import { NextResponse } from 'next/server';

export const handleServerError = (error: unknown) => {
  console.error(error);

  if (error instanceof ServerError) {
    return NextResponse.json(error.message, { status: error.status });
  }

  if (error instanceof ZodError) {
    return NextResponse.json(error.message, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  return NextResponse.json('Unknown error happened', {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
  });
};
