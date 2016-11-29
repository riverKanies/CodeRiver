
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
import goodnightImg from './assets/goodnight.jpg'

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
  link: {
    linkText: 'Learn More',
    linkTo: 'http://thriveaway.thriveglobal.com',
    linkStyle: 'violet'
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
  link: {
    linkText: 'Learn More',
    linkTo: 'http://www.mschf.xyz/sandbox/thrive/',
    linkStyle: 'violet'
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
  link: {
    linkText: 'Learn More',
    linkTo: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=201602060',
    linkStyle: 'violet'
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
  link: {
    linkText: 'Learn More',
    linkTo: 'http://silo.thriveglobal.com/',
    linkStyle: 'violet'
  },
  label: {
    label: 'Android & iOS',
    labelColor: 'violetLabel'
  }
}

const goodnightSmartphone = {
  sectionClass: 'fade',
  hasColorBar: 'colorBarFalse',
  title: 'Goodnight Smartphone',
  sectionText: [
    `Sleep is central to every part of our lives, and a good night's sleep
    begins by putting aside the day's worries. But in today's technology-
    saturated world, saying good night to the day is harder than ever.
    Allow author Arianna Huffington (Thrive, The Sleep Revolution) to guide
    you to a peaceful night's slumber as she performs Goodnight Smartphone:
    a classic tale reborn for the modern age, when the hardest thing to say
    good night to is not the moon but our phones, our email, our social media,
    our always-on digital selves.`
  ],
  image: goodnightImg,
  link: {
    linkText: 'Get the Audiobook',
    linkTo:
    'http://www.audible.com/pd/Self-Development/Goodnight-Smartphone-' +
    'Audiobook/B01MXMW4KV?source_code=AUDORWS1121169IYG',
    linkStyle: 'violet'
  },
  label: {
    label: 'Audible exclusive',
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
      <FullWidthTwoColSpecial {...goodnightSmartphone} />
    </section>
  </section>
)

export default AppsView
