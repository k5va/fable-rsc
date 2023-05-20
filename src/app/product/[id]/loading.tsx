import { Spinner } from '@/components';

export default function Loading() {
  return (
    <div className="grid place-content-center h-full">
      <Spinner />;
    </div>
  );
}
