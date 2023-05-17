import { FC } from 'react';
import { Container, MainNavigation } from '@/components';

export const Header: FC = () => {
  return (
    <header>
      <Container>
        <MainNavigation />
      </Container>
    </header>
  );
};
