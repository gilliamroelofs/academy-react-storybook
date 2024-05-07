import { PropsWithChildren, ReactElement } from 'react'
import {  WithDataTestId } from '@/types/data-test-id'

import css from './Box.module.scss'
import classNames from 'classnames'

export type BoxClsxUtil = 
  | 'f1'
  | 'auto'
  | 'initial'
  | 'none'
  | 'grow'
  | 'grow-0'
  | 'shrink'
  | 'shrink-0'
  | 'row'
  | 'row-reverse'
  | 'col'
  | 'col-reverse'
  | 'wrap'
  | 'wrap-reverse'
  | 'nowrap'
  | 'space-x-4' | 'space-x-8' | 'space-x-12' | 'space-x-16' | 'space-x-20' | 'space-x-24' | 'space-x-28' | 'space-x-32' | 'space-x-40' | 'space-x-48' | 'space-x-56' | 'space-x-64' | 'space-x-80' | 'space-x-96' | 'space-x-128'
  | 'space-y-4' | 'space-y-8' | 'space-y-12' | 'space-y-16' | 'space-y-20' | 'space-y-24' | 'space-y-28' | 'space-y-32' | 'space-y-40' | 'space-y-48' | 'space-y-56' | 'space-y-64' | 'space-y-80' | 'space-y-96' | 'space-y-128'

export type BoxProps = PropsWithChildren<
  WithDataTestId & 
  { [key in BoxClsxUtil]?: boolean } &
  { className?: string }>

export function Box({
  children,
  "data-testid": dataTestId,
  className,
  ...rest
}: BoxProps): ReactElement | null {
  const boxClass = classNames(css.box, Object.keys(rest).map(u => css[`b-${u}`]), className)

  return (
    <div data-testid={dataTestId} className={boxClass}>
      {children}
    </div>
  )
}
