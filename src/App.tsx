import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { DrawerProvider } from './contexts/DrawerContext';
import { Drawer } from './components/Drawer/Drawer';
export const App = () => {
  return (
    <>
      <DrawerProvider>
        <Header />
        <Outlet />
        <Drawer />
      </DrawerProvider>
    </>
  );
}

export default App;
