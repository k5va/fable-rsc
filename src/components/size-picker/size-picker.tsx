import clsx from 'clsx';
import { PRODUCT_SIZES } from '../../const';
import { ProductSize } from '@/types';
import { FC } from 'react';

type SizePickerProps = {
  selected: string;
  onChange: (size: ProductSize) => void;
};

export const SizePicker: FC<SizePickerProps> = ({ selected, onChange }) => {
  return (
    <fieldset
      className="relative flex flex-nowrap gap-8"
      aria-label="Select product size"
    >
      <legend
        className="
          hidden
          small:mx-auto small:mt-0 small:mb-4 small:block small:text-base small:font-normal"
      >
        Size
      </legend>
      {PRODUCT_SIZES.map((size) => (
        <div key={size}>
          <input
            className={`absolute appearance-none`}
            id={size}
            name="size"
            type="radio"
            value={size}
            checked={selected === size}
            onChange={() => onChange(size)}
          />
          <label
            className={clsx(
              'flex h-12 w-12 cursor-pointer items-center justify-center border-2 border-solid border-[#f1f1ef] text-xl font-normal',
              'small:h-10 small:w-10',
              {
                'border-2 border-solid border-primary': size === selected,
              }
            )}
            htmlFor={size}
          >
            {size}
          </label>
        </div>
      ))}
    </fieldset>
  );
};
