import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { useDehydratedState } from 'use-dehydrated-state'

interface Props {
  children: React.ReactNode
}

export function TanstackQueryProvider(props: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // クライアントですぐにリフェッチされるのを避けるため、デフォルトの staleTime を 0 以上に設定する。
            staleTime: 60 * 1000,
          },
        },
      }),
  )

  const dehydratedState = useDehydratedState()

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{props.children}</HydrationBoundary>
    </QueryClientProvider>
  )
}
