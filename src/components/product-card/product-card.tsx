'use client';

import { FC, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { AddToFavoritesButton } from '@/components/add-to-favorites-button/add-to-favorites-button';
import { Product } from '@/types';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, image } = product;
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 overflow-hidden rounded-md bg-gray-300 small:mb-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
          <Link href={`/product/${id}`}>
            <Image width="427" height="427" src={image.src} alt={name} />
          </Link>
        </motion.div>
      </div>
      <div
        className="
          mb-2 flex gap-3
          small:mb-0"
      >
        <h5
          className="
            text-lg font-normal opacity-40 
            small:text-xs"
        >
          {name}
        </h5>

        {session && (
          <Suspense>
            <AddToFavoritesButton product={product} />
          </Suspense>
        )}
      </div>
      <p className="text-2xl small:text-sm">price: {price}</p>
    </div>
  );
};
