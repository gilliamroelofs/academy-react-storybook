import { create } from "@storybook/theming";

const theme = create({
  base: 'light', // this will inherit the base properties of Storybooks'light theme

  // Brand assets
  brandTitle: "Academy UI",
  // brandImage: 'assets/storybook/logos/take-off.svg',
})

export default theme