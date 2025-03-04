import { ReactNode, createContext, useState } from 'react';

interface DrawerContextProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const contextValue: DrawerContextProps = {
    isOpen: open,
    open: () => setOpen(true),
    close: () => setOpen(false),
  };

  return <DrawerContext.Provider value={contextValue}>{children}</DrawerContext.Provider>;
};
