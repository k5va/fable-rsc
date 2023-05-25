'use client';

import { FC } from 'react';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';

export const PromocodeForm: FC = () => {
  return (
    <form
      className="
        grid grid-cols-[1fr,auto] gap-4 
        small:grid-cols-1"
      onSubmit={(e) => e.preventDefault()}
    >
      <TextField name="promoCode" />
      <Button intent="secondary" width="full" type="submit">
        Apply
      </Button>
    </form>
  );
};
