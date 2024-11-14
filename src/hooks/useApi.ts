import { useQuery } from '@tanstack/react-query'

import { useJsonResponse, useApiMock, useAuth } from '../hooks'
import { TCandle, TMe, TTask, TToken } from '../types'

import hi from '../assets/hi.png'

const apiUrl = import.meta.env.VITE_API_URL // todo: set

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

export const useGetMe = () => {
  // const { handleJsonResponse } = useJsonResponse()

  // const url = `${apiUrl}/v1/users/tickets-info`
  // const url = 'https://jsonplaceholder.typicode.com/posts'

  return useQuery<TMe, Error>({
    queryKey: ['me'],
    queryFn: () => ({
      // id: TUserId
      // username: string | null
      // first_name: string | null
      // last_name: string | null
      ref: {
        code: 'ABCDEF',
        count: 0,
        points: 0,
      },
      total_points: 0
    })/*() => {
      return fetch(url, {
        method: 'GET',
        headers: {
          // 'Authorization': authString,
        }
      }).then(handleJsonResponse)
    },*/
  })
}

export const useGetPoints = () => {
  return useQuery<{ invite: number }, Error>({
    queryKey: ['points'],
    queryFn: () => ({
      invite: 500,
    })
  })
}

export const useGetTasks = () => {
  const { handleJsonResponse } = useJsonResponse()
  const { authString, userId } = useAuth()

  const url = `${apiUrl}/tasks?${new URLSearchParams({
    // lang: i18n.language,
    auth: encodeURIComponent(authString) || '',
  })}`

  const { data: points } = useGetPoints()

  console.log('points?.invite', points?.invite)

  return useQuery<TTask[], Error>({
    queryKey: [`tasks-${userId}-${JSON.stringify(points)}`], // todo: remove json
    queryFn: Math.random() > 0
      ? () => {
        const task: TTask = {
          id: 1,
          name: 'Invite friends',
          description: `+${points?.invite || ''} points for 1 invite`,
          position_order: 1,
          points: 500,
          cta: 'Invite',
          target_url: null,
          is_completed: false,
          claimable: false,
          is_partner: false,
          image_url: hi,
        }
        return [task]
      }
      : () => fetch(url, {
        method: 'GET',
      }).then(handleJsonResponse),
    // enabled: !!authString, // todo: enable!
  })
}


export const usePostTask = () => {
  const { handleJsonResponse } = useJsonResponse()
  const { authString } = useAuth()

  return ({ taskId }: {
    taskId: number
  }): Promise<unknown> => {
    const url = `${apiUrl}/tasks/${taskId}?${new URLSearchParams({
      auth: encodeURIComponent(authString) || '',
    })}`

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        // 'Authorization': authString,
      },
      // body: JSON.stringify({ }),
    }).then(handleJsonResponse)
  }
}
