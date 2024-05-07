import { PropsWithChildren, ReactElement } from 'react'
import css from './Card.module.scss'
import { WithDataTestId } from '@/types/data-test-id'

export type CardActionsProps = PropsWithChildren<WithDataTestId>

export function CardActions({ children, 'data-testid': dataTestId }: CardActionsProps): ReactElement {
  return (
    <div className={css.actions} data-testid={dataTestId}>{children}</div>
  )
}
