import { useMemo } from 'react'

import { TToken } from '../types'

export const useMock = () => {
  const tokens: TToken[] = useMemo(() => {
    const tokens: TToken[] = []
    const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('')
    const getLetter = () => letters[Math.floor(Math.random() * letters.length)]
    while (tokens.length < 100) {
      const ticker = `${getLetter()}${getLetter()}${getLetter()}`
      tokens.push({
        address: ticker,
        title: ticker + 'Token',
        ticker: ticker,
        delta: 100 * Math.random() * (Math.random() > 0.5 ? 1 : -1),
        price: Math.random() * 100,
      })
    }
    return tokens
  }, [])

  return { tokens }
}
