import { FC } from 'react';
import { motion } from 'framer-motion';
import { CarouselButtonProps } from '../types';

export const CarouselButton: FC<CarouselButtonProps> = ({
  label,
  onClick,
  children,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ opacity: [1, 0.2, 1] }}
      className="
        flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-secondary
        small:h-6 small:w-6
      "
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
