import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'

import Header from './component'

storiesOf('Header', module)
  .add('header component', () => {
    return (
      <WithNotes notes={'This story demonstrates the props that can be passed to <Button />'}>
        <Header />
      </WithNotes>
    )
  })
