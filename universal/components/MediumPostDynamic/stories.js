import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import MediumPostDynamic from './component'

const notes = 'This story demonstrates the props that can be passed to MediumPostDynamic'

const props = {
  title: 'MediumPostDynamic'
}

storiesOf('MediumPostDynamic', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MediumPostDynamic
          title={text('Post Name', props.title)}
          collectionName={text('Medium Collection', props.collectionName)}
          postExcerpt={text('Post Excrept', props.postExcerpt)}
        />
      </WithNotes>
    )
  })
