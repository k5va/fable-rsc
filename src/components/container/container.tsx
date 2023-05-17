import { FC, PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren;

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="my-0 mx-auto h-full max-w-[1440px] py-0 px-14 medium:px-5">
      {children}
    </div>
  );
};
