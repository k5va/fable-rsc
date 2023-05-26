import { z } from 'zod';
import { Container } from '@/components/container/container';
import { FavoriteProductList } from '@/components/favorite-product-list/favorite-product-list';
import { getFavorites } from '@/services/favorites';
import { QueryProvider } from '@/components/query-provider/query-provider';

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_RECORDS_PER_PAGE = 6;

const searchParamsSchema = z.object({
  page: z.number({ coerce: true }).positive().default(DEFAULT_PAGE_NUMBER),
  count: z
    .number({ coerce: true })
    .positive()
    .default(DEFAULT_RECORDS_PER_PAGE),
});

type FavoritesPageProps = {
  searchParams: string;
};

export default async function Favorites({ searchParams }: FavoritesPageProps) {
  const { page, count } = await searchParamsSchema.parseAsync(searchParams);
  const productList = await getFavorites(page, count);

  return (
    <QueryProvider>
      <Container>
        <h2 className="mb-3 text-center text-2xl font-medium">
          My favorite products
        </h2>
        <FavoriteProductList
          page={page}
          count={count}
          productList={productList}
        />
      </Container>
    </QueryProvider>
  );
}
