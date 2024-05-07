import { PropsWithChildren, ReactElement } from 'react'
import { WithDataTestId } from '@/types/data-test-id'

import css from './Container.module.scss'

export type ContainerProps = PropsWithChildren<WithDataTestId>

export function Container({
  children,
  'data-testid': dataTestId,
}: ContainerProps): ReactElement | null {
  return (
    <div data-testid={dataTestId} className={css.container}>
      {children}
    </div>
  )
}
