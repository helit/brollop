import { ReactNode } from 'react';
import {
  Background,
  MainLayoutOuterWrapper,
  MainLayoutWrapper,
} from './MainLayout.styled';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Background>
      <MainLayoutOuterWrapper>
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </MainLayoutOuterWrapper>
    </Background>
  );
};
