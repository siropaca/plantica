import { formatDate } from '~/utils/date'

export const routes = {
  index: () => '/',

  input: () => '/input',

  calendar: (date: Date) => {
    const month = formatDate(date, 'yyyy-MM')

    return `/calendar/${month}`
  },

  graph: (date: Date) => {
    const month = formatDate(date, 'yyyy-MM')

    return `/graph/${month}`
  },

  settings: () => '/settings',
}
