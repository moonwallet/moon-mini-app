import { createHashRouter } from 'react-router-dom'

import Start from './pages/Start'
import Import from './pages/Import'
import Create from './pages/Create'

import Wallet from './pages/Wallet'
import Market from './pages/Market'
import Watchlist from './pages/Watchlist'
import History from './pages/History'
import Asset from './pages/Asset'

import Send from './pages/Send'
import Swap from './pages/Swap'
import Receive from './pages/Receive'

import Settings from './pages/Settings'
import Phrase from './pages/Phrase'
import Invite from './pages/Invite'

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
    path: "/invite",
    element: <Invite />,
  },
])
