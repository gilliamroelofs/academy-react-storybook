export type Breakpoint = 'xs' | 'md' | 'lg' | 'xl'

export type BreakpointVariantNames<Name extends string> = `${Name}${Capitalize<Breakpoint>}`

export type GetBreakPointVariants<T> = {
  [Property in keyof T as BreakpointVariantNames<string & Property>]: T[Property]
}

export type ObjectWithBreakPointVariants<T> = T & GetBreakPointVariants<T>
