import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import FullscreenBanner from './component'

const notes = 'This story demonstrates the props that can be passed to FullscreenBanner'

const props = {
  title: 'Banner'
}

storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FullscreenBanner
          title={text('Banner Title', props.title)}
          subTitle={text('Banner Sub Title', props.subTitle)}
          bannerText={text('Banner Text', props.bannerText)}
        />
      </WithNotes>
    )
  })
