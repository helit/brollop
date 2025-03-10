import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { TabsProvider } from './contexts/TabsContext'
import { createTheme, ThemeProvider } from '@mui/material'
import { amber, deepOrange } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: amber,
    secondary: deepOrange,
  },
})

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TabsProvider>
          <Header />
          <Outlet />
        </TabsProvider>
      </ThemeProvider>
    </>
  )
}

export default App
