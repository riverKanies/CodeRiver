import React from 'react'
import styles from './styles'
import MediumPostGridDynamic from 'components/MediumPostGridDynamic'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
<<<<<<< 81e7f329424991897b0dfaac0054d8d0d10252fe
=======
import Button from 'components/Button'
import FeaturedProduct from 'components/FeaturedProduct'
import EmailCapture from 'components/EmailCapture'
>>>>>>> WIP
import QuoteSection from 'components/QuoteSection'
import ThriveStoryCarousel from 'components/ThriveStoryCarousel'
import thriveScience from './assets/thriveScience.jpg'

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

export const HomeView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <MediumPostGridDynamic />
      <FeaturedProduct />
      <ThriveStoryCarousel />
      <QuoteSection />
      <FullWidthTwoCol {...twoColScience} />
      <FullWidthTwoColSpecial {...twoColLife} />
    </main>
  )
}

export default HomeView
