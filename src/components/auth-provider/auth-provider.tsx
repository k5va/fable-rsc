'use client';

import { FC, PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

type AuthProviderProps = PropsWithChildren;

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
