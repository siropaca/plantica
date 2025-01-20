import { redirect } from '@remix-run/node'
import { routes } from '~/utils'

export const loader = async () => {
  return redirect(routes.input())
}
