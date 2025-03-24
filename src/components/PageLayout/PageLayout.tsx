import { ReactNode } from 'react';
import { PageLayoutWrapper } from './PageLayout.styled';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <PageLayoutWrapper>{children}</PageLayoutWrapper>;
};
