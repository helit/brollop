import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { TabsProvider } from './contexts/TabsContext';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7986cb',
    },
    secondary: {
      main: '#ffb300',
    },
  },
  typography: {
    fontSize: 18,
  },
});

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
  );
};

export default App;
