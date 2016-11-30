import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import FeaturedStory from './component'

const notes = 'This story demonstrates the props that can be passed to FeaturedStory'

const props = {
  title: 'FeaturedStory Title'
}

storiesOf('FeaturedStory', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FeaturedStory
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
