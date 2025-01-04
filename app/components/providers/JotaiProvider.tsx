import { Provider } from 'jotai'

interface Props {
  children: React.ReactNode
}

export function JotaiProvider(props: Props) {
  return <Provider>{props.children}</Provider>
}
