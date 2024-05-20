import { createHashRouter } from 'react-router-dom'

import Start from './pages/Start'
import Import from './pages/Import'
import Create from './pages/Create'

export const router = createHashRouter([
  {
    path: "/",
    element: <Start />,
    errorElement: <Start />,
  },
  {
    path: "*",
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
