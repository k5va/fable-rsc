import { FC } from 'react';

type SkeletonProps = {
  className?: string;
};

export const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`min-h-[2rem] bg-slate-100 rounded-md animate-pulse ${className}`}
    ></div>
  );
};
