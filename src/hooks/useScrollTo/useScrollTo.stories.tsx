import { useRef } from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { useScrollTo } from './useScrollTo'
import { Button } from '../../components/inputs'
import { Box } from '../../components/layout/Box'

function UseScrollToDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const scrollToElement = useScrollTo(ref)
  return (
    <Box col>
      <Button onClick={scrollToElement} label="Scroll to Lorem" />
      <div style={{ height: '20vh', background: 'lightgray', marginTop: '1rem' }} />
      <div ref={ref}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus sed sint iure commodi
        harum nulla ex optio voluptate incidunt porro veritatis aliquam et deserunt, quod culpa
        animi soluta! Eius, dolores!
      </div>
      <div style={{ height: '200vh', background: 'lightgray', marginBottom: '1rem' }} />
      <Button onClick={scrollToElement} label="Scroll to Lorem" />
    </Box>
  )
}

const meta: Meta<typeof UseScrollToDemo> = {
  title: 'Hooks/useScrollTo',
  component: UseScrollToDemo,
}
export default meta

export const Hook: StoryFn<typeof UseScrollToDemo> = () => <UseScrollToDemo />
