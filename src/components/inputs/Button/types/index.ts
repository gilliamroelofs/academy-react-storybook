import { Color } from "@/types/color"

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonPropsBase = {
  disabled?: boolean
  size?: ButtonSize
  color?: Color
}
