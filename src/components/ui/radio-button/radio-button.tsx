'use client';

import { forwardRef, InputHTMLAttributes, useId } from 'react';
import clsx from 'clsx';

type RadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton({ label, ...inputProps }, ref) {
    const id = useId();

    return (
      <div className="relative w-full">
        <input
          id={id}
          className="peer absolute appearance-none"
          ref={ref}
          type="radio"
          {...inputProps}
        />
        <label
          className={clsx(
            'block cursor-pointer self-auto border border-solid border-primary bg-secondary px-0 py-2 text-center text-xl text-primary',
            'peer-checked:bg-primary peer-checked:text-secondary'
          )}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }
);
