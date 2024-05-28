import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useWallet } from '../hooks'

export const useInit = () => {
  const navigate = useNavigate()
  const routerLocation = useLocation()
  const { address } = useWallet()

  const startPaths = ['/start', '/import', '/create']

  useEffect(() => {
    if (!address && !startPaths.includes(routerLocation.pathname)) {
      navigate('/start')
    }
  }, [routerLocation.pathname, address])
}
