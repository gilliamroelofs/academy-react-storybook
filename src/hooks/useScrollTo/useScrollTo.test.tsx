import type { RefObject } from 'react'
import { createRef } from 'react'
import { act, renderHook } from '@testing-library/react'

import { useScrollTo } from './useScrollTo'

describe('useScrollTo', () => {
  it('should ignore empty reference', () => {
    const ref = createRef<HTMLElement>()

    const { result } = renderHook(() => useScrollTo(ref))

    // Act
    act(() => {
      const scrollToCallback = result.current

      scrollToCallback()

      expect(scrollToCallback).toBeTruthy()
    })
  })

  it('should use scrollIntoView of referenced element', () => {
    const ref = {
      current: {
        scrollIntoView: jest.fn(),
      },
    }

    const { result } = renderHook(() => useScrollTo(ref as unknown as RefObject<HTMLElement>))

    act(() => {
      const scrollToCallback = result.current

      scrollToCallback()

      expect(ref.current.scrollIntoView).toHaveBeenCalledTimes(1)
    })
  })

  it('should use scrollIntoView of referenced element from callback', () => {
    const ref = {
      current: {
        scrollIntoView: jest.fn(),
      },
    }

    const { result } = renderHook(() => useScrollTo(() => ref as unknown as RefObject<HTMLElement>))

    act(() => {
      const scrollToCallback = result.current

      scrollToCallback()

      expect(ref.current.scrollIntoView).toHaveBeenCalledTimes(1)
    })
  })
})
