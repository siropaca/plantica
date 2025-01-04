import type { MetaFunction } from '@remix-run/node'
import { createPageTitle } from '~/utils'

export const meta: MetaFunction = () => {
  return [{ title: createPageTitle('設定') }]
}

export default function Settings() {
  return <div>設定ページ</div>
}
