'use client';

import React, { FC, FormEventHandler, useState } from 'react';
import { Button, ColorPicker, SizePicker } from '@/components';
import { Product, ProductColor, ProductSize } from '@/types';
import {
  DEFAULT_PRODUCT_COLOR,
  DEFAULT_PRODUCT_ORDER_COUNT,
  DEFAULT_PRODUCT_SIZE,
} from './add-to-cart-form.const';
import { AppRoute } from '@/const';
import { useAddToCart } from './hooks/use-add-to-cart';
import { useRouter } from 'next/navigation';
//import { useSession } from "next-auth/react";

export type AddToCartFormProps = {
  product: Product;
};

export const AddToCartForm: FC<AddToCartFormProps> = ({ product }) => {
  const { id: productId, name, price } = product;
  const router = useRouter();
  const [size, setSize] = useState<ProductSize>(DEFAULT_PRODUCT_SIZE);
  const [color, setColor] = useState<ProductColor>(DEFAULT_PRODUCT_COLOR);
  const [isAddedToCart, addProductToOrder] = useAddToCart(productId);
  //const { data: session } = useSession();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addProductToOrder({
      productId,
      size,
      color,
      count: DEFAULT_PRODUCT_ORDER_COUNT,
    });
    return router.push(AppRoute.ORDER);
  };

  return (
    <div
      className="
        flex flex-col flex-nowrap 
        medium:items-center
        "
    >
      <div
        className="
          mb-8 flex gap-5 text-3xl
          medium:mb-1 medium:opacity-40
          small:text-xs"
      >
        <p>{name}</p>
        {/* {session && <AddToFavoritesButton product={product} />} */}
      </div>
      <p
        className="
          mb-8 text-3xl
          small:mb-4 small:text-base"
      >
        {price}
      </p>
      <form
        className="
          flex flex-col flex-nowrap gap-8 
          medium:items-center"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="productId" value={product.id} />
        <input type="hidden" name="count" value={DEFAULT_PRODUCT_ORDER_COUNT} />
        <div>
          <ColorPicker selected={color} onChange={setColor} />
        </div>
        <div className="medium:order-first">
          <SizePicker selected={size} onChange={setSize} />
        </div>
        <Button type="submit" intent={isAddedToCart ? 'disabled' : 'secondary'}>
          {isAddedToCart ? 'Go to cart' : 'Add to cart'}
        </Button>
      </form>
    </div>
  );
};
