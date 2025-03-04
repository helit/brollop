import { useContext } from 'react';

import { DrawerContext } from '../contexts/DrawerContext';

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};
