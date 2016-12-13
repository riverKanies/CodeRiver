import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { decorateAction } from '@kadira/storybook-addon-actions'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs'

import { Button } from './component'
import StoryContainer from 'components/StoryContainer'

const handleClick = 'Click has been handled'

const props = {
  disabled: false,
  linkTo: '/',
  buttonStyle: 'violet-medium',
  label: 'Button Story'
}
const styles = [
  'violet',
  'violet-medium',
  'violet-large',
  'white',
  'white-medium',
  'white-large',
  'teal',
  'teal-medium',
  'teal-large'
]
const background = [
  'light',
  'dark'
]

const exampleAction = decorateAction([
  args => args.slice(0, 1)
])

const notes = `Select the buttonStyle from the list of knobs`

storiesOf('External Link', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryContainer
          style={select('Background', background, 'light')}
        >
          <Button
            disabled={boolean('Disabled', props.disabled)}
            linkTo={text('Target', props.linkTo)}
            buttonStyle={select('Style', styles, 'violet')}
            handleClick={exampleAction(handleClick)}
          >
            {text('Label', props.label)}
          </Button>
        </StoryContainer>
      </WithNotes>
    )
  })
