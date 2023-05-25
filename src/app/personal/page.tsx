'use client';

import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/api';

import { Container } from '@/components/container/container';
import { OrderList } from '@/components/order-list/order-list';

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <h2 className="mb-3 text-center text-2xl font-medium">My orders</h2>
        <OrderList />
      </Container>
    </QueryClientProvider>
  );
}
