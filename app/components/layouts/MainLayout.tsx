import { Link } from '@remix-run/react'
import { routes } from '~/utils'

interface Props {
  children: React.ReactNode
}

export function MainLayout(props: Props) {
  return (
    <>
      <nav className="bg-blue-200">
        <ul className="flex gap-x-3 p-4">
          <li>
            <Link to={routes.input()}>入力</Link>
          </li>
          <li>
            <Link to={routes.calendar(new Date())}>カレンダー</Link>
          </li>
          <li>
            <Link to={routes.graph(new Date())}>グラフ</Link>
          </li>
          <li>
            <Link to={routes.settings()}>設定</Link>
          </li>
        </ul>
      </nav>

      {props.children}
    </>
  )
}
