import { format as _format, isValid } from 'date-fns'
import { ja } from 'date-fns/locale'

/**
 * 日付をフォーマットする
 */
export function formatDate(date: Date, format: string): string {
  return _format(date, format, { locale: ja })
}

/**
 * 正しい日付かどうかを判定する
 */
export function isValidDate(date: Date): boolean {
  return isValid(date)
}
