'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button, Container } from '@/components';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container>
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <h2 className="text-4xl">Something went wrong!</h2>
        <p className="mb-4">{error.message}</p>
        <Button intent="secondary" onClick={reset}>
          Try again
        </Button>
      </div>
    </Container>
  );
}
