import { createHashRouter } from 'react-router-dom'

import Setup from './pages/Setup'
import Import from './pages/Import'
import Create from './pages/Create'

export const router = createHashRouter([
  {
    path: "/",
    element: <Setup />,
    errorElement: <Setup />,
  },
  {
    path: "*",
    element: <Import />,
  },
  {
    path: "/create",
    element: <Create />,
  },
])
