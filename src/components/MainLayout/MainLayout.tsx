import { ReactNode } from 'react';
import { Background, MainLayoutWrapper } from './MainLayout.styled';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Background>
      <MainLayoutWrapper>{children}</MainLayoutWrapper>
    </Background>
  );
};
