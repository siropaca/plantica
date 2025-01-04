import type { MetaFunction } from '@remix-run/node'
import { createPageTitle } from '~/utils'

export const meta: MetaFunction = () => {
  return [{ title: createPageTitle('グラフ') }]
}

export default function Graph() {
  return <div>グラフページ</div>
}
