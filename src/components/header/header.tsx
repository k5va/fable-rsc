import { FC } from 'react';
import { Container, MainNavigation } from '@/components';

export const Header: FC = () => {
  return (
    <header className="bg-slate-50 sticky top-0 z-10">
      <Container>
        <MainNavigation />
      </Container>
    </header>
  );
};
