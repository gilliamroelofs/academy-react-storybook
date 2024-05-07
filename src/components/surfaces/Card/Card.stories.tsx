import { Meta, StoryFn } from '@storybook/react'

import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardMedia } from './CardMedia'
import { CardActions } from './CardActions'
import { Typography } from '@/components/data'
import { Button } from '@/components/inputs'

const meta: Meta<typeof Card> = {
  title: 'Components/Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
}
export default meta

export const Component: StoryFn<typeof Notification> = () => (
  <Card>
    <CardMedia><img src="https://picsum.photos/400/300.webp" height={140} alt="Paella dish" /></CardMedia>
    <CardContent>
      <Typography as="p" variant="heading-sm">Lizard</Typography>
      <Typography as="p" variant="text-sm">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
    </CardContent>
    <CardActions>
      <Button label="foo"/>
      <Button label="bar" color="denim"/>
    </CardActions>
  </Card>
)
