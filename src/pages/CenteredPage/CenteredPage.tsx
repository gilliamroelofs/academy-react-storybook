import React, { ReactElement } from 'react';

import { Header } from '@/components/navigation';

import css from './CenteredPage.module.scss'
import { Box, Container } from '@/components/layout';
import { Typography } from '@/components/data';

type User = {
  name: string;
};

/**
 * In a real world, the CenteredPage would have a CenteredPageProps configuring all child content :)
 **/ 
export function CenteredPage(): ReactElement {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className={css.page}>
        <Container>
          <Box space-y-8 col>
            <Typography as="h1" variant="heading-2xl">Pages in Storybook</Typography>
            <Typography as="p">
              We recommend building UIs with a{' '}
              <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
                <strong>component-driven</strong>
              </a>{' '}
              process starting with atomic components and ending with pages.
            </Typography>
            <Typography as="p">
              Render pages with mock data. This makes it easy to build and review page states without
              needing to navigate to them in your app. Here are some handy patterns for managing page
              data in Storybook:
            </Typography>
            <ul>
              <li>
                Use a higher-level connected component. Storybook helps you compose such data from the
                "args" of child component stories
              </li>
              <li>
                Assemble data in the page component from your services. You can mock these services out
                using Storybook.
              </li>
            </ul>
            <Typography as="p">
              Get a guided tutorial on component-driven development at{' '}
              <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
                Storybook tutorials
              </a>
              . Read more in the{' '}
              <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
                docs
              </a>
              .
            </Typography>
          </Box>
        </Container>
      </section>
    </article>
  )
}
