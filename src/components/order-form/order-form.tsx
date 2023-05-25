'use client';

import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSubmitOrder } from '@/hooks/use-submit-order';
import { CreateOrder } from '@/types';
import { createOrderSchema } from '@/schema';
import { Legend } from './ui/legend';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';
import { RadioButton } from '@/components/ui/radio-button/radio-button';
import { TextArea } from '@/components/ui/text-area/text-area';
import { Checkbox } from '@/components/ui/checkbox/checkbox';

const orderFormDefaults: CreateOrder = {
  city: '',
  delivery: 'toDoor',
  address: '',
  loyaltyCard: '',
  name: '',
  phone: '',
  email: '',
  payment: 'card',
  comment: '',
  productOrders: [],
};

export const OrderForm: FC = () => {
  const [isAgreeOnTerms, setAgreeOnTerms] = useState(false);
  const methods = useForm<CreateOrder>({
    defaultValues: orderFormDefaults,
    resolver: zodResolver(createOrderSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const submitOrder = useSubmitOrder();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(submitOrder)}
        className="flex flex-col gap-4"
      >
        {/* City */}
        <fieldset
          className="
            w-[calc(50%-0.5rem)] 
            small:w-full"
        >
          <Legend text="City" />
          <TextField error={errors.city?.message} />
        </fieldset>

        {/* Delivery */}
        <fieldset
          className="
            flex flex-nowrap gap-4 
            small:flex-wrap"
        >
          <Legend text="Delivery" />
          <RadioButton
            label="inStore"
            value="inStore"
            {...register('delivery')}
          />
          <RadioButton
            label="toTheDoor"
            value="toDoor"
            {...register('delivery')}
          />
        </fieldset>

        {/* Address */}
        <fieldset>
          <Legend text="Address" />
          <TextField {...register('address')} error={errors.address?.message} />
        </fieldset>

        {/* Loyalty */}
        <fieldset
          className="
            w-[calc(50%-0.5rem)] 
            small:w-full"
        >
          <Legend text="Point" />
          <TextField
            label="Loyalty"
            {...register('loyaltyCard')}
            error={errors.loyaltyCard?.message}
          />
        </fieldset>

        {/* recipient */}
        <fieldset className="flex flex-col flex-nowrap gap-2">
          <Legend text="Recipient" />
          <TextField
            label="Name"
            {...register('name')}
            error={errors.name?.message}
          />
          <TextField
            label="Phone"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
          />
          <TextField
            label="Email"
            {...register('email')}
            error={errors.email?.message}
          />
        </fieldset>

        <fieldset>
          <Legend text="Payment" />
          <RadioButton label="byCard" value="card" {...register('payment')} />
        </fieldset>

        <fieldset>
          <Legend text="Comment" />
          <TextArea {...register('comment')} error={errors.comment?.message} />
        </fieldset>
        <Checkbox
          label="AgreeWithTerms"
          checked={isAgreeOnTerms}
          onChange={() => setAgreeOnTerms((value) => !value)}
        />
        <Button
          intent={isAgreeOnTerms ? 'secondary' : 'disabled'}
          width="full"
          type="submit"
        >
          Submit order
        </Button>
      </form>
    </FormProvider>
  );
};
