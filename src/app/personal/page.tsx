import { Container } from '@/components/container/container';
import { OrderList } from '@/components/order-list/order-list';
import { getOrders } from '@/services';
import { z } from 'zod';

// TODO: make zod schema
const searchParamsSchema = z.object({
  sort: z.enum(['asc', 'desc']).optional(),
});

export default async function Home({ searchParams }: { searchParams: string }) {
  const { sort = 'desc' } = await searchParamsSchema.parseAsync(searchParams);
  const orders = await getOrders(sort);

  return (
    <Container>
      <h2 className="mb-3 text-center text-2xl font-medium">My orders</h2>
      <OrderList orders={orders} sorting={sort} />
    </Container>
  );
}
