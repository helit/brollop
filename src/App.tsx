import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { TabsProvider } from './contexts/TabsContext';
import { createTheme, ThemeProvider } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: '#ffb300',
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
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
