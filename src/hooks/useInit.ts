import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useWallet } from '../hooks'

export const useInit = () => {
  const navigate = useNavigate()
  const routerLocation = useLocation()
  const { address } = useWallet()

  useEffect(() => {
    if (!address && !['/start', '/import', '/create'].includes(routerLocation.pathname)) {
      navigate('/start')
    }
  }, [routerLocation.pathname, address])
}
