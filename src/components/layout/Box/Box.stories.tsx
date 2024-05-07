import { Meta, StoryFn } from '@storybook/react'

import { Box } from './Box'

import css from './Box.stories.module.scss'

const meta: Meta<typeof Box> = {
  title: 'Components/Layout/Box',
  component: Box,
  tags: ['autodocs'],
}
export default meta

const Template: StoryFn<typeof Box> = args => (
  <Box {...args} className={css.root}>
    <Box>01</Box>
    <Box>02</Box>
    <Box>03</Box>
  </Box>
)

export const Row: StoryFn<typeof Box> = Template.bind({})
Row.args = {
  row: true,
  'space-x-8': true
}

export const RowReversed: StoryFn<typeof Box> = Template.bind({})
RowReversed.args = {
  "row-reverse": true,
  'space-x-8': true
}

export const Column: StoryFn<typeof Box> = Template.bind({})
Column.args = {
  col: true,
  'space-y-8': true
}

export const ColumnReversed: StoryFn<typeof Box> = Template.bind({})
ColumnReversed.args = {
  "col-reverse": true,
  'space-y-8': true
}

export const Wrap: StoryFn<typeof Box> = args => (
  <Box {...args} className={css.root}>
    <Box className={css.wrapDemo}>01</Box>
    <Box className={css.wrapDemo}>02</Box>
    <Box className={css.wrapDemo}>03</Box>
  </Box>
)
Wrap.args = {
  "wrap": true,
  'space-x-8': true,
  'space-y-8': true
}

export const NoWrap: StoryFn<typeof Box> = args => (
  <Box {...args} className={css.root}>
    <Box className={css.wrapDemo}>01</Box>
    <Box className={css.wrapDemo}>02</Box>
    <Box className={css.wrapDemo}>03</Box>
  </Box>
)
NoWrap.args = {
  "nowrap": true,
  'space-x-8': true,
  'space-y-8': true
}

export const Grow: StoryFn<typeof Box> = args => (
  <Box {...args} className={css.root}>
    <Box>01</Box>
    <Box grow>02</Box>
    <Box>03</Box>
  </Box>
)
Grow.args = {
  'space-x-8': true,
  'space-y-8': true
}

export const DontGrow: StoryFn<typeof Box> = args => (
  <Box {...args} className={css.root}>
    <Box grow>01</Box>
    <Box grow-0>02</Box>
    <Box grow>03</Box>
  </Box>
)
DontGrow.args = {
  'space-x-8': true,
  'space-y-8': true
}

export const Shrink: StoryFn<typeof Box> = args => (
  <Box {...args} className={css.root}>
    <Box none>01</Box>
    <Box shrink>02</Box>
    <Box none>03</Box>
  </Box>
)
Shrink.args = {
  'space-x-8': true,
  'space-y-8': true
}

export const DontShrink: StoryFn<typeof Box> = args => (
  <Box {...args} className={css.root}>
    <Box f1>01</Box>
    <Box shrink-0>02</Box>
    <Box f1>03</Box>
  </Box>
)
DontShrink.args = {
  'space-x-8': true,
  'space-y-8': true
}

