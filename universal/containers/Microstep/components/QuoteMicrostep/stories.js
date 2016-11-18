import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import StoryContainer from 'components/StoryContainer'
<<<<<<< HEAD
import QuoteMicrostep from './component'
=======
import QuoteMicrostep from './index'
>>>>>>> master

const notes = 'This story demonstrates the props that can be passed to QuoteMicrostep'

const markdown = `
<<<<<<< HEAD
##### We Suggest
# Get a Headstart.
Before you end your work day, take 10 minutes to look to the day ahead.
Mentally preparing for what’s to come tomorrow will alleviate unknowns and stress.

----

![Author Image](http://placekitten.com/g/600/600)

#### *by* Author Name
###### Wellbeing Consultant
=======
# Quote Microstep

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**. Itemized lists
look like:

  * this one
  * that one
  * the other one
>>>>>>> master
`

const microstep = {
  description: markdown
}
<<<<<<< HEAD
=======

>>>>>>> master
const background = [
  'light',
  'dark'
]
<<<<<<< HEAD
const colorScheme = [
  'white',
  'purple'
]
=======
>>>>>>> master

storiesOf('QuoteMicrostep', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
<<<<<<< HEAD
        <StoryContainer style={select('Background', background, 'dark')}>
          <QuoteMicrostep
            microstep={microstep}
            props={select('Microstep Color Scheme', colorScheme, 'white')}
          />
=======
        <StoryContainer
          style={select('Background', background, 'dark')}
        >
          <QuoteMicrostep microstep={microstep} />
>>>>>>> master
        </StoryContainer>
      </WithNotes>
    )
  })
