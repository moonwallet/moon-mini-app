import { useQuery } from '@tanstack/react-query'

import { useJsonResponse, useApiMock } from '../hooks'
import { TCandle, TToken } from '../types'

// const apiUrl = import.meta.env.VITE_API_URL

export const useGetSomething = () => {
  const { handleJsonResponse } = useJsonResponse()

  // const url = `${apiUrl}/v1/users/tickets-info`
  const url = 'https://jsonplaceholder.typicode.com/posts'

  return useQuery<{ id: number }[], Error>({
    queryKey: ['sometings'],
    queryFn: () => {
      return fetch(url, {
        method: 'GET',
        headers: {
          // 'Authorization': authString,
        }
      }).then(handleJsonResponse)
    },
    staleTime: 1000 * 40,
    refetchInterval: 1000 * 60,
    // enabled: ,
  })
}

export const useGetTokens = () => {
  const isMock = true
  const { handleJsonResponse } = useJsonResponse()
  const { mockTokens } = useApiMock()

  // const url = `${apiUrl}/v1/users/tickets-info`
  const url = 'https://jsonplaceholder.typicode.com/posts'

  return useQuery<TToken[], Error>({
    queryKey: ['tokens'],
    queryFn: isMock ? () => mockTokens : () => {
      return fetch(url, {
        method: 'GET',
        headers: {
          // 'Authorization': authString,
        }
      }).then(handleJsonResponse)
    },
    staleTime: Infinity,
    // refetchInterval: 1000 * 60,
    // enabled: ,
  })
}

export const useGetCandles = () => {
  const isMock = true
  const { handleJsonResponse } = useJsonResponse()
  const { mockCandles } = useApiMock()

  // const url = `${apiUrl}/v1/users/tickets-info`
  const url = 'https://jsonplaceholder.typicode.com/posts'

  return useQuery<TCandle[], Error>({
    queryKey: ['candles'],
    queryFn: isMock ? () => mockCandles : () => {
      return fetch(url, {
        method: 'GET',
        headers: {
          // 'Authorization': authString,
        }
      }).then(handleJsonResponse)
    },
    // staleTime: 1000 * 40,
    // refetchInterval: 1000 * 60,
    // enabled: ,
  })
}