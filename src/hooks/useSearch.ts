import { useMemo } from 'react'

export const useSearch = ({ search, tokens }: {
  search: string
  tokens: TToken[]
}) => {
  const tokensFiltered: TToken[] = useMemo(() => {
    return tokens.filter(token => token.toLowerCase().includes(search.trim().toLowerCase()))
  }, [tokens, search])

  const isNotFound = tokens.length > 0 && tokensFiltered.length === 0

  return { tokensFiltered, isNotFound }
}
