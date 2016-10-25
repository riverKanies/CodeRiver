import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import MediumFeaturedPostBanner from './component'

const notes = 'This story demonstrates the props that can be passed to MediumFeaturedPostBanner'

const props = {
  title: 'MediumFeaturedPostBanner Title',
  buttonText: 'Read Me',
  buttonolor: 'bannerButton'
}

storiesOf('MediumFeaturedPostBanner', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MediumFeaturedPostBanner
          title={text('Title', props.title)}
          buttonText={text('Button Text', props.buttonText)}
          buttonColor={text('Button Color', props.buttonColor)}
        />
      </WithNotes>
    )
  })
