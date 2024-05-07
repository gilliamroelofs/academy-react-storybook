import { Meta, StoryFn } from '@storybook/react'

import { Button } from './Button'
const meta: Meta<typeof Button> = {
  title: 'Components/Inputs/Button',
  component: Button,
}
export default meta

export const Component: StoryFn<typeof Button> = args => (
  <Button {...args} />
)
Component.args = {
  label: 'Foo',
  color: 'viridian',
  size: 'medium',
}
