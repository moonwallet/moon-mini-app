import { useMemo } from 'react'

import { TToken, TCandle } from '../types'

export const useApiMock = () => {
  const mockTokens: TToken[] = useMemo(() => {
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
    tokens.unshift({
      address: 'SOL', // ?
      title: 'Solana',
      ticker: 'SOL',
      delta: 100 * Math.random() * (Math.random() > 0.5 ? 1 : -1),
      price: 154.37,
    })
    return tokens
  }, [])

  const time = useMemo(() => Math.floor(Date.now() / 1000) - 24 * 60 * 60, [])
  const mockCandles: TCandle[] = useMemo(() => ([
    { open: 10, high: 10.63, low: 9.49, close: 9.55, time: time },
    { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: time + 60 * 1 },
    { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: time + 60 * 2 },
    { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: time + 60 * 3 },
    { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: time + 60 * 4 },
    { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: time + 60 * 5 },
    { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: time + 60 * 6 },
    { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: time + 60 * 7 },
    { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: time + 60 * 8 },
    { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: time + 60 * 9 },
    { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: time + 60 * 10 },
  ]), [time])

  return { mockTokens, mockCandles }
}
