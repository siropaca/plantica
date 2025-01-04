import type { MetaFunction } from '@remix-run/node'
import { createPageTitle } from '~/utils'

export const meta: MetaFunction = () => {
  return [{ title: createPageTitle('カレンダー') }]
}

export default function Calendar() {
  return <div>カレンダーページ</div>
}
