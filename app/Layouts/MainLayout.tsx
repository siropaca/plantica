import { Link } from '@remix-run/react'

interface Props {
  children: React.ReactNode
}

export function MainLayout(props: Props) {
  return (
    <>
      <nav className="bg-blue-200">
        <ul className="flex gap-x-3 p-4">
          <li>
            <Link to="/input">入力ページ</Link>
          </li>
          <li>
            <Link to="/calendar">カレンダーページ</Link>
          </li>
          <li>
            <Link to="/graph">グラフページ</Link>
          </li>
          <li>
            <Link to="/settings">設定ページ</Link>
          </li>
        </ul>
      </nav>

      {props.children}
    </>
  )
}
