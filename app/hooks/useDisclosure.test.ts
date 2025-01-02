import { act, renderHook } from '@testing-library/react'
import { useDisclosure } from './useDisclosure'

describe('useDisclosure', () => {
  it('デフォルトの状態 (false) で初期化されるか', () => {
    const { result } = renderHook(() => useDisclosure())

    expect(result.current.isOpen).toBe(false)
  })

  it('初期状態を設定できるか', () => {
    const { result } = renderHook(() => useDisclosure(true))

    expect(result.current.isOpen).toBe(true)
  })

  it('open が呼び出されると開くか', () => {
    const { result } = renderHook(() => useDisclosure())

    act(() => {
      result.current.open()
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('close が呼び出されると閉じるか', () => {
    const { result } = renderHook(() => useDisclosure(true))

    act(() => {
      result.current.close()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('toggle が呼び出されると状態が切り替わるか', () => {
    const { result } = renderHook(() => useDisclosure())

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(false)
  })
})
