import { act, renderHook } from '@testing-library/react'
import { useDisclosure } from './useDisclosure'

describe('useDisclosure', () => {
  test('初期値は false か', async () => {
    const { result } = renderHook(() => useDisclosure())

    expect(result.current.isOpen).toBe(false)
  })

  test('初期値を設定できるか', async () => {
    const { result } = renderHook(() => useDisclosure(true))

    expect(result.current.isOpen).toBe(true)
  })

  test('open 関数を呼び出すと isOpen が true になるか', async () => {
    const { result } = renderHook(() => useDisclosure())

    act(() => {
      result.current.open()
    });

    expect(result.current.isOpen).toBe(true)
  });

  test('close 関数を呼び出すと isOpen が false になるか', async () => {
    const { result } = renderHook(() => useDisclosure(true))

    act(() => {
      result.current.close()
    });

    expect(result.current.isOpen).toBe(false)
  });

  test('toggle 関数を呼び出すと isOpen の値が入れ替わるか', async () => {
    const { result } = renderHook(() => useDisclosure())

    act(() => {
      result.current.toggle()
    });

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggle()
    });

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggle()
    });

    expect(result.current.isOpen).toBe(true)
  });
})
