import type { Preview } from "@storybook/react";
// global styles
import '../src/assets/scss/main.scss'
import theme from './custom-theme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: theme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
