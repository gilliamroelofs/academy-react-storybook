import { render, screen } from '@testing-library/react'

import type { ColumnPosition, ColumnProps, ColumnSpan } from './Column'
import { Column } from './Column'

function createBreakpointPropCases<T>(
  options: T[],
  propName: keyof ColumnProps
): {
  value: T
  prop: string
  classPrefix: string
}[] {
  return ['', 'Xs', 'Md', 'Lg', 'Xl']
    .map(bp =>
      options.map(value => ({
        value,
        prop: `${propName}${bp}`,
        classPrefix: bp ? `${bp.toLocaleLowerCase()}-` : '',
      }))
    )
    .flat(1)
}

describe('Grid', () => {
  describe('defaults', () => {
    it('should render column', () => {
      const { container, getByText } = render(<Column>Foo</Column>)

      expect(container.getElementsByClassName('column')).toHaveLength(1)
      expect(getByText('Foo')).toBeInTheDocument()
    })
  })

  describe('props', () => {
    const spanOptions: ColumnSpan[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'full']
    const positonOptions: ColumnPosition[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'auto']

    const spanCases = createBreakpointPropCases(spanOptions, 'span')
    const startCases = createBreakpointPropCases(positonOptions, 'start')
    const endCases = createBreakpointPropCases(positonOptions, 'end')

    const rowSpanCases = createBreakpointPropCases(spanOptions, 'rowSpan')
    const rowStartCases = createBreakpointPropCases(positonOptions, 'rowStart')
    const rowEndCases = createBreakpointPropCases(positonOptions, 'rowEnd')

    function testPropSetsClass<T>(value: T, prop: string, cssClass: string): void {
      const args = { [prop]: value }

      const { container } = render(<Column {...args}> Foo</Column>)

      const el = container.getElementsByClassName(cssClass)

      expect(el).toHaveLength(1)
    }

    it.each(spanCases)(
      'should render correct class for span prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}col-span-${value}`)
      }
    )

    it.each(startCases)(
      'should render correct class for start prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}col-start-${value}`)
      }
    )

    it.each(endCases)(
      'should render correct class for end prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}col-end-${value}`)
      }
    )

    it.each(rowSpanCases)(
      'should render correct class for row span prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}row-span-${value}`)
      }
    )

    it.each(rowStartCases)(
      'should render correct class for row start prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}row-start-${value}`)
      }
    )

    it.each(rowEndCases)(
      'should render correct class for row end prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}row-end-${value}`)
      }
    )

    it('should pass data-TestId', () => {
      render(<Column data-testid="column-test">Foo</Column>)
      expect(screen.queryByTestId('column-test')).toBeInTheDocument()
    })

    it('should set grid-area value based on area prop', () => {
      render(
        <Column data-testid="column-test" area="aside">
          Foo
        </Column>
      )
      const colEl = screen.queryByTestId('column-test')

      expect(colEl?.getAttribute('style')).toBe('grid-area: aside;')
    })
  })
})
