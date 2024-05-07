import { PropsWithChildren, ReactElement } from 'react'

import css from './Card.module.scss'
import { WithDataTestId } from '@/types/data-test-id'

export type CardContentProps = PropsWithChildren<WithDataTestId>

export function CardContent({ children, 'data-testid': dataTestId }: CardContentProps): ReactElement {
  return (
    <div className={css.content} data-testid={dataTestId}>{children}</div>
  )
}
