import { Meta, StoryFn } from '@storybook/react'

import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Components/Data/Typography',
  component: Typography,
  tags: ['autodocs'],
}
export default meta

export const Component: StoryFn<typeof Typography> = args => (
  <Typography {...args}>Lorem ipsum dolor sit amet</Typography>
)
Component.args = {
  as: 'h3',
  color: 'cannon',
}