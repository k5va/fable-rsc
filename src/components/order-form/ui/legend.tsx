import React, { FC } from 'react';

type LegendProps = {
  text: string;
};

export const Legend: FC<LegendProps> = ({ text }) => (
  <legend className="mb-5 text-xl font-medium">{text}</legend>
);
