import { PropsWithChildren, ReactElement } from 'react'

import css from './Card.module.scss'
import { WithDataTestId } from '@/types/data-test-id'

export type CardMediaProps = PropsWithChildren<WithDataTestId>

export function CardMedia({ children, 'data-testid': dataTestId }: CardMediaProps): ReactElement {
  return (
    <div className={css.media} data-testid={dataTestId}>{children}</div>
  )
}
