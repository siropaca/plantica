import { APP_NAME } from '~/configs'

export function createPageTitle(pageTitle?: string) {
  return pageTitle ? `${pageTitle} | ${APP_NAME}` : APP_NAME
}

// --------------------------------------------------------------------
// Tests
// --------------------------------------------------------------------

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('ページタイトルが指定されている場合、正しく返すか', () => {
    expect(createPageTitle('Input')).toBe('Input | Plantica')
  })

  it('ページタイトルが指定されていない場合、正しく返すか', () => {
    expect(createPageTitle()).toBe('Plantica')
  })
}
