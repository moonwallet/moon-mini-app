import { createHashRouter } from 'react-router-dom'

import Start from './pages/Start'
import Import from './pages/Import'
import Create from './pages/Create'
import Wallet from './pages/Wallet'

export const router = createHashRouter([
  {
    path: "/",
    element: <Wallet />,
    errorElement: <Wallet />,
  },
  {
    path: "*",
    element: <Wallet />,
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/import",
    element: <Import />,
  },
  {
    path: "/create",
    element: <Create />,
  },
])
