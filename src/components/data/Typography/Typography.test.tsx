import { render, screen } from '@testing-library/react'

import { Typography, TypographyVariant } from './Typography'

describe('Typography', () => {
  const variantCases: TypographyVariant[] = [
    'heading-4xl', 'heading-3xl', 'heading-2xl',  'heading-xl', 'heading-lg', 'heading-sm', 'text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs'
  ]
  it('should be rendered', () => {
    const { container } = render(
      <Typography as="p" variant="text-sm">
        Test children
      </Typography>
    )

    expect(container.firstChild).toBeTruthy()
    expect(screen.getByText('Test children')).toBeTruthy()
  })

  it.each(variantCases)('should render correct variant class', variant => {
    const { container } = render(
      <Typography variant={variant} as="h1">
        Test children
      </Typography>
    )

    expect(container.firstChild).toHaveClass(`variant-${variant}`)
  })
})
