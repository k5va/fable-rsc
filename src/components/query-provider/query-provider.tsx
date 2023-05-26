'use client';

import { FC, PropsWithChildren } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/api';

type QueryProviderProps = PropsWithChildren;

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
