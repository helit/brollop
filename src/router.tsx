import { RouteObject } from 'react-router-dom';
import { Start } from './pages/Start';
import { Application } from './pages/Application';
import App from './App';
import { NotFound } from './pages/NotFound';
import { ThankYou } from './pages/ThankYou';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: '/anmalan',
        element: <Application />,
      },
      {
        path: '/thank-you',
        element: <ThankYou />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
