/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
import FullWidthText from 'components/FullWidthText'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import TwoColText from 'components/TwoColText'
import PathwaySection from 'components/PathwaySection'
import QuoteSection from 'components/QuoteSection'

import bannerImage from './assets/learnBanner.jpg'

const bannerProps = {
  contentPosition: 'bottomLeft',
  title: 'Learn & Grow',
  bannerText: 'Ad sea vidisse appetere evertitur, cu pro ridens efficiendi, duo.',
  bannerImage: bannerImage,
  bannerImageOverlay: 'overlayFalse',
  height: 'twoThirdsHeight'
}
const howToGrowOne = {
  sectionClass: 'white',
  title: 'How to Grow?',
  sectionText: [
    'So, where do you go from here? You know about the scientific ' +
    'evidence on sleep, meditation, giving, our relationship with technology, and so ' +
    'much more. But how do you move from awareness to action? How do you use this ' +
    'knowledge to make changes in your daily life?'
  ]
}
const howToGrowTwo = {
  bgColor: 'default',
  hasTitle: 'titleFalse',
  colTextOne: ['In a study on what made babies better at walking, scientists ' +
    'discovered that more than height, brain development, or any other variable, ' +
    'what really made the difference was simply how much time babies spent trying ' +
    'to walk. As Daniel Coyle writes in The Talent Code, “Baby steps are the royal ' +
    'road to skill,” and this is as true for sleep as it is for any other habit. ' +
    'Start small and keep at it.'],
  colTextTwo: [
    'But changing habits is not something we can achieve quickly. As ' +
    'with any other well-established pattern, making a lasting change requires ' +
    'taking small daily steps toward our goal. And the steps that will work for ' +
    'each of us are unique; we may need to try out a few different practices and ' +
    'rituals before landing on the right combination.'
  ]
}
const behaviorChange = {
  sectionClass: 'default',
  title: 'What is Behavior Change?',
  hasLabel: 'labelFalse',
  sectionText: [
    'Making a sustained behavioral change happens when we no longer ' +
    'feel we’re having to work to do something other than what we’d normally do. ' +
    'That is, it’s when we find a new equilibrium and create a new norm.'
  ],
  hasButton: 'buttonFalse'
}
const library = {
  sectionClass: 'transparent',
  title: 'What\'s in our library?',
  hasLabel: 'labelTrue',
  label: {
    label: 'Thrive Library'
  },
  sectionText: [
    'Our library offers articles, videos, podcasts, seminars and more ' +
    'from best-in-class thought leaders and experts around the world. We recognize ' +
    'the transformational power of community and personal storytelling, and so ' +
    'you’ll also find stories of people everywhere of how they’re bringing more ' +
    'well-being into their lives. We invite you to add your stories.'
  ],
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Read More',
    buttonStyle: 'blue',
    linkTo: 'javascript:void(0)'
  }
}
const eCourse = {
  bgColor: 'transparent',
  hasTitle: 'titleTrue',
  title: 'E-Course',
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
const quote = {
  bgColor: 'white',
  quote: [
    'Intention is one of the most powerful forces there is. What you mean when ' +
    'you do a thing will always determine the outcome.'
  ],
  citation: 'Arianna Huffington'
}

export const LearnView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <Banner {...bannerProps} />
      <FullWidthText {...howToGrowOne} />
      <TwoColText {...howToGrowTwo} />
      <FullWidthTwoCol {...behaviorChange} />
      <FullWidthTwoColSpecial {...library} />
      <PathwaySection />
      <TwoColText {...eCourse} />
      <QuoteSection {...quote} />
    </section>
  </section>
)

export default LearnView
