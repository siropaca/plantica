import type { MetaFunction } from '@remix-run/node'

import { useQuery } from '@tanstack/react-query'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' }, //
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/TanStack/query')
      return await response.json()
    },
  })

  if (isPending) return 'Loading...'

  if (error) return `'An error has occurred: '${error.message}`

  return (
    <div className="bg-blue-500 py-6 text-center">
      <h1 className="color-white text-4xl font-sans">Welcome to Remix</h1>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  )
}
