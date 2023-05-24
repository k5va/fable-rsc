import { Container } from '@/components/container/container';
import { Collections } from '@/components/collections/collections';

export default function Home() {
  return (
    <Container>
      <h2 className="sr-only">Products list</h2>
      {/* @ts-expect-error - react server component*/}
      <Collections />
    </Container>
  );
}
