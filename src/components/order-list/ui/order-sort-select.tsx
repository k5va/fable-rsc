'use client';

import { FC } from 'react';
import { Sorting } from '@/types';
import { Select } from '@/components/ui/select/select';

type OrderSortSelectProps = {
  sorting: Sorting;
  onChange: (value: Sorting) => void;
};

export const OrderSortSelect: FC<OrderSortSelectProps> = ({
  sorting,
  onChange,
}) => {
  return (
    <div className="flex gap-2 text-2xl small:text-sm">
      Creation date:
      <Select
        value={sorting}
        onValueChange={(value) => onChange(value as Sorting)}
      >
        <Select.Menu>
          <Select.MenuItem value="desc">Descending</Select.MenuItem>
          <Select.MenuItem value="asc">Ascending</Select.MenuItem>
        </Select.Menu>
      </Select>
    </div>
  );
};
