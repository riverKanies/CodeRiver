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
  const sectionHWProps = {
    sectionClass: 'healthWellness',
    title: 'Thrive Global',
    subTitle: 'Health & Wellness Program',
    sectionText: [`Morbi leo risus, porta ac consectetur ac, vestibulum at
    eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
    mattis consectetur purus sit amet fermentum.`]
  }
  const btnHWProps = {
    buttonText: 'Read More',
    linkTo: '/',
    buttonColor: 'dark'
  }
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
