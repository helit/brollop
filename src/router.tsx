import { RouteObject } from 'react-router-dom'
import { Start } from './pages/Start'
import { Application } from './pages/Application'
import App from './App'

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
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]

export default routes
