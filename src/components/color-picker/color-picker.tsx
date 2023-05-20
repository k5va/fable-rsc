import { PRODUCT_COLORS } from '@/const';
import { ProductColor } from '@/types';
import clsx from 'clsx';
import { FC } from 'react';

type ColorPickerProps = {
  selected: string;
  onChange: (color: ProductColor) => void;
};

export const ColorPicker: FC<ColorPickerProps> = ({ selected, onChange }) => {
  return (
    <fieldset
      className="
        relative flex flex-nowrap gap-8
        small:gap-5"
      aria-label="Select product color"
    >
      <legend
        className="
          hidden
          small:mx-auto small:mt-0 small:mb-4 small:block small:text-base small:font-normal"
      >
        Color
      </legend>
      {PRODUCT_COLORS.map((color) => (
        <div key={color}>
          <input
            className="absolute appearance-none"
            id={color}
            name="color"
            type="radio"
            value={color}
            checked={color === selected}
            onChange={() => onChange(color)}
          />
          <label
            className={clsx(
              'block h-10 w-10 cursor-pointer',
              'small:h-5 small:w-5',
              { 'border-2 border-solid border-primary': color === selected }
            )}
            htmlFor={color}
            style={{ backgroundColor: color }}
          >
            <span className="sr-only">color</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};
