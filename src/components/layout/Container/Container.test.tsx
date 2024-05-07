import { render, screen } from '@testing-library/react'

import { Container } from './Container'

describe('Container', () => {
  describe('defaults', () => {
    it('should render container', () => {
      const { container, getByText } = render(
        <Container>
          <p>Foo</p>
        </Container>
      )

      expect(container.getElementsByClassName('container')).toHaveLength(1)
      expect(getByText('Foo')).toBeInTheDocument()
    })

    it('should pass data-TestId', () => {
      render(
        <Container data-testid="container-test">
          <p>Foo</p>
        </Container>
      )
      expect(screen.queryByTestId('container-test')).toBeInTheDocument()
    })
  })
})
