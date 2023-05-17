import { FC } from 'react';
import { menuRoutes } from './socials.routes';

export const Socials: FC = () => {
  return (
    <ul className="flex flex-col gap-3">
      {menuRoutes.map(({ link, text }, index) => (
        <li key={index}>
          <a href={link}>{text}</a>
        </li>
      ))}
    </ul>
  );
};
