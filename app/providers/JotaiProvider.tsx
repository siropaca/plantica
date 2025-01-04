import { Provider } from 'jotai'

interface Props {
  children: React.ReactNode
}

export function JotaiProvider({ children }: Props) {
  return <Provider>{children}</Provider>
}
