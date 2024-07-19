import cx from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from '../kit'

import { ReactComponent as WalletIcon } from '../assets/menu-wallet.svg'
import { ReactComponent as MarketIcon } from '../assets/menu-market.svg'
import { ReactComponent as WatchlistIcon } from '../assets/menu-watchlist.svg'
import { ReactComponent as HistoryIcon } from '../assets/menu-history.svg'

export const Menu = () => {
  const navigate = useNavigate()
  const routerLocation = useLocation()

  const items = [
    {
      title: 'Wallet',
      icon: WalletIcon,
      onClick: () => { navigate('/') },
      isActive: routerLocation.pathname === '/',
    },
    {
      title: 'Market',
      icon: MarketIcon,
      onClick: () => { navigate('/market') },
      isActive: routerLocation.pathname === '/market',
    },
    {
      title: 'Watchlist',
      icon: WatchlistIcon,
      onClick: () => { navigate('/watchlist') },
      isActive: routerLocation.pathname === '/watchlist',
    },
    {
      title: 'History',
      icon: HistoryIcon,
      onClick: () => { navigate('/history') },
      isActive: routerLocation.pathname === '/history',
    },
  ]
  return (
    <div className="Menu sticky bottom-0 flex items-center">
      {items.map(item => (
        <Button
          key={item.title}
          wrapperClassName="flex-grow basis-0"
          className={cx(
            'h-[50px] flex flex-col items-center justify-center transition-all',
            item.isActive ? 'text-main' : 'text-text/[48%] hover:text-text/[80%] active:text-text'
          )}
          onClick={item.onClick}
        >
          <item.icon className="w-10 h-8" />
          <span className="text-[12px] font-medium">{item.title}</span>
        </Button>
      ))}
    </div>
  )
}
