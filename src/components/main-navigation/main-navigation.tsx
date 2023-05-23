import { FC } from 'react';
import { Logo } from '@/components/logo/logo';
import { CatalogMenu } from '@/components/catalog-menu/catalog-menu';
import { PersonalMenu } from '@/components/personal-menu/personal-menu';
import { LoginButton } from '@/components/login-button/login-button';
import { CartLink } from '@/components/cart-link/cart-link';

export const MainNavigation: FC = () => {
  return (
    <nav className="flex flex-wrap items-start justify-between py-7 px-0">
      <div className="medium:hidden">
        <Logo />
      </div>
      <CatalogMenu />
      <div className="flex gap-9">
        <PersonalMenu />
        <LoginButton />
        <CartLink />
      </div>
    </nav>
  );
};
