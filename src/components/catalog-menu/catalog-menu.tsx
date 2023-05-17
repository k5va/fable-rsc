'use client';

import Link from 'next/link';
import { FC, useState } from 'react';
import { clsx } from 'clsx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { menuRoutes } from './catalog-menu.routes';
import { motion } from 'framer-motion';

export const CatalogMenu: FC = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="font-medium uppercase">
      <button
        className="hidden uppercase small:flex small:items-center"
        onClick={() => setShowMobile((showMobile) => !showMobile)}
      >
        <GiHamburgerMenu
          className={clsx('text-2xl transition', {
            'rotate-90': showMobile,
          })}
        />
      </button>
      <ul
        className={clsx(
          'flex flex-wrap gap-9',
          'small:relative small:top-4 small:flex-col small:gap-1 small:normal-case',
          {
            'small:hidden': !showMobile,
          }
        )}
      >
        {menuRoutes.map(({ link, text }, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            key={index}
          >
            <Link href={link}>{text}</Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
