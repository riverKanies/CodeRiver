
/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import FullWidthTwoCol from 'components/FullWidthTwoCol'

import bannerImage from './assets/techBanner.jpg'
import alexaImage from './assets/alexaImage.png'
import joyTriggerImage from './assets/joyTriggerImage.jpg'
import siloImage from './assets/siloImage.jpg'
import thriveAwayImage from './assets/thriveAwayImage.jpg'

const bannerProps = {
  contentPosition: 'bottomLeft',
  title: 'Tech Page',
  bannerText: 'Thrive is in the process of creating technology to enrich your life.',
  bannerImage: bannerImage,
  height: 'halfHeight'
}

const alexa = {
  sectionClass: 'default',
  title: 'Alexa knows how to Thrive',
  sectionText: [
    `Sleep is deeply connected to every aspect of our well-being,
    from our physical and mental health to our productivity and creativity. And
    meditation has been proven to help people get people get to sleep more
    quickly and sleep more soundly.
    Thrive for Alexa from Thrive Global offers an eight-minute guided
    meditation from Agapi Stassinopoulos to help you get a good night’s sleep
    and wake up refreshed. Make it a regular part of your bedtime routine, or
    use it whenever you need to relax and recharge.`
  ],
  image: alexaImage,
  button: {
    buttonText: 'Get the App',
    linkTo: 'http://www.amazon.com',
    buttonStyle: 'violet'
  },
  label: {
    label: 'Alexa App',
    labelColor: 'defaultLabel'
  }
}

const joyTrigger = {
  sectionClass: 'default',
  title: 'Healthy Living, In Every Tab',
  sectionText: [
    `The cutest reminders for healthy living, in every new tab.
    Get treated to a cute animal GIF every time you open a new tab, as well as
    a simple and actionable health tip based on the time of day.`
  ],
  image: joyTriggerImage,
  button: {
    buttonText: 'Download',
    linkTo: 'http://www.google.com',
    buttonStyle: 'violet'
  },
  label: {
    label: 'Google Chrome Extension',
    labelColor: 'violetLabel'
  }
}

const silo = {
  sectionClass: 'default',
  title: 'Take Back Your Phone',
  sectionText: [
    `Silo empowers users by giving them information on their usage, and provides them
    with AI assistants to manage activity while in Silo Mode. There will also be an
    administrator option, giving tools to parents, school, and event organizers to establish
    more effective smartphone policies.`
  ],
  image: siloImage,
  button: {
    buttonText: 'Get the App',
    linkTo: 'http://www.google.com',
    buttonStyle: 'violet'
  },
  label: {
    label: 'Android & iOS',
    labelColor: 'violetLabel'
  }
}

const thriveAway = {
  sectionClass: 'default',
  title: 'Thrive on Vacation',
  sectionText: [
    `Reclaim your time off. Have a more relaxing vacation by letting everyone
    know you are away and automatically deleting new emails until you are back.`
  ],
  image: thriveAwayImage,
  button: {
    buttonText: 'Get the App',
    linkTo: 'http://www.google.com',
    buttonStyle: 'violet'
  },
  label: {
    label: 'Android & iOS',
    labelColor: 'violetLabel'
  }
}

export const ThriveTechView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <Banner {...bannerProps} />
      <FullWidthTwoCol {...alexa} />
      <FullWidthTwoColSpecial {...joyTrigger} />
      <FullWidthTwoCol {...silo} />
      <FullWidthTwoColSpecial {...thriveAway} />
    </section>
  </section>
)

export default ThriveTechView
