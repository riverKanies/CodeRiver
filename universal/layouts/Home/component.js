import React from 'react'
import styles from './styles'
import MediumFeaturedPostBanner from 'components/MediumFeaturedPostBanner'
import MediumPostGrid from 'components/MediumPostGrid'
import FullWidthText from 'components/FullWidthText'
import Button from 'components/button'
import EmailCapture from 'components/EmailCapture'
import QuoteSection from 'components/QuoteSection'
import ThriveStoryCarousel from 'components/ThriveStoryCarousel'

export const HomeView = () => {
  const ftwProps = {
    sectionClass: 'healthWellness',
    title: 'Thrive Global',
    subTitle: 'Health &amp; Wellness Program',
    sectionText: 'sdfsdfsdfs'
  }

  const btnProps = {
    buttonText: 'Read More',
    linkTo: '/',
    buttonColor: 'light'

  }
  return (
    <main role='main' className={styles.homePage}>
      <MediumFeaturedPostBanner />
      <MediumPostGrid />
      <FullWidthText {...ftwProps}>
        <Button {...btnProps} />
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
