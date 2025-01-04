import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import reset from '@unocss/reset/tailwind.css?url'
import unocss from '~/styles/uno.css?url'
import '~/styles/index.css'
import { Providers } from '~/providers'

export const meta: MetaFunction = () => [{ title: 'Plantica' }]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: reset },
  { rel: 'stylesheet', href: unocss },
]

export default function App() {
  return (
    <Providers>
      <html lang="ja">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>

        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </Providers>
  )
}
