import { format as _format } from 'date-fns'
import { ja } from 'date-fns/locale'

/**
 * 日付をフォーマットする
 */
export function formatDate(date: Date, format: string): string {
  return _format(date, format, { locale: ja })
}
