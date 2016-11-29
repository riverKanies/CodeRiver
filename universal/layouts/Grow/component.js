/* @flow */
import React from 'react'
import styles from './styles'

// Components
import TextBanner from 'components/TextBanner'
import CTASection from 'components/CTASection'
import TwoColTextImage from 'components/TwoColTextImage'
import PathwaySection from 'components/PathwaySection'
import QuoteSection from 'components/QuoteSection'
import ExternalLink from 'components/ExternalLink'

// Content Import
import kobeImage from './assets/kobe.jpg'
import ahImage from './assets/ah.jpg'
import ariannaQuote from './assets/ariannaQuote.jpg'

// Page Content
const banner = {
  bgColor: 'gradient',
  title: 'Grow',
  subTitle: `Begin your journey from living to thriving with our Pathways, Journeys
  and Microsteps. It's time to go from knowing what to do to actually doing it.`
}

const linkToAssessment = {
  alignment: 'center',
  colorScheme: 'blue',
  sectionWidth: 'twoThirdsWidth',
  title: 'Get Started',
  sectionText: [
    `Begin with the Thrive Pulse, our 10-question assessment that will help you take
    stock of your life and identify areas of improvement.`
  ],
  button: {
    buttonText: 'Get your Thrive Pulse',
    linkTo: '/pulse',
    buttonStyle: 'teal'
  }
}

const eCourse = {
  bgColor: 'transparent',
  marginBottom: 'marginFalse',
  hasTitle: 'titleTrue',
  titleCenter: 'centerTrue',
  title: 'E-Courses',
  colOneImg: kobeImage,
  colTwoImg: ahImage,
  colTextOne: [
    'The six-week online course with Arianna Huffington helps you move ' +
    'from surviving to thriving. The course uses scientifically proven methods to ' +
    'decrease stress and burnout and improve your overall health, happiness and well-being.',
    'In each lesson we tackle two steps — for a total of 12 steps (because we are ' +
    'all addicted to our current way of living and working!) — with practical tips and tools.'
  ],
  colTextTwo: [
    'The course also features tracking tools that will help you monitor your ' +
    'progress, achieve your goals, and thrive. And all our steps and practices ' +
    'are based on the latest scientific findings about the importance of sleep, ' +
    'meditation, renewal, and taking time to unplug and recharge.',
    'Guest teachers include Kobe Bryant, Wharton Professor Adam Grant, ' +
    'Warby Parker CEO Dave Gilboa, and more.']
}
const eCourseLink = {
  linkText: 'Go To E-Course',
  linkTo: 'http://learn.thriveglobal.com',
  linkStyle: 'violet'
}
const quote = {
  bgColor: 'gray',
  quoteFont: 'Playfair',
  quoteImage: ariannaQuote,
  quote: [
    'Intention is one of the most powerful forces there is. What you mean when ' +
    'you do a thing will always determine the outcome.'
  ],
  citation: 'Arianna Huffington'
}

export const GrowView = () => (
  <article className={styles.learnPage}>
    <section className={styles.content}>
      <TextBanner {...banner} />
      <CTASection {...linkToAssessment} />
      <PathwaySection />
      <TwoColTextImage {...eCourse} />
      <span className={styles.buttonWrap}>
        <ExternalLink {...eCourseLink} />
      </span>
      <QuoteSection {...quote} />
    </section>
  </article>
)

export default GrowView
