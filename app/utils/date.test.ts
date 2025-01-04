import { formatDate } from './date'

describe('date', () => {
  it('日付が正しくフォーマットされるか', () => {
    expect(formatDate(new Date('2025-1-4'), 'yyyy-MM-dd')).toBe('2025-01-04')
    expect(formatDate(new Date('2025-1-4'), 'yyyy/MM/dd')).toBe('2025/01/04')
    expect(formatDate(new Date('2025-1-4'), 'yyyy年MM月dd日')).toBe('2025年01月04日')
    expect(formatDate(new Date('2025-1-4'), 'yyyy年MM月dd日（E）')).toBe('2025年01月04日（土）')
  })
})
