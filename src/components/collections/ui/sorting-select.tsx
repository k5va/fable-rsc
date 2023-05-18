'use client';

import { FC } from 'react';
import { ProductSortingType } from '@/types';
import { productSortingList } from '@/const';
import { Select } from '@/components';
import { useSorting } from '@/store';

export const SortingSelect: FC = () => {
  const [sorting, changeSorting] = useSorting((state) => [
    state.sorting,
    state.change,
  ]);

  return (
    <label className="flex flex-nowrap gap-2 text-2xl small:text-sm">
      Sort by
      <Select
        value={sorting}
        onValueChange={(value) => changeSorting(value as ProductSortingType)}
      >
        <Select.Menu>
          {productSortingList.map((value) => (
            <Select.MenuItem key={value} value={value}>
              {value}
            </Select.MenuItem>
          ))}
        </Select.Menu>
      </Select>
    </label>
  );
};
