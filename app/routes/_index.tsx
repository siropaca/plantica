import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' }, //
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="bg-blue-500 py-6 text-center">
      <h1 className="color-white text-4xl font-sans">Welcome to Remix</h1>
    </div>
  )
}
