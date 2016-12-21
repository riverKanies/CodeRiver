import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs'
import BannerSuper from './component'
import dummyImage from './assets/pledge-banner.jpg'

const notes = 'This story demonstrates the props that can be passed to BannerSuper.'

const defaulText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`

const Props = {
  title: ['Title Text'],
  bannerText: defaulText,
  bannerImage: dummyImage,
  bannerImageOverlay: [
    'overlayTrue',
    'overlayFalse'
  ],
  hasButton: [
    true,
    false
  ],
  hasContentImage: [
    true,
    false
  ],
  hasContentImageText: [
    true,
    false
  ]
}

storiesOf('BannerSuper', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <BannerSuper
          title={text('Title Text', Props.title)}
          bannerText={text('Banner Copy Text', Props.bannerText)}
          bannerImage={text('Banner background image URL.', Props.bannerImage)}
          bannerImageOverlay={
            select('Does this background image need an overlay for contrast?',
            Props.bannerImageOverlay,
            Props.bannerImageOverlay[1])
          }
          hasButton={boolean('Does this need a button?', Props.hasButton, Props.hasButton[1])}
          hasContentImage={
            boolean('Do you want an additional image in the bottom right?',
            Props.hasContentImage,
            Props.hasContentImage[1])
          }
          hasContentImageText={
            boolean('Need type above the extra image?',
            Props.hasContentImageText,
            Props.hasContentImageText[1])
          }
        />
      </WithNotes>
    )
  })