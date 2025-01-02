import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import reset from '@unocss/reset/tailwind.css?url'
import unocss from '~/styles/uno.css?url'
import '~/styles/index.css'
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useState } from 'react'
import { useDehydratedState } from 'use-dehydrated-state'

export const meta: MetaFunction = () => [{ title: 'Plantica' }]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: reset },
  { rel: 'stylesheet', href: unocss },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
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
      <HydrationBoundary state={dehydratedState}>
        <Outlet />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
