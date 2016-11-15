import React from 'react'
import styles from './styles'
import MediumPostGridDynamic from 'components/MediumPostGridDynamic'
import MediumPostDynamic from 'components/MediumPostDynamic'
import FullWidthText from 'components/FullWidthText'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import Button from 'components/Button'
import EmailCapture from 'components/EmailCapture'
import QuoteSection from 'components/QuoteSection'
import ThriveStoryCarousel from 'components/ThriveStoryCarousel'

import thriveScience from './assets/thriveScience.jpg'

const sectionHWProps = {
  sectionClass: 'healthWellness',
  title: 'Thrive Global',
  subTitle: 'Health & Wellness Program',
  sectionText: [`Replace me with real text, yo.`]
}
const btnHWProps = {
  buttonText: 'Read More',
  linkTo: '/',
  buttonColor: 'dark'
}
const twoColScience = {
  sectionClass: 'default',
  title: 'The Science Behind Thrive',
  label: 'Science',
  labelColor: 'defaultLabel',
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
    buttonColor: 'dark'
  }
}
const twoColLife = {
  sectionClass: 'transparent',
  title: 'The Science Behind Thrive',
  label: 'Science',
  labelColor: 'defaultLabel',
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
    buttonColor: 'dark'
  }
}

// Medium Post Props
const postOne = {
  cardType: 'half',
  hasImage: 'imageTrue',
  hasSynopsis: 'synopsisTrue'
}

export const HomeView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <MediumPostGridDynamic>
        <MediumPostDynamic {...postOne} />
      </MediumPostGridDynamic>
      <FullWidthText {...sectionHWProps}>
        <Button {...btnHWProps} />
      </FullWidthText>
      <FullWidthTwoCol {...twoColScience} />
      <FullWidthTwoColSpecial {...twoColLife} />
      <FullWidthText />
      <QuoteSection />
      <ThriveStoryCarousel />
      <EmailCapture />
    </main>
  )
}

export default HomeView
