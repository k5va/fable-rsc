import { FC, useId } from 'react';
import clsx from 'clsx';
import { useAnimate } from 'framer-motion';
import { CarouselTabProps } from '../types';

export const CarouselTab: FC<CarouselTabProps> = ({ checked, onChecked }) => {
  const inputId = useId();
  const [ref, animate] = useAnimate();

  return (
    <div ref={ref} className="h-4 w-full">
      <input
        className="absolute appearance-none"
        id={inputId}
        type="radio"
        checked={checked}
        onChange={({ target }) => {
          void animate('label', { opacity: [1, 0.5, 1] });
          if (target.checked) {
            onChecked();
          }
        }}
      />
      <label
        className="relative block h-full cursor-pointer hover:animate-scale"
        htmlFor={inputId}
      >
        <span
          role="presentation"
          aria-hidden
          className={clsx(
            'absolute top-1/2 block h-[2px] w-full rounded bg-primary opacity-10',
            { 'opacity-100': checked }
          )}
        ></span>
        <p className="sr-only">select image</p>
      </label>
    </div>
  );
};
