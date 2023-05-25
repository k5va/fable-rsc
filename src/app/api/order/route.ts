import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import { prisma } from '@/db';
import { handleServerError } from '@/utils';
import { getCurrentUser } from '@/lib/auth/get-current-user';
import { createOrderSchema } from '@/schema';

const sortSchema = z.enum(['asc', 'desc']).optional();

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = req.nextUrl;
    const sort =
      (await sortSchema.parseAsync(searchParams.get('sort'))) ?? 'desc';

    const { email } = await getCurrentUser();
    const orders = await prisma.order.findMany({
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

    return NextResponse.json(orders, { status: StatusCodes.OK });
  } catch (error) {
    return handleServerError(error);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { productOrders, ...orderData } = await createOrderSchema.parseAsync(
      body
    );

    const order = await prisma.order.create({
      data: {
        ...orderData,
        productOrders: {
          createMany: {
            data: productOrders,
          },
        },
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

    return NextResponse.json(order, { status: StatusCodes.OK });
  } catch (error) {
    return handleServerError(error);
  }
};
