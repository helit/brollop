import { ReactNode, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tabs } from '../consts/tabs';

interface TabsContextProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
}

export const TabsContext = createContext<TabsContextProps | undefined>(
  undefined
);

export const TabsProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('sv');

  const handleNavigate = (tab: number) => {
    setActiveTab(tab);
    const path = tabs[tab].value === 'start' ? '/' : `/${tabs[tab].value}`;

    navigate(path);
  };

  const contextValue: TabsContextProps = {
    activeTab: activeTab,
    setActiveTab: handleNavigate,
    currentLanguage: currentLanguage,
    setCurrentLanguage,
  };

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};
