import React from 'react'
import styles from './styles'
import MediumPostGridDynamic from 'components/MediumPostGridDynamic'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import FeaturedProduct from 'components/FeaturedProduct'
import FeaturedStory from 'components/FeaturedStory'
import HalfTextOverlay from 'components/HalfTextOverlay'
import QuoteSection from 'components/QuoteSection'

import thriveScienceImg from './assets/thriveScience.jpg'

const featuredStory = {
  externalLink: {
    linkText: 'Read Story',
    linkTo: 'https://medium.com/@myleik/lessons-from-kobe-bryant-5efdf8e54a12#.ork0vw64p',
    linkStyle: 'white'
  }
}
const goodLife = {
  sectionClass: 'transparent',
  title: 'The Science Behind Thrive',
  label: {
    label: 'Editorial',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    'Science shows that there is no trade-off between well-being ' +
    'and high performance. Thrive Global, through its trainings, seminars, ' +
    'e-courses, coaching, ongoing support, and e-commerce, all based on ' +
    'scientific findings from experts in the fields of neuroscience, ' +
    'psychology, productivity, sports, and sleep, is changing the way we ' +
    'work and live.'
  ],
  image: thriveScience,
  button: {
    buttonText: 'Read More',
    linkTo: 'javascript:void(0)',
    buttonStyle: 'violet'
  }
}
const homeQuote = {
  bgColor: 'default',
  quote: [
    'Intention is one of the most powerful forces there is. What you mean when ' +
    'you do a thing will always determine the outcome.'
  ],
  citation: 'Arriana Huffington',
  // quoteImage: any,
  imageShape: 'roundImage'
}
const thriveFoundation = {
  sectionClass: 'transparent',
  title: 'Thrive Foundation',
  hasLabel: 'labelFalse',
  sectionText: [
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  ],
  // image: 'string',
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Read More',
    linkTo: 'javascript:void(0)',
    buttonStyle: 'violet'
  }
}
const thriveEcho = {
  sectionClass: 'default',
  title: 'Thrive for Amazon Echo',
  hasLabel: 'labelTrue',
  label: {
    label: 'Thrive',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    'Cras mattis consectetur purus sit amet fermentum.'
  ],
  // image: 'string',
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Learn More',
    linkTo: 'javascript:void(0)',
    buttonStyle: 'violet'
  }
}
const thriveScience = {
  sectionClass: 'transparent',
  title: 'The Science Behind Thrive',
  hasLabel: 'labelTrue',
  label: {
    label: 'Science',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    'Science shows that there is no trade-off between well-being ' +
    'and high performance. Thrive Global, through its trainings, seminars, ' +
    'e-courses, coaching, ongoing support, and e-commerce, all based on ' +
    'scientific findings from experts in the fields of neuroscience, ' +
    'psychology, productivity, sports, and sleep, is changing the way we ' +
    'work and live.'
  ],
  image: thriveScienceImg,
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Read More',
    linkTo: 'javascript:void(0)',
    buttonStyle: 'violet'
  }
}
const thrivePulse = {
  sectionClass: 'default',
  title: 'What\'s Your Thrive Pulse?',
  hasLabel: 'labelTrue',
  label: {
    label: 'Thrive',
    labelColor: 'tealLabel'
  },
  sectionText: [
    'Cras mattis consectetur purus sit amet fermentum.'
  ],
  // image: 'string',
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Find Out',
    linkTo: 'javascript:void(0)',
    buttonStyle: 'teal'
  }
}
export const HomeView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <MediumPostGridDynamic />
      <FeaturedProduct />
      <FeaturedStory {...featuredStory} />
      <HalfTextOverlay {...goodLife} />
      <QuoteSection {...homeQuote} />
      <FullWidthTwoColSpecial {...thriveFoundation} />
      <FullWidthTwoCol {...thriveEcho} />
      <FullWidthTwoColSpecial {...thriveScience} />
      <FullWidthTwoCol {...thrivePulse} />
    </main>
  )
}

export default HomeView
