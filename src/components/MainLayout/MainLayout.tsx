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
    <div>
      <Background src={'./assets/background-3.jpg'} />
      <MainLayoutOuterWrapper>
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </MainLayoutOuterWrapper>
    </div>
  );
};
