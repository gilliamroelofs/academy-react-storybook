import { PropsWithChildren, ReactElement } from 'react'

import css from './Card.module.scss'
import { WithDataTestId } from '@/types/data-test-id'

export type CardProps = PropsWithChildren<WithDataTestId>

export function Card({ children, 'data-testid': dataTestId }: CardProps): ReactElement {
  return (
    <div className={css.card} data-testid={dataTestId}>{children}</div>
  )
}
