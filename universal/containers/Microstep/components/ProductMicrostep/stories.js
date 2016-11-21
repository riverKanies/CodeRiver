import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import marked from 'marked'

import StoryContainer from 'components/StoryContainer'
import ProductMicrostep from './component'

const notes = 'This story demonstrates the props that can be passed to LinkMicrostep'

const markdown = `
Get a beautiful analog alarm clock for your bedside table to replace
your iPhone as your alarm.
`

const props = {
  microstep: {
    title: 'Product Title',
    body_html: marked(markdown),
    link: 'javascript:void(0)',
    price: '100.00',
    image: {
      src: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg'
    }
  }
}

const background = [
  'light',
  'dark'
]

storiesOf('ProductMicrostep', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryContainer style={select('Background', background, 'dark')}>
          <ProductMicrostep {...props} />
        </StoryContainer>
      </WithNotes>
    )
  })
