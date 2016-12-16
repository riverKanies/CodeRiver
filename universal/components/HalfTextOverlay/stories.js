import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import HalfTextOverlay from './component'
import dummyImage from './assets/ariannaH.jpg'

const notes = 'This story demonstrates the props that can be passed to HalfTextOverlay'

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const props = {
  label: 'Label',
  labelColor: 'defaultLabel',
  title: 'Title',
  sectionText: defaultText,
  url: 'javascript:void',
  bgImage: dummyImage,
  hasButton: [
    'buttonTrue',
    'buttonFalse'
  ]
}

const defaultLabel = {
  label: 'Label',
  labelColor: 'whiteLabel'
}

storiesOf('HalfTextOverlay', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <HalfTextOverlay
          label={defaultLabel}
          title={text('Card Title', props.title)}
          sectionText={text('Section Text', props.sectionText)}
          url={text('Where does this link to?', props.url)}
          hasButton={select('Need a button?', props.hasButton, props.hasButton[1])}
          bgImage={text('What image goes here? Paste the URL here', props.bgImage)}
        />
      </WithNotes>
    )
  })
