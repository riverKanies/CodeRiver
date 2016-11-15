import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import FeaturedProduct from './component'

const notes = 'This story demonstrates the props that can be passed to FeaturedProduct'

const props = {
  title: 'FeaturedProduct Title'
}

storiesOf('FeaturedProduct', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FeaturedProduct
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
