import type { ObjectWithBreakPointVariants } from './breakpoint'

export type Spacer = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 40 | 48 | 56 | 64 | 80 | 96 | 128

export type BlockPaddingOptionsVariants = ObjectWithBreakPointVariants<BlockPaddingOptions>

export type BlockPaddingOptions = ObjectWithBreakPointVariants<{
  padding?: Spacer
  paddingX?: Spacer
  paddingY?: Spacer
  paddingTop?: Spacer
  paddingRight?: Spacer
  paddingBottom?: Spacer
  paddingLeft?: Spacer
}>

export type BlockMarginOptions = ObjectWithBreakPointVariants<{
  margin?: Spacer
  marginX?: Spacer
  marginY?: Spacer
  marginTop?: Spacer
  marginRight?: Spacer
  marginBottom?: Spacer
  marginLeft?: Spacer
}>
