import { PropsWithChildren, ReactElement } from "react"
import classNames from 'classnames'

import css from './Typography.module.scss'
import { Color } from "@/types/color"

export type TypographyAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
export type TypographyVariant = 'heading-4xl' | 'heading-3xl' | 'heading-2xl' | 'heading-xl' | 'heading-lg' | 'heading-sm' | 'text-xl' | 'text-lg' | 'text-base' | 'text-sm' | 'text-xs'

export type TypographyProps = PropsWithChildren<{
  as: TypographyAs
  variant?: TypographyVariant
  bold?: boolean
  color?: Color
}>

export function Typography({
  as: Component,
  children,
  variant,
  color,
  bold
}: TypographyProps): ReactElement {
  const className = classNames(
    variant && css[`variant-${variant}`],
    bold && css.bold,
    color && css[color]
  )

  return <Component className={className} >{children}</Component>
}