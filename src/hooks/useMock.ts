import { useMemo } from 'react'

export const useMock = () => {
  const tokens: TToken[] = useMemo(() => {
    const tokens = []
    const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('')
    const getLetter = () => letters[Math.floor(Math.random() * letters.length)]
    while (tokens.length < 100) {
      tokens.push(`${getLetter()}${getLetter()}${getLetter()}`)
    }
    return tokens
  }, [])

  return { tokens }
}
