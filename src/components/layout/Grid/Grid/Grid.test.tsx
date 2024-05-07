import { render, screen } from '@testing-library/react'

import type { Spacer } from '@/types/spacers'

import { Column } from '../Column/Column'
import type { GridColumns, GridProps, GridRows, ImplicitFlow, ImplicitSize } from './Grid'
import { Grid } from './Grid'

function createBreakpointPropCases<T>(
  options: T[],
  propName: keyof GridProps
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
    it('should render grid', () => {
      const { container, getByText } = render(
        <Grid>
          <Column>foo</Column>
        </Grid>
      )

      expect(container.getElementsByClassName('grid')).toHaveLength(1)
      expect(getByText('foo')).toBeInTheDocument()
    })
  })

  describe('props', () => {
    const columnOptions: GridColumns[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none']
    const rowOptions: GridRows[] = [1, 2, 3, 4, 5, 6, 'none']
    const flowOptions: ImplicitFlow[] = ['row', 'column', 'dense', 'row-dense', 'column-dense']
    const sizeOptions: ImplicitSize[] = ['auto', 'min', 'max', 'fr']
    const gutterOptions: Spacer[] = [0, 4, 8, 12, 16, 20]

    const columnCases = createBreakpointPropCases(columnOptions, 'columns')
    const rowCases = createBreakpointPropCases(rowOptions, 'rows')
    const flowCases = createBreakpointPropCases(flowOptions, 'flow')
    const autoColumnsCases = createBreakpointPropCases(sizeOptions, 'autoColumns')
    const autoRowsCases = createBreakpointPropCases(sizeOptions, 'autoRows')
    const gutterCases = createBreakpointPropCases(gutterOptions, 'gutter')
    const columnGutterCases = createBreakpointPropCases(gutterOptions, 'columnGutter')
    const rowGutterCases = createBreakpointPropCases(gutterOptions, 'rowGutter')

    function testPropSetsClass<T>(value: T, prop: string, cssClass: string): void {
      const args = { [prop]: value }

      const { container } = render(
        <Grid {...args}>
          <Column>foo</Column>
        </Grid>
      )

      const el = container.getElementsByClassName(cssClass)

      expect(el).toHaveLength(1)
    }

    it.each(columnCases)(
      'should render correct class for column prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}grid-cols-${value}`)
      }
    )

    it.each(rowCases)(
      'should render correct class for row prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}grid-rows-${value}`)
      }
    )

    it.each(flowCases)(
      'should render correct class for flow prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}grid-flow-${value}`)
      }
    )

    it.each(autoColumnsCases)(
      'should render correct class for autoColumns prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}auto-cols-${value}`)
      }
    )

    it.each(autoRowsCases)(
      'should render correct class for autoRows prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}auto-rows-${value}`)
      }
    )

    it.each(gutterCases)(
      'should render correct class for gutter prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}gap-${value}`)
      }
    )

    it.each(columnGutterCases)(
      'should render correct class for columnGutter prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}gap-x-${value}`)
      }
    )

    it.each(rowGutterCases)(
      'should render correct class for rowGutter prop',
      ({ value, prop, classPrefix }) => {
        testPropSetsClass(value, prop, `${classPrefix}gap-y-${value}`)
      }
    )

    it('should pass data-TestId', () => {
      render(
        <Grid data-testid="grid-test">
          <Column />
        </Grid>
      )
      expect(screen.queryByTestId('grid-test')).toBeInTheDocument()
    })
  })
})
