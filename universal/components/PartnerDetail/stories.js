import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import PartnerDetail from './component'

const notes = 'This story demonstrates the props that can be passed to PartnerDetail'

const props = {
  title: 'PartnerDetail Title'
}

storiesOf('PartnerDetail', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <PartnerDetail
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
