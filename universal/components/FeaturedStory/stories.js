import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs'

import FeaturedStory from './component'

const notes = 'This story demonstrates the props that can be passed to FeaturedStory'

const props = {
  bgLink: [
    true,
    false
  ],
  bgColor: [
    'default',
    'blue',
    'teal',
    'blurple'
  ],
  hasLabel: [
    true,
    false
  ],
  title: 'FeaturedStory Title',
  details: `
    Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a
    ante venenatis dapibus posuere velit aliquet.`,
  hasAuthor: [
    true,
    false
  ],
  author: 'Author Name',
  hasButton: [
    true,
    false
  ]
}

storiesOf('FeaturedStory', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FeaturedStory
          bgLink={boolean('Would you like the background image as a link?', props.bgLink, props.bgLink[1])}
          bgColor={select('Background Color', props.bgColor, props.bgColor[2])}
          hasLabel={boolean('Does this need a content label?', props.hasLabel, props.hasLabel[1])}
          title={text('Title Text', props.title)}
          details={text('Main text.', props.details)}
          hasAuthor={boolean('Would you like to show the author name?', props.hasAuthor, props.hasAuthor[0])}
          hasButton={boolean('Does this need a button CTA?', props.hasButton, props.hasButton[0])}
        />
      </WithNotes>
    )
  })
