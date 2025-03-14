import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { Button } from '../../buttons'
import { Heading, Paragraph, Ul, Li } from '../../typography'
import toaster from '../src'

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`

storiesOf('toaster', module).add('examples', () => (
  <Box padding={40}>
    <Box marginBottom={24}>
      <Heading size={600}>Toaster</Heading>
      <Paragraph>The toaster has the following methods:</Paragraph>
      <Ul>
        <Li>notify</Li>
        <Li>success</Li>
        <Li>warning</Li>
        <Li>danger</Li>
        <Li>closeAll — useful for page transitions when you want to close all toasts.</Li>
        <Li>getToasts — useful to know if you already triggered a toast.</Li>
      </Ul>
    </Box>
    <Box>
      <Box marginBottom={12}>
        <Button onClick={() => toaster.closeAll()}>Close All</Button>
      </Box>
      <Box marginBottom={12}>
        <Button marginRight={8} onClick={() => toaster.notify('A simple general message')}>
          Notify
        </Button>
        <Button
          marginRight={8}
          onClick={() =>
            toaster.notify('A simple general message', {
              description: loremIpsum
            })
          }
        >
          Notify with Text
        </Button>
        <Button
          marginRight={8}
          onClick={() =>
            toaster.notify('Custom ID, Should only show once', {
              id: 'general-message'
            })
          }
        >
          Notify once
        </Button>
        <Button
          marginRight={8}
          onClick={() =>
            toaster.notify('Cannot be closed by user', {
              hasCloseButton: false
            })
          }
        >
          Notify without close button
        </Button>
      </Box>
      <Box marginBottom={12}>
        <Button marginRight={8} onClick={() => toaster.success('Hooray! You did it. Your Source is now sending data.')}>
          Success
        </Button>
        <Button
          marginRight={8}
          onClick={() =>
            toaster.success('Hooray! You did it. Your Source is now sending data.', {
              description: loremIpsum
            })
          }
        >
          Success with Text
        </Button>
      </Box>
      <Box marginBottom={12}>
        <Button marginRight={8} onClick={() => toaster.warning('Changes will affect all Warehouses.')}>
          Warning
        </Button>

        <Button
          marginRight={8}
          onClick={() =>
            toaster.warning('Changes will affect all Warehouses.', {
              description: loremIpsum
            })
          }
        >
          Warning with Text
        </Button>
      </Box>
      <Box marginBottom={12}>
        <Button marginRight={8} onClick={() => toaster.danger('Changes will affect all Warehouses.')}>
          Danger
        </Button>

        <Button
          marginRight={8}
          onClick={() =>
            toaster.danger('Changes will affect all Warehouses.', {
              description: loremIpsum
            })
          }
        >
          Danger with Text
        </Button>

        <Button
          marginRight={8}
          onClick={() =>
            toaster.danger('Changes will affect all Warehouses.', {
              description: loremIpsum,
              id: 'dangerId',
              duration: 3600
            })
          }
        >
          Danger with id
        </Button>

        <Button marginRight={8} onClick={() => toaster.remove('dangerId')}>
          Danger remove notification with id
        </Button>
      </Box>
      <Box marginBottom={12}>
        <Button marginRight={8} onClick={() => toaster.notify('Top Left', {position: 'top-left'})}>
          Top Left
        </Button>
        <Button marginRight={8} onClick={() => toaster.notify('Top', {position: 'top'})}>
          Top
        </Button>
        <Button marginRight={8} onClick={() => toaster.notify('Top Right', {position: 'top-right'})}>
          Top Right
        </Button>
        <Button marginRight={8} onClick={() => toaster.notify('Bottom Left', {position: 'bottom-left'})}>
          Bottom Left
        </Button>
        <Button marginRight={8} onClick={() => toaster.notify('Bottom', {position: 'bottom'})}>
          Bottom
        </Button>
        <Button marginRight={8} onClick={() => toaster.notify('Bottom Right', {position: 'bottom-right'})}>
          Bottom Right
        </Button>
      </Box>
    </Box>
  </Box>
))
