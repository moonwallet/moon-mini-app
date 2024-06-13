import { useMemo } from 'react'

import { TToken } from '../types'

export const useMock = () => {
  const tokens: TToken[] = useMemo(() => {
    const tokens: TToken[] = []
    const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('')
    const getLetter = () => letters[Math.floor(Math.random() * letters.length)]
    while (tokens.length < 100) {
      tokens.push({
        title: `${getLetter()}${getLetter()}${getLetter()}`,
        address: `${getLetter()}${getLetter()}${getLetter()}`,
        delta: 100 * Math.random() * (Math.random() > 0.5 ? 1 : -1),
        price: Math.random() * 100,
      })
    }
    return tokens
  }, [])

  return { tokens }
}
