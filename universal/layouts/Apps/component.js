
/* @flow */
import React from 'react'
import styles from './styles'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import TextBanner from 'components/TextBanner'

import alexaImage from './assets/alexa.jpg'
import joyTriggerImage from './assets/joyTrigger.jpg'
import siloImage from './assets/silo.jpg'
import thriveAwayImage from './assets/thriveAway.jpg'

const appsBanner = {
  bgColor: 'gradient',
  hasTitle: 'titleTrue',
  subTitle: `A series of signature apps that help you unplug, recharge, and set
  boundaries in your relationship with technology`,
  title: 'Apps'
}

const thriveAway = {
  sectionClass: 'fade',
  title: 'Thrive Away',
  hasColorBar: 'colorBarFalse',
  sectionText: [
    `Take a proper vacation from your inbox.
    Truly unplug with Thrive Away, the vacation e-mail tool that automatically
    deletes new emails until you're back in the office.`
  ],
  image: thriveAwayImage,
  button: {
    buttonText: 'Learn More',
    linkTo: 'http://thriveaway.thriveglobal.com',
    buttonStyle: 'violet'
  },
  label: {
    label: 'Web App & iOS',
    labelColor: 'blurpleLabel'
  }
}

const joyTrigger = {
  sectionClass: 'fade',
  title: 'Joy Trigger',
  sectionText: [
    `Bring more joy (and actionable tips) to your browsing.
    Each time you open a new tab, you'll see an adorable animal GIF alongside
    information for bringing more well-being and productivity to your life.`
  ],
  image: joyTriggerImage,
  button: {
    buttonText: 'Learn More',
    linkTo: 'http://www.google.com',
    buttonStyle: 'violet'
  },
  label: {
    label: 'Google Chrome Extension',
    labelColor: 'blurpleLabel'
  }
}

const alexa = {
  sectionClass: 'fade',
  hasColorBar: 'colorBarFalse',
  title: 'Thrive for Alexa Skill',
  sectionText: [
    `Thrive for Alexa, available on Amazon Echo, helps you power down for a good
    night's sleep – without any screens in the bedroom.
    Ask Alexa and she'll help you unwind with a guided meditation from
    Agapi Stassinopoulos.`
  ],
  image: alexaImage,
  button: {
    buttonText: 'Learn More',
    linkTo: 'http://www.amazon.com',
    buttonStyle: 'violet'
  },
  label: {
    label: 'Amazon Alexa Skill',
    labelColor: 'violetLabel'
  }
}

const silo = {
  sectionClass: 'fade',
  title: 'Take Back Your Phone',
  sectionText: [
    `By selectively blocking distractions, alerts, and notifications on your phone,
    while ensuring you don't miss important calls, Silo allows you to reclaim space
    in your life for focus, creativity, and truly connecting with the world, those around you, and yourself.`
  ],
  image: siloImage,
  button: {
    buttonText: 'Learn More',
    linkTo: 'http://silo.thriveglobal.com/',
    buttonStyle: 'violet'
  },
  label: {
    label: 'Android & iOS',
    labelColor: 'violetLabel'
  }
}

export const AppsView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <TextBanner {...appsBanner} />
      <FullWidthTwoColSpecial {...thriveAway} />
      <FullWidthTwoCol {...joyTrigger} />
      <FullWidthTwoColSpecial {...alexa} />
      <FullWidthTwoCol {...silo} />
    </section>
  </section>
)

export default AppsView
