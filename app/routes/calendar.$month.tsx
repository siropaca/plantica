import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { supabase } from '~/libs'
import { createPageTitle, formatDate } from '~/utils'
import { isValidDate } from '~/utils'

export const meta: MetaFunction = () => {
  return [{ title: createPageTitle('カレンダー') }]
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { data, error } = await supabase.from('test').select('*')
  if (error) {
    console.error('error', error)
  } else {
    console.log('data', data)
  }

  const month = params.month

  if (month === undefined) {
    throw new Response('Not Found', { status: 404 })
  }

  invariant(isValidDate(new Date(month)), 'Invalid date')

  return {
    month,
  }
}

export default function Calendar() {
  const { month } = useLoaderData<typeof loader>()

  return (
    <div>
      <div>カレンダーページ</div>
      <div>{formatDate(new Date(month), 'yyyy年M月')}</div>
    </div>
  )
}
