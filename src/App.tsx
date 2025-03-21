import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { TabsProvider } from './contexts/TabsContext'
import { createTheme, ThemeProvider } from '@mui/material'
import { amber, deepOrange } from '@mui/material/colors'
import { Start } from './pages/Start'
import { Application } from './pages/Application'
import { NotFound } from './pages/NotFound'

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
          <Router basename="/brollop/">
            <Route path="/" element={<Start />} />
            <Route path="/anmalan" element={<Application />} />
            <Route element={<NotFound />} />
          </Router>
        </TabsProvider>
      </ThemeProvider>
    </>
  )
}

export default App
