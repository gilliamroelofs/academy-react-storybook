import type { MutableRefObject, RefObject } from 'react'
import { useCallback } from 'react'

type RefType<T> = RefObject<T> | MutableRefObject<T>
export function useScrollTo<T extends HTMLElement>(
  refOrCallback: RefType<T> | (() => RefType<T>)
): () => void {
  const scrollTo = useCallback(() => {
    const options: ScrollIntoViewOptions = { behavior: 'smooth' }
    if (typeof refOrCallback === 'function') {
      const ref = refOrCallback()
      ref.current?.scrollIntoView(options)
    } else {
      refOrCallback.current?.scrollIntoView(options)
    }
  }, [refOrCallback])

  return scrollTo
}
