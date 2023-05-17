import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db';
import { handleServerError } from '@/utils';

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = req.nextUrl;
    const idsParam = searchParams.get('ids');
    const ids = idsParam ? idsParam.split(',') : undefined;

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        images: true,
        image: true,
        favoriteUsers: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    return handleServerError(error);
  }
};
