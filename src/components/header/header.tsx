import { FC } from 'react';
import { Container, MainNavigation } from '@/components';

export const Header: FC = () => {
  return (
    <header className="bg-slate-50">
      <Container>
        <MainNavigation />
      </Container>
    </header>
  );
};
