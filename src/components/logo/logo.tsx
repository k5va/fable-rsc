'use client';

import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LogoSVG from './logo.svg';

export const Logo: FC = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
      <Link href="/">
        <LogoSVG title="Fable store" />
      </Link>
    </motion.div>
  );
};
