import { Container } from '@/components/container/container';
import { Collections } from '@/components/collections/collections';
import { QueryProvider } from '@/components/query-provider/query-provider';

export default function Home() {
  return (
    <QueryProvider>
      <Container>
        <h2 className="sr-only">Products list</h2>
        {/* @ts-expect-error - react server component*/}
        <Collections />
      </Container>
    </QueryProvider>
  );
}
