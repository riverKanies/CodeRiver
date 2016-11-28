/* @flow */
import React from 'react'
import styles from './styles'

// Components
import TwoColHeader from 'components/TwoColHeader'
import CTASection from 'components/CTASection'
import FullWidthText from 'components/FullWidthText'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import TwoColText from 'components/TwoColText'
import TwoColImage from 'components/TwoColImage'
import PathwaySection from 'components/PathwaySection'
import QuoteSection from 'components/QuoteSection'
import ExternalLink from 'components/ExternalLink'

// Content Import
import kobeImage from './assets/kobe.jpg'
import ahImage from './assets/ah.jpg'

// Page Content
const TwoColHeaderProps = {
  title: 'Grow',
  subTitle: 'Donec sed odio dui.'
}
const learnIntro = {
  sectionClass: 'white',
  sectionWidth: 'twoThirdsWidth',
  textAlign: 'textLeft',
  header: 'headerFalse',
  title: '',
  sectionText: [
    'Welcome to the Thrive Global Pathways. There are five pathways built of ' +
    'multiple microsteps you can practice in a sustainable way. The steps are ' +
    'small and very easy to integrate into your life, but the impact is ' +
    'transformational. This is the part where we go from knowing what to do to ' +
    'actually doing it. Choose the Pathway you want to begin with--Joy, Calm, ' +
    'Productivity, Well-Being and Purpose.',
    'The purpose of a microstep, simply stated, is the tiniest step you can ' +
    'take to put you on the path towards what you want to achieve. Once you are ' +
    'on the path, myriad opportunities open up for you to improve your health, ' +
    'productivity, and happiness. Our microsteps are practical and they work! ' +
    'Pick the microstep that becomes your cornerstone habit, and keep adding ' +
    'in the order that works best for you.',
    'There are five Pathway Protocols -- experiment with them, discover what ' +
    'most resonates with you, and return to it again and again. You can do ' +
    'these at any time -- as you begin your pathways, on your commute, during ' +
    'a break in your day, or before you go to bed at night. We have bracketed ' +
    'in italics commentary to help you practice the protocols the first few ' +
    'times, after which it will become second nature'
  ]
}
const howToGrowTwo = {
  bgColor: 'default',
  hasTitle: 'titleTrue',
  title: 'How to Grow?',
  colTextOne: [
    'So, where do you go from here? You know about the scientific ' +
    'evidence on sleep, meditation, giving, our relationship with technology, and so ' +
    'much more. But how do you move from awareness to action? How do you use this ' +
    'knowledge to make changes in your daily life?',
    'In a study on what made babies better at walking, scientists ' +
    'discovered that more than height, brain development, or any other variable, ' +
    'what really made the difference was simply how much time babies spent trying ' +
    'to walk. As Daniel Coyle writes in The Talent Code, “Baby steps are the royal ' +
    'road to skill,” and this is as true for sleep as it is for any other habit. ' +
    'Start small and keep at it.'
  ],
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

const linkToAssessment = {
  colorScheme: 'white',
  sectionWidth: 'fullWidth',
  title: 'Are You Thriving?',
  sectionText: [
    `Do you thrive? Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.`],
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
const eCourseLink = {
  linkText: 'Go To E-Course',
  linkTo: 'http://learn.thriveglobal.com',
  linkStyle: 'violet'
}
const images = {
  bgColor: 'transparent',
  hasTitle: 'titleFalse',
  colOneImg: kobeImage,
  colTwoImg: ahImage
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
  <article className={styles.learnPage}>
    <section className={styles.content}>
      <TwoColHeader {...TwoColHeaderProps} />
      <FullWidthText {...learnIntro} />
      <PathwaySection />
      <TwoColText {...howToGrowTwo} />
      <FullWidthTwoCol {...behaviorChange} />
      <FullWidthTwoColSpecial {...library} />
      <CTASection {...linkToAssessment} />
      <TwoColText {...eCourse} />
      <span className={styles.buttonWrap}>
        <ExternalLink {...eCourseLink} />
      </span>
      <TwoColImage {...images} />
      <QuoteSection {...quote} />
    </section>
  </article>
)

export default LearnView
