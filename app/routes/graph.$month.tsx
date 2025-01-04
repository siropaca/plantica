import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { createPageTitle, formatDate, isValidDate } from '~/utils'

export const meta: MetaFunction = () => {
  return [{ title: createPageTitle('グラフ') }]
}

export const loader = ({ params }: LoaderFunctionArgs) => {
  const month = params.month

  if (month === undefined) {
    throw new Response('Not Found', { status: 404 })
  }

  invariant(isValidDate(new Date(month)), 'Invalid date')

  return {
    month,
  }
}

export default function Graph() {
  const { month } = useLoaderData<typeof loader>()

  return (
    <div>
      <div>グラフページ</div>
      <div>{formatDate(new Date(month), 'yyyy年M月')}</div>
    </div>
  )
}
