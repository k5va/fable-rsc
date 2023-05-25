import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '@/db';
import { handleServerError } from '@/utils';
import { getCurrentUser } from '@/lib/auth/get-current-user';
import { createOrderSchema } from '@/schema';

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
