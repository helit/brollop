import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tabs } from '../consts/tabs'

interface TabsContextProps {
  activeTab: number
  setActiveTab: (tab: number) => void
}

export const TabsContext = createContext<TabsContextProps | undefined>(
  undefined
)

export const TabsProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  const handleNavigate = (tab: number) => {
    setActiveTab(tab)
    const path = tabs[tab].value === 'start' ? '/' : `/${tabs[tab].value}`

    navigate(path)
  }

  const contextValue: TabsContextProps = {
    activeTab: activeTab,
    setActiveTab: handleNavigate,
  }

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  )
}
