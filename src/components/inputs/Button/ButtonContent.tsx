import css from './Button.module.scss'
import { WithDataTestId } from '@/types/data-test-id'

export type ButtonContentProps = WithDataTestId & {
  label: string
}

export function ButtonContent({ label }: ButtonContentProps) {
  return (
    <div className={css.content}>
      <span className={css.text}>{label}</span>
    </div>
  )
}
