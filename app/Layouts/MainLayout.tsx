import { Link } from '@remix-run/react'
import { routes } from '~/utils/routes'

interface Props {
  children: React.ReactNode
}

export function MainLayout(props: Props) {
  return (
    <>
      <nav className="bg-blue-200">
        <ul className="flex gap-x-3 p-4">
          <li>
            <Link to={routes.input()}>入力ページ</Link>
          </li>
          <li>
            <Link to={routes.calendar(new Date())}>カレンダーページ</Link>
          </li>
          <li>
            <Link to={routes.graph(new Date())}>グラフページ</Link>
          </li>
          <li>
            <Link to={routes.settings()}>設定ページ</Link>
          </li>
        </ul>
      </nav>

      {props.children}
    </>
  )
}
