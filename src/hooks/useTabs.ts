import { useContext } from 'react'

import { TabsContext } from '../contexts/TabsContext'

export const useTabs = () => {
  const context = useContext(TabsContext)
  if (context === undefined) {
    throw new Error('useTabs must be used within a TabsProvider')
  }
  return context
}
