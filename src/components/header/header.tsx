import { FC } from 'react';
import { Container } from '@/components/container/container';
import { MainNavigation } from '@/components/main-navigation/main-navigation';

export const Header: FC = () => {
  return (
    <header className="bg-slate-50 sticky top-0 z-10">
      <Container>
        <MainNavigation />
      </Container>
    </header>
  );
};
