import type { MetaFunction } from '@remix-run/node'
import { createPageTitle } from '~/utils'

export const meta: MetaFunction = () => {
  return [{ title: createPageTitle('入力') }]
}

export default function Input() {
  return <div>入力ページ</div>
}
