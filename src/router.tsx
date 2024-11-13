import { createHashRouter } from 'react-router-dom'

import { Start, Import, Create, Home, Market, Watchlist, History, Asset, Send, Swap, Receive, Settings, Phrase, Points } from './pages'

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "*",
    element: <Home />,
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
  {
    path: "/market",
    element: <Market />,
  },
  {
    path: "/watchlist",
    element: <Watchlist />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/asset",
    element: <Asset />,
  },
  {
    path: "/send",
    element: <Send />,
  },
  {
    path: "/swap",
    element: <Swap />,
  },
  {
    path: "/receive",
    element: <Receive />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/phrase",
    element: <Phrase />,
  },
  {
    path: "/points",
    element: <Points />,
  },
])
