import { Spinner } from '@/components/spinner/spinner';

export default function Loading() {
  return (
    <div className="grid place-content-center h-full">
      <Spinner />
    </div>
  );
}
