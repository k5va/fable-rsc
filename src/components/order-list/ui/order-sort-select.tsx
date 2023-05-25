'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Sorting } from '@/types';
import { Select } from '@/components/ui/select/select';
import { AppRoute } from '@/const';

type OrderSortSelectProps = {
  sorting: Sorting;
};

export const OrderSortSelect: FC<OrderSortSelectProps> = ({ sorting }) => {
  const router = useRouter();

  return (
    <div className="flex gap-2 text-2xl small:text-sm">
      Creation date:
      <Select
        value={sorting}
        onValueChange={(value) =>
          router.push(`${AppRoute.PERSONAL}?sort=${value}`)
        }
      >
        <Select.Menu>
          <Select.MenuItem value="desc">Descending</Select.MenuItem>
          <Select.MenuItem value="asc">Ascending</Select.MenuItem>
        </Select.Menu>
      </Select>
    </div>
  );
};
