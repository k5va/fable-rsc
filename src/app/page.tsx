import { Collections } from '@/components';

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Fable internet store</h1>
      {/* @ts-expect-error - react server component*/}
      <Collections />
    </>
  );
}
