import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import StoryContainer from 'components/StoryContainer'
import QuoteMicrostep from './index'

const notes = 'This story demonstrates the props that can be passed to QuoteMicrostep'

const markdown = `
##### We Suggest
# Get a Headstart.
Before you end your work day, take 10 minutes to look to the day ahead.
Mentally preparing for what’s to come tomorrow will alleviate unknowns and stress.
<hr />
![Author Image](http://placekitten.com/g/600/600)

#### *by* Author Name
###### Wellbeing Consultant
`

const microstep = {
  description: markdown
}

const background = [
  'light',
  'dark'
]

const colorScheme = [
  'white',
  'purple'
]

storiesOf('QuoteMicrostep', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryContainer style={select('Background', background, 'dark')}>
          <QuoteMicrostep
            microstep={microstep}
            colorScheme={select('Microstep Color Scheme', colorScheme, 'white')}
          />
        </StoryContainer>
      </WithNotes>
    )
  })
