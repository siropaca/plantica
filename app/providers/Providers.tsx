import { TanstackQueryProvider } from './TanstackQueryProvider'

interface Props {
  children: React.ReactNode
}

export function Providers(props: Props) {
  return <TanstackQueryProvider>{props.children}</TanstackQueryProvider>
}
