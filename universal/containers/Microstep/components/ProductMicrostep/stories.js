import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import marked from 'marked'

import StoryContainer from 'components/StoryContainer'
import ProductMicrostep from './component'
import defaultImage from './assets/product-placeholder.jpg'

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
    price: '$100.00',
    image: {
      src: defaultImage
    }
  },
  button: {
    buttonText: 'Learn More',
    buttonStyle: 'violet'
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
