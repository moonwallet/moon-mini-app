import { useQuery } from '@tanstack/react-query'

import { useJsonResponse } from '../hooks'

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
