import { routes } from './routes'

describe('routes', () => {
  describe('index', () => {
    it('インデックスページのパスが返るか', () => {
      expect(routes.index()).toBe('/')
    })
  })

  describe('input', () => {
    it('入力ページのパスが返るか', () => {
      expect(routes.input()).toBe('/input')
    })
  })

  describe('calendar', () => {
    it('カレンダーページのパスが返るか', () => {
      expect(routes.calendar(new Date('2025-1-4'))).toBe('/calendar/2025-01')
    })
  })

  describe('graph', () => {
    it('グラフページのパスが返るか', () => {
      expect(routes.graph(new Date('2025-1-4'))).toBe('/graph/2025-01')
    })
  })

  describe('settings', () => {
    it('設定ページのパスが返るか', () => {
      expect(routes.settings()).toBe('/settings')
    })
  })
})
