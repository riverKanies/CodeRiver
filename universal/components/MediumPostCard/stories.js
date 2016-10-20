import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import MediumPostCard from './component'

const notes = 'This story demonstrates the props that can be passed to MediumPostCard'

const props = {
  title: 'MediumPostCard'
}

storiesOf('MediumPostCard', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MediumPostCard
          title={text('Post Name', props.title)}
          collectionName={text('Medium Collection', props.collectionName)}
          postExcerpt={text('Post Excrept', props.postExcerpt)}
        />
      </WithNotes>
    )
  })
