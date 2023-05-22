import { Container } from '@/components/container/container';
import { Collections } from '@/components/collections/collections';

export default function Home() {
  return (
    <Container>
      <h1 className="sr-only">Fable internet store</h1>
      {/* @ts-expect-error - react server component*/}
      <Collections />
    </Container>
  );
}
