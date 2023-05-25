import { StatusCodes } from 'http-status-codes';
import { getServerAuthSession } from './auth-options';
import { prisma } from '@/db';
import { ServerError } from '@/utils/server-error';

export const getCurrentUser = async () => {
  const session = await getServerAuthSession();

  if (!session?.user?.email) {
    throw new ServerError('Not signed in', StatusCodes.UNAUTHORIZED);
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    throw new ServerError('User not found', StatusCodes.UNAUTHORIZED);
  }

  return { ...user, email: session.user.email };
};
