import { JotaiProvider } from './JotaiProvider'
import { TanstackQueryProvider } from './TanstackQueryProvider'

interface Props {
  children: React.ReactNode
}

export function Providers(props: Props) {
  return (
    <TanstackQueryProvider>
      <JotaiProvider>{props.children}</JotaiProvider>
    </TanstackQueryProvider>
  )
}
