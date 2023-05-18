'use client';

import { FC, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLMotionProps, motion } from 'framer-motion';

const buttonStyles = cva(
  'text-xl py-2 px-10 cursor-pointer border border-solid',
  {
    variants: {
      intent: {
        primary: 'text-primary bg-secondary border-secondary',
        secondary: 'text-secondary bg-primary border-primary',
        disabled: 'text-primary bg-disabled border-disabled',
      },
      width: {
        content: 'w-fit',
        full: 'w-full',
      },
      shape: {
        basic: 'rounded-none',
        round: 'rounded-full',
        rounded: 'rounded-lg',
      },
    },
    defaultVariants: {
      intent: 'primary',
      width: 'content',
      shape: 'basic',
    },
  }
);

type ButtonProps = HTMLMotionProps<'button'> &
  VariantProps<typeof buttonStyles>;

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function Button({ children, intent, width, shape, ...props }, ref) {
  return (
    <motion.button
      ref={ref}
      whileHover={intent !== 'disabled' ? { scale: 1.01 } : undefined}
      whileTap={intent !== 'disabled' ? { opacity: [1, 0.2, 1] } : undefined}
      className={buttonStyles({ intent, width, shape })}
      disabled={intent === 'disabled'}
      {...props}
    >
      {children}
    </motion.button>
  );
});
