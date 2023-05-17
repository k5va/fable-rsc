import Link from 'next/link';
import { menuRoutes } from './site-menu.routes';
import { FC } from 'react';

export const SiteMenu: FC = () => {
  return (
    <ul
      className="
          grid grid-cols-2 gap-3 text-inherit 
          medium:gap-y-3 medium:gap-x-2"
    >
      {menuRoutes.map(({ link, text }, index) => (
        <li key={index}>
          <Link href={link}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};
