import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import FullWidthText from './component'

const notes = 'This story demonstrates the props that can be passed to FullWidthText'

const props = {
  title: 'FullWidthText'
}

storiesOf('FullWidthText', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FullWidthText
          title={text('Section Title', props.title)}
          subTitle={text('Section Subtitle', props.subTitle)}
          sectionText={text('Section Text', props.sectionText)}
        />
      </WithNotes>
    )
  })
