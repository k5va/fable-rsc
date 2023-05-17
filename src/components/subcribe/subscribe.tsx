import { FC } from 'react';
import { Button, TextField } from '@/components';

export const Subscribe: FC = () => {
  return (
    <div>
      <p className="mb-3">Discount</p>
      <form className="grid grid-cols-[2fr,1fr] gap-x-4 small:grid-cols-1">
        <div className="small:mb-4">
          <TextField
            intent="secondary"
            type="email"
            name="email"
            placeholder="mail@test.com"
          />
        </div>
        <Button width="full" type="submit">
          Subscribe
        </Button>
      </form>
    </div>
  );
};
