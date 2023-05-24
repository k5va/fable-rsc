'use client';

import { InputHTMLAttributes, forwardRef, useId } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, checked, ...inputProps }, ref) {
    const id = useId();

    return (
      <div className="relative">
        <input
          ref={ref}
          className="absolute appearance-none"
          id={id}
          type="checkbox"
          {...inputProps}
        />
        <label className="flex cursor-pointer items-center gap-4" htmlFor={id}>
          <span
            role="presentation"
            aria-hidden
            className="flex h-4 w-4 items-center justify-center border border-solid border-primary"
          >
            {checked && 'X'}
          </span>
          {label}
        </label>
      </div>
    );
  }
);
