import { Meta, StoryObj } from '@storybook/react'

import { CenteredPage } from './CenteredPage'
import { fn } from '@storybook/test'

const meta = {
  title: 'Pages/CenteredPage',
  component: CenteredPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof CenteredPage>;
export default meta

type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
