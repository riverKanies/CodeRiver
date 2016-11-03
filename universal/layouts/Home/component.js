import React from 'react'
import styles from './styles'
import MediumFeaturedPostBanner from 'components/MediumFeaturedPostBanner'
import MediumPostGrid from 'components/MediumPostGrid'
import FullWidthText from 'components/FullWidthText'
import Button from 'components/Button'
import EmailCapture from 'components/EmailCapture'
import QuoteSection from 'components/QuoteSection'
import ThriveStoryCarousel from 'components/ThriveStoryCarousel'

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

export const HomeView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <MediumFeaturedPostBanner />
      <MediumPostGrid />
      <FullWidthText {...sectionHWProps}>
        <Button {...btnHWProps} />
      </FullWidthText>
      <EmailCapture />
      <FullWidthText />
      <QuoteSection />
      <ThriveStoryCarousel />
      <EmailCapture />
    </main>
  )
}

export default HomeView
